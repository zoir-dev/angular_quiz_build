"use strict";(self.webpackChunkquiz_app=self.webpackChunkquiz_app||[]).push([[592],{7758:(u,_,e)=>{e.d(_,{Z:()=>h});var i=e(553),a=e(5879),o=e(9862);let h=(()=>{class r{constructor(t){this.http=t,this.api=i.N.baseApi+"/blog"}getAll(t){return this.http.get(this.api,{params:t})}getById(t){return this.http.get(this.api+"/get/"+t)}create(t){return this.http.post(this.api,t)}update(t,n){return this.http.put(`${this.api}/${t}`,n)}deleteById(t){return this.http.delete(`${this.api}/${t}`)}static#t=this.\u0275fac=function(n){return new(n||r)(a.LFG(o.eN))};static#s=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},8962:(u,_,e)=>{e.d(_,{M:()=>r});var i=e(553),a=e(6306),o=e(5879),h=e(9862);let r=(()=>{class l{constructor(n){this.http=n,this.api=i.N.baseApi+"/fayl"}uploadFayl(n){const s=new FormData;return s.append("file",n,n.name),this.http.post(this.api+"/upload",s).pipe((0,a.K)(p=>{throw console.error("Error uploading file:",p),p}))}getImageUrl(n){return this.api+"/download/"+n}downloadFile(n){this.http.get(this.api+"/download/"+n,{responseType:"blob"}).subscribe(s=>{console.log(s)})}static#t=this.\u0275fac=function(s){return new(s||l)(o.LFG(h.eN))};static#s=this.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},5273:(u,_,e)=>{e.d(_,{a:()=>l});var i=e(5619),a=e(7398),o=e(553),h=e(5879),r=e(9862);let l=(()=>{class t{constructor(s){this.http=s,this.api=o.N.baseApi,this.allTests$$=new i.X([]),this.selectedGroupTests$$=new i.X([])}loadAllTests(){this.http.get(this.api+"?params=10").subscribe(s=>{this.allTests$$.next(s.content)})}setTestsByGroup(s=""){""!=s&&this.allTests$$.pipe((0,a.U)(p=>p.filter(c=>c.questionLevel.level==s))).subscribe(p=>{this.selectedGroupTests$$.next(p)})}getTestsByGroup(){return this.selectedGroupTests$$.asObservable()}getAll(s){return this.http.get(this.api+"/question",{params:s})}blockTest(s){return this.http.post(this.api+"/question/block",s)}getById(s){return this.http.get(this.api+"/get/"+s)}create(s){return this.http.post(this.api+"/question",s)}update(s,p){return this.http.put(this.api+"/question/"+s,p)}deleteById(s){return this.http.delete(this.api+"/question/"+s)}static#t=this.\u0275fac=function(p){return new(p||t)(h.LFG(r.eN))};static#s=this.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},618:(u,_,e)=>{e.d(_,{X:()=>h});var i=e(553),a=e(5879),o=e(9862);let h=(()=>{class r{constructor(t){this.http=t,this.api=i.N.baseApi+"/level"}getAll(t){return this.http.get(this.api,{params:t})}getById(t){return this.http.get(this.api+"/get/"+t)}create(t){return this.http.post(this.api,t)}update(t){return this.http.put(this.api,t)}deleteById(t){return this.http.delete(this.api+"/get/"+t)}static#t=this.\u0275fac=function(n){return new(n||r)(a.LFG(o.eN))};static#s=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},9047:(u,_,e)=>{e.d(_,{L:()=>h});var i=e(553),a=e(5879),o=e(9862);let h=(()=>{class r{constructor(t){this.http=t,this.api=i.N.baseApi+"/overall"}getAll(t){return this.http.get(this.api+"/all",{params:t})}getById(t){return this.http.get(this.api+"/get/"+t)}create(t){return this.http.post(this.api+"/save",t)}static#t=this.\u0275fac=function(n){return new(n||r)(a.LFG(o.eN))};static#s=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);