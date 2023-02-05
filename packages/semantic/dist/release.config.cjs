"use strict";var i=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var v=(e,t)=>{for(var s in t)i(e,s,{get:t[s],enumerable:!0})},D=(e,t,s,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of j(t))!k.call(e,n)&&n!==s&&i(e,n,{get:()=>t[n],enumerable:!(a=z(t,n))||a.enumerable});return e};var G=e=>D(i({},"__esModule",{value:!0}),e);var _={};v(_,{default:()=>T});module.exports=G(_);var l=e=>["@semantic-release/commit-analyzer",{releaseRules:[...e]}];var o=e=>["@semantic-release/git",{assets:typeof e.gitAssets=="boolean"?!1:["package.json"].concat(e.gitAssets?e.gitAssets:[]).filter(t=>t),message:e.message?e.message:"chore(release): `${nextRelease.gitTag}` [skip ci] \n\n${nextRelease.notes}"}];var r=e=>{let t=e&&Object.values(e).filter(n=>typeof n<"u").length===0;if(!e||t)return["@semantic-release/github",{addReleases:!1,labels:!1,releasedLabels:!1,successComment:!1}];let{githubAssets:s,...a}=e;return["@semantic-release/github",{assets:s,addReleases:!1,labels:!1,releasedLabels:!1,successComment:!1,...a}]};var m=e=>!e||typeof e.pkgRoot!="string"&&typeof e.npmPublish!="boolean"&&typeof e.tarballDir>"u"?"@semantic-release/npm":["@semantic-release/npm",{...e}];var L=["@semantic-release/release-notes-generator"],$=["@jeromefitz/release-notes-generator",{config:"@jeromefitz/conventional-gitmoji"}],c=e=>{let s={...{enableGit:!1,enableGithub:!0,enableNpm:!0,enableReleaseNotes:!1,enableReleaseNotesCustom:!0,pkgRoot:"./dist"},...e},{npmPublish:a,pkgRoot:n,tarballDir:p}=s,f=m({npmPublish:a,pkgRoot:n,tarballDir:p}),{addReleases:u,assignees:b,failComment:y,failTitle:h,githubApiPathPrefix:R,githubAssets:x,githubUrl:P,labels:d,proxy:S,releasedLabels:C}=s,A=r({addReleases:u,assignees:b,failComment:y,failTitle:h,githubApiPathPrefix:R,githubAssets:x,githubUrl:P,labels:d,proxy:S,releasedLabels:C}),N=o(s);return[l(s.releaseRules),s.enableReleaseNotes?L:"",s.enableReleaseNotesCustom?$:"",s.enableNpm?f:"",s.enableGithub?A:"",s.enableGit?N:""].filter(O=>!!O)};var g=(e={})=>{let t=c(e);return{...{branches:[{name:"main"},{name:"canary",prerelease:"canary"}],extends:["semantic-release-commit-filter"],plugins:t,tagFormat:"v${version}"},...e}};var I=g(),T=I;0&&(module.exports={});
