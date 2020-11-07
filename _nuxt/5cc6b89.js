(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{236:function(t,e,o){var content=o(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("00815680",content,!0,{sourceMap:!1})},237:function(t,e,o){var content=o(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("7170f1e0",content,!0,{sourceMap:!1})},238:function(t,e,o){var content=o(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("1b7833da",content,!0,{sourceMap:!1})},239:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,required:!0},icon:{type:String,required:!0},link:{type:String,required:!1}}},r=(o(241),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"column"},[o("a",{attrs:{href:t.link,target:"_blank"}},[o("div",{staticClass:"card box"},[o("header",{staticClass:"card-header"},[o("p",{staticClass:"c-title card-header-title has-text-grey has-text-centered"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"content has-text-centered"},[o("b-icon",{attrs:{icon:t.icon,size:"is-large",type:"is-primary"}})],1)]),t._v(" "),o("footer",{staticClass:"card-footer"},[o("div",{staticClass:"card-footer-item"},[o("span",[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,o){"use strict";o.r(e);var n={props:{employer:{type:Object,required:!0}}},r=(o(243),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[t.employer.isFlipped?o("div",[o("div",{staticClass:"columns is-desktop"},[o("div",{staticClass:"center column is-half-desktop"},[o("h1",[t._v(t._s(t.employer.employer))]),t._v(" "),o("h2",{staticClass:"work-title"},[t._v(t._s(t.employer.title))]),t._v(" "),o("h2",{staticClass:"work-title"},[t._v(t._s(t.employer.dates))]),t._v(" "),o("p",{staticClass:"work-content"},[t._v(t._s(t.employer.content))])]),t._v(" "),o("div",{staticClass:"column is-half-desktop"},[o("img",{staticClass:"amd-logo",attrs:{src:t.employer.logo}})])])]):o("div",[o("div",{staticClass:"columns is-desktop"},[o("div",{staticClass:"column is-half-desktop"},[o("img",{staticClass:"amd-logo",attrs:{src:t.employer.logo}})]),t._v(" "),o("div",{staticClass:"center column is-half-desktop"},[o("h1",[t._v(t._s(t.employer.employer))]),t._v(" "),o("h2",{staticClass:"work-title"},[t._v(t._s(t.employer.title))]),t._v(" "),o("h2",{staticClass:"work-title"},[t._v(t._s(t.employer.dates))]),t._v(" "),o("p",{staticClass:"work-content"},[t._v(t._s(t.employer.content))])])])])])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,o){"use strict";o(236)},242:function(t,e,o){(e=o(22)(!1)).push([t.i,".c-title{margin:0 auto;text-align:center}.card-footer-item{margin:1rem 2rem}.box{transition:box-shadow .3s}.box:hover{box-shadow:0 0 11px rgba(33,33,33,.2)}",""]),t.exports=e},243:function(t,e,o){"use strict";o(237)},244:function(t,e,o){(e=o(22)(!1)).push([t.i,".amd-logo{height:100%;width:100%;border-radius:100%;position:relative;padding:6rem}.work-title{font-size:1.3rem;opacity:.8}.work-content{padding-left:4rem;padding-right:4rem;padding-bottom:2rem}",""]),t.exports=e},245:function(t,e,o){"use strict";o(238)},246:function(t,e,o){(e=o(22)(!1)).push([t.i,"#about{font-size:1.2rem}.work{margin:1rem auto}.project,.work{text-align:center}.project{margin:3rem auto 2rem}",""]),t.exports=e},259:function(t,e,o){"use strict";o.r(e);var n=o(239),r=o(107),l=(o(115),o(240),{name:"HomePage",components:{Card:n.default,Hero:r.default},data:function(){return{experiences:[{employer:"AMD",title:"Software QA Engineer Intern",logo:"/amd-red.png",dates:"October 2020 - Present",content:"At AMD, I was assigned a full-stack project to be the lead developer on. I was to develop and maintain an existing web application that would queue up and send tasks to remote machines running MacOS. I got to learn Vue.js, made this website with it, to develop the frontend and used node for the backend. I also worked on a remote client that would wait to receive a list of tests, which would run and insert the results onto a database. I was also tasked with migrating the entire codebase, the web app and the remote client, to AMD’s internal GIT for proper version control. I was also tasked with creating and organizing JIRA tickets on a Kanban board for features and bugs.",isFlipped:!0},{employer:"Jupio Labs",title:"Software Engineer Intern",logo:"/jupio.png",dates:"September 2018 - January 2019",content:"Jupio Labs is a small web development firm based in Toronto that specialized in creating web applications for political candidates and local businesses. I learned a lot about how modern and responsive web development is done using React and Node.js. I was also taught the benefits of creating reusable react components as I was later able to repurpose them for other projects with some minor changes.",isFlipped:!1},{employer:"York University",title:"Computing Support Assistant",logo:"/york.jpg",dates:"October 2017 - Present",content:"I worked for the Continuing studies and English as a second language department for York University as a computing support assistant. During my time working at York, I was able to pick up some soft skills such as communication with clients as well as being able to speed up some tasks I’d been given using bash. I’d also helped with reducing the amount of tickets we’d receive during COVID-19 by assisting with the development of a FAQs and guides page for students and teachers to look at before sending in a ticket.",isFlipped:!0}]}}}),c=(o(245),o(13)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section"},[o("About",{attrs:{title:"About Me",id:"about"}},[t._v("\n    Raised in the suburbs of Toronto, I'm a 4th year York University student \n    currently studying Computer Science. After graduating, I plan to pursue\n    a job in Software Engineering where I can frequently be challenged with new problems.\n  ")]),t._v(" "),o("h1",{staticClass:"project",attrs:{id:"work-experience"}},[t._v("\n    Work Experience\n  ")]),t._v(" "),t._l(t.experiences,(function(t){return o("Work",{key:t.employer,attrs:{employer:t}})})),t._v(" "),o("h1",{staticClass:"project"},[t._v("Projects")]),t._v(" "),o("div",{staticClass:"columns is-desktop",attrs:{id:"projects"}},[o("card",{attrs:{title:"ChatCraft",icon:"discord",link:"https://github.com/Vrandus/Chatcraft"}},[t._v("\n      My friends and I wanted to play some minecraft, but it was hard to keep track of what went on in game and seeing who was online. So I created a discord bot that can be integrated into a Discord text channel that would relay the ingame chat to the channel vice versa.\n    ")]),t._v(" "),o("card",{attrs:{title:"Number Recognizing MLP",icon:"layers",link:"https://github.com/Vrandus/Number-Recognition-MLP"}},[t._v("\n      A multilayer perceptron trained on a subset of the MNIST data set. I created it with the help of old notes. \n      It currently runs at an accuracy rate of 97.7% using a certain number of hidden nodes. Created with Golang, there is also functionality to \n      run the neural network on a 28x28 png.\n    ")]),t._v(" "),o("card",{attrs:{title:"DCIM Importer",icon:"folder-outline",link:"https://github.com/Vrandus/DCIM-Importer"}},[t._v("\n      The worst part of photography is having to import and organize your images. I had a back-log of 10k+ images on a number of SD cards, \n      so I made a command-line program to efficiently copy files into an organized file structure. I also learned Golang along the way.\n\n\n    ")])],1),t._v(" "),o("h1",{staticClass:"project",attrs:{id:"hobbies"}},[t._v("Hobbies")])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{About:o(115).default,Work:o(240).default,Card:o(239).default})}}]);