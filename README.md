![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdev-choi-elf-maerz/choisblog%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)
## 🛠 Tech Stack 🛠 2023.09
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <div>
        <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> 
        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"> 
        <img src="https://img.shields.io/badge/react.js-61DAFB?style=flat-square&logo=react&logoColor=white">
        <img src="https://img.shields.io/badge/next.js-3484D2?style=flat-square&logo=nextdotjs&logoColor=white">
        <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white">
        <img src="https://img.shields.io/badge/mongodb-47A248?style=flat-square&logo=mongodb&logoColor=white"> 
        <img src="https://img.shields.io/badge/markdown-000000?style=flat-square&logo=markdown&logoColor=white">
        <img src="https://img.shields.io/badge/matter.js-4B5562?style=flat-square&logo=matterdotjs&logoColor=white">
    </div>
</div>

## About Project
### Blog ⚡ 
React를 기본으로 하는 Next 프레임위크를 사용하여 제작한 개인블로그입니다.<br/>
Posting 자료는 md파일를 fs로 읽어 드려 화면에 Markdown, matter를 이용하여 노출했습니다.<br/>
Next.js의 getStaticProps와 getStaticPaths api를 사용하였습니다.<br/>
getStaticProps()는 빌드 시 데이터를 fetch하여 static 페이지를 생성하고,<br/>
getStaticPaths()는 pages/[slug].js 형태의 동적 라우팅 페이지 중, 빌드 시에 static하게 생성할 페이지를 정하게 됩니다.<br/>
MogoDB claud를 사용하여 간단하게 메세지 보내기를 통해 내용을 저장을 하고 있습니다.<br/>
마지막으로, 이 산출물은 독일어를 사용하여 표기해 봤습니다.<br/>

<img src="/project_images/blog1.png" style="height: 400px" />

- 메인 화면

<br />


<img src="/project_images/blog2.png" style="height: 400px" />

- 포스트 전체 화면

<br />

<img src="/project_images/blog2-1.png" style="height: 400px" />

- Javascript 주제로 기본적인 내용을 MD파일로 작성했습니다.

<br />

<img src="/project_images/blog3.png" style="height: 400px" />

- Messaage를 보내면 MongoDB Claud에 간단하게 내용이 전장됩니다.

<br />

<img src="/project_images/blog4.png" style="height: 400px" />
<img src="/project_images/blog4-2.png" style="height: 400px" />
<img src="/project_images/blog4-3.png" style="height: 400px" />

- Messaage를 보내면 하단의 알림표시로 DB전송 성공여부를 알려줍니다.

<br />

<img src="/project_images/blog5.png" style="height: 400px" />

- 발송한 Messaage는 MongoDB Claud에 저장되었습니다.

### News Latter 💬</p>
<img src="/project_images/letter1.png" style="height: 400;" />

- 자신의 이메일을 등록합니다.



<!--
**dev-choi-elf-maerz/dev-choi-elf-maerz** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
