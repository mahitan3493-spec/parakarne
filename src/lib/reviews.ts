import { arrayUnion, deleteField, doc, getDoc, increment, serverTimestamp, updateDoc, writeBatch } from "firebase/firestore";
import { db, firebaseMissingMessage } from "./firebase";
import { overallFromCategories } from "./bank-stats";
import { publicDisplayName } from "./display-name";
import type { ApplicationOutcome, CategoryRatings, CreditOutcome, EmploymentStatus, FindeksScoreRange, Review } from "./types";
function requireDb(){ if(!db) throw new Error(firebaseMissingMessage); return db; }
export async function submitReview(params:{uid:string;userName:string;bankId:string;bankName:string;categories:CategoryRatings;creditOutcome?:CreditOutcome;creditApplicationOutcome?:ApplicationOutcome;creditCardApplicationOutcome?:ApplicationOutcome;employmentStatus?:EmploymentStatus;findeksScoreRange?:FindeksScoreRange;text:string;}){
  const stars=overallFromCategories(params.categories); const currentDb=requireDb(); const reviewId=`${params.uid}_${params.bankId}`;
  const reviewRef=doc(currentDb,"reviews",reviewId); const privateRef=doc(currentDb,"reviewPrivate",reviewId);
  if((await getDoc(reviewRef)).exists()) throw new Error("Bu bankayı zaten puanladın. Her kullanıcı aynı bankaya yalnızca 1 karne bırakabilir.");
  const batch=writeBatch(currentDb);
  batch.set(reviewRef,{uid:params.uid,userName:publicDisplayName(params.userName),bankId:params.bankId,bankName:params.bankName,stars,categories:params.categories,...(params.creditOutcome?{creditOutcome:params.creditOutcome}:{}),...(params.creditApplicationOutcome?{creditApplicationOutcome:params.creditApplicationOutcome}:{}),...(params.creditCardApplicationOutcome?{creditCardApplicationOutcome:params.creditCardApplicationOutcome}:{}),text:params.text,note:"Bu yorum karne ortalamasına eklendi.",status:"published",reportCount:0,reportedBy:[],createdAt:serverTimestamp()});
  batch.set(privateRef,{uid:params.uid,bankId:params.bankId,...(params.employmentStatus?{employmentStatus:params.employmentStatus}:{}),...(params.findeksScoreRange?{findeksScoreRange:params.findeksScoreRange}:{}),createdAt:serverTimestamp()});
  await batch.commit();
}
export async function reportReview(reviewId:string,uid:string){ await updateDoc(doc(requireDb(),"reviews",reviewId),{reportCount:increment(1),reportedBy:arrayUnion(uid)}); }
export async function approveReview(reviewId:string){ await updateDoc(doc(requireDb(),"reviews",reviewId),{reportCount:0,reportedBy:[],status:"published",note:"Bu yorum moderasyon kontrolünden geçti."}); }
export async function hideReview(reviewId:string){ await updateDoc(doc(requireDb(),"reviews",reviewId),{status:"hidden",note:"Bu yorum moderasyon tarafından gizlendi."}); }
export async function deleteReview(reviewId:string){ const currentDb=requireDb(); const reviewRef=doc(currentDb,"reviews",reviewId); const privateRef=doc(currentDb,"reviewPrivate",reviewId); const privateSnapshot=await getDoc(privateRef).catch(()=>null); const batch=writeBatch(currentDb); batch.delete(reviewRef); if(privateSnapshot?.exists()) batch.delete(privateRef); await batch.commit(); }
export async function migrateSensitiveReviewData(reviews:Review[]):Promise<number>{ const candidates=reviews.filter(r=>r.employmentStatus||r.findeksScoreRange); if(!candidates.length)return 0; const currentDb=requireDb(); for(let i=0;i<candidates.length;i+=150){ const batch=writeBatch(currentDb); for(const r of candidates.slice(i,i+150)){ batch.set(doc(currentDb,"reviewPrivate",r.id),{uid:r.uid,bankId:r.bankId,...(r.employmentStatus?{employmentStatus:r.employmentStatus}:{}),...(r.findeksScoreRange?{findeksScoreRange:r.findeksScoreRange}:{}),createdAtMs:r.createdAtMs,migratedAt:serverTimestamp()},{merge:true}); batch.update(doc(currentDb,"reviews",r.id),{employmentStatus:deleteField(),findeksScoreRange:deleteField()}); } await batch.commit(); } return candidates.length; }
