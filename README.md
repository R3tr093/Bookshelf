<h1><a id="user-content-angulars-bookshelf-from-da-graphqhell-front-end-project" class="anchor" aria-hidden="true" href="#angulars-bookshelf-from-da-graphqhell-front-end-project"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Angular’s Bookshelf from da GraphQheLl (Front-End project)</h1>
<h2><a id="user-content-introduction" class="anchor" aria-hidden="true" href="#introduction"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>
<p>As you know, our campus have a Library, you are all already able to pick a book and keep it for the week/month. At the moment, the rental process is ... pretty inexistant. Your mission, if you accept it, will be to automate this process to make your coworkers's life easier.</p>
<p>During this project you will have to build a single page application with Angular where the BeCodians will be able to retrieve the books available in their campus and their own  data’s (from a database already built) with the help of the famous GraphQL queries.</p>
<p>The users will be able to :</p>
<ul>
<li>Display a list / table of all the books in their classroom</li>
<li>Display the detailed informations for each books</li>
<li>Plus, the detail view will also displays their status (are they already rent (and by who) or available), the global rating, and the commentaries</li>
<li>The users will be able to rent a book if available, rate and comment it</li>
<li>Feel free to add new functionnalities if and only if the previous ones are done</li>
</ul>
<h2><a id="user-content-competences-" class="anchor" aria-hidden="true" href="#competences-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Competences :</h2>
<ul>
<li>Create a Single page App</li>
<li>Deploy your project for each new iteration</li>
<li>Use of modern Javascript’s front-end framework</li>
<li>Retrieve datas from a third part API</li>
<li>Use of a graphic library</li>
<li>Use of modular programmation</li>
<li>Use of reactive programmation</li>
<li>Use of Angular's lazyloading</li>
<li>Authentication</li>
<li>Create and implement mock-up</li>
<li>Apply agile methodology and workflow</li>
</ul>
<h2><a id="user-content-learning-objectives-" class="anchor" aria-hidden="true" href="#learning-objectives-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Learning objectives :</h2>
<p>At the end of the project, you will be able to :</p>
<ol>
<li>
<p>Make a good use of Angular :</p>
<ul>
<li>
<p>Use Angular’s CLI as often as possible</p>
</li>
<li>
<p>Use services</p>
</li>
<li>
<p>Retrieve and display datas using RX.js</p>
</li>
<li>
<p>Configure Angular’s client router (lazyloading, guards)</p>
</li>
<li>
<p>Make a good use of Angular’s modules</p>
</li>
<li>
<p>Abstract components as possible</p>
</li>
</ul>
</li>
<li>
<p>Being comfortable with Typescript</p>
</li>
<li>
<p>Basic use of GraphQL querries with Apollo</p>
</li>
<li>
<p>Deploy and maintain the project with Netlify</p>
</li>
<li>
<p>Use and personnalisation of ng-Zorro graphic’s library</p>
</li>
<li>
<p>Make a good use of Figma (optionnal)</p>
</li>
<li>
<p>Make a good use of GitFlow</p>
</li>
</ol>
<h3><a id="user-content-prerequisites-" class="anchor" aria-hidden="true" href="#prerequisites-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites :</h3>
<ul>
<li>
<p>Good knowledge of Javascript, HTML, CSS</p>
</li>
<li>
<p>Basic use of any other framework</p>
</li>
<li>
<p>Good knowledge of HTTP requests</p>
</li>
<li>
<p>Good knowledge of CRUD with client logic</p>
</li>
<li>
<p>Basic knowledge of how to make an authentication</p>
</li>
</ul>
<h2><a id="user-content-technical-stack" class="anchor" aria-hidden="true" href="#technical-stack"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Technical stack</h2>
<ul>
<li>Angular 7</li>
<li>Apollo</li>
<li>Rx.JS</li>
<li>GraphQL</li>
<li>NG-Zorro</li>
</ul>
<h2><a id="user-content-animations-" class="anchor" aria-hidden="true" href="#animations-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Animations :</h2>
<ul>
<li>
<p>Your first task will be to make a functionnal and technical analysis based on the description of the project and present it to the group (first as individual, then with your small group where you will put in common all of your work, and finally in front of the cohort) + remediation based on the cohort output</p>
</li>
<li>
<p>Each group will start the day by a stand up meeting where you will ask yourself 3 questions « What have I done yesterday ? » « What am I going to do today ? » « What is opposing me a difficulty ? »</p>
</li>
<li>
<p>During this project you will have to present your current work on each friday morning to the cohort + remediation based on the cohort output</p>
</li>
<li>
<p>The first group to figure out how to realise one of the learning objective will have to stand a short workshop / masterclass on the subject they have learned.</p>
</li>
<li>
<p>The last day of this project’s schedule you will have to do a technical passation to your coach.</p>
</li>
</ul>
<h2><a id="user-content-use-the-becode-graphql-api" class="anchor" aria-hidden="true" href="#use-the-becode-graphql-api"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use the BeCode GraphQL API</h2>
<p>To handle users, books &amp; reviews, you will use the BeCode GraphQL API.</p>
<h3><a id="user-content-endpoints" class="anchor" aria-hidden="true" href="#endpoints"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Endpoints</h3>
<p>The GraphQL API lives at <a href="https://graph.becode.xyz" rel="nofollow">https://graph.becode.xyz</a><br>
You can explore and play with the schema within <a href="https://graph.becode.xyz/explore" rel="nofollow">https://graph.becode.xyz/explore</a></p>
<h3><a id="user-content-auth" class="anchor" aria-hidden="true" href="#auth"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Auth</h3>
<p>Some actions on the API requires <em>authentication</em>. Authentication on the GraphQL API uses JSON Web Tokens (JWT).</p>
<p>You need to get a token (a long string) and pass it within the headers of each of your requests:</p>
<div class="highlight highlight-source-json"><pre>{
	<span class="pl-s"><span class="pl-pds">"</span>headers<span class="pl-pds">"</span></span>: {
		<span class="pl-s"><span class="pl-pds">"</span>Authorization<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Bearer YOUR-JWT-TOKEN<span class="pl-pds">"</span></span>
	}
}
</pre></div>
<p>To perform the actions you need to perform, like getting books informations or add book reviews, your users need to be <strong>logged</strong>.</p>
<p>This is a <em>two-steps process</em>:</p>
<ol>
<li>Allow your user to register/login on the API (you'll need an <em>admin token</em>), receiving an <em>user token</em></li>
<li>Get books or anything in the API (with the <em>user token</em>)</li>
</ol>
<p>You'll receive your <em>admin token</em> with your briefing.</p>
<h4><a id="user-content-register-the-user" class="anchor" aria-hidden="true" href="#register-the-user"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Register the user</h4>
<p>Using the <em>admin token</em>, you can register your users with the <code>registerWithBasic</code> mutation. Use it like this:</p>
<div class="highlight highlight-source-graphql"><pre><span class="pl-en">registerWithBasic</span>(<span class="pl-v">target</span>: {<span class="pl-v">collection</span>: "<span class="pl-c1">juniors</span>", <span class="pl-v">email</span>: "<span class="pl-c1">you</span>@<span class="pl-c1">email</span>.<span class="pl-c1">com</span>"}, <span class="pl-v">login</span>: "<span class="pl-c1">your</span>-<span class="pl-c1">new</span>-<span class="pl-c1">login</span>", <span class="pl-v">pass</span>: "<span class="pl-c1">your</span>-<span class="pl-c1">new</span>-<span class="pl-c1">pass</span>") {
    <span class="pl-v">token</span>
}
</pre></div>
<blockquote>
<p><strong>NOTE:</strong> use the email you use to register at becode.</p>
</blockquote>
<p>To perform subsequent logins (after the creation of user), use the <code>loginWithBasic</code> mutation, like this:</p>
<div class="highlight highlight-source-graphql"><pre><span class="pl-en">loginWithBasic</span>(<span class="pl-v">login</span>: "<span class="pl-c1">your</span>-<span class="pl-c1">login</span>", <span class="pl-v">pass</span>: "<span class="pl-c1">your</span>-<span class="pl-c1">pass</span>") {
    <span class="pl-v">token</span>
}
</pre></div>
<p>The token you'll receive is the <em>user token</em> you will use to perform queries and mutation <em>in the name of the user</em>.</p>
<p>Use the schema &amp; explorer to find &amp; test what you need!</p>
<h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Links</h2>
<ul>
<li>
<p>GraphQL's doc: <a href="https://graphql.org/learn/" rel="nofollow">https://graphql.org/learn/</a></p>
</li>
<li>
<p>Angular's doc: <a href="https://angular.io/" rel="nofollow">https://angular.io/</a> (I strongly recommand you to start with their getting started tutorial)</p>
</li>
<li>
<p>RX.js handbook: <a href="https://www.learnrxjs.io/" rel="nofollow">https://www.learnrxjs.io/</a></p>
</li>
<li>
<p>Apollo: <a href="https://www.apollographql.com/docs/angular/" rel="nofollow">https://www.apollographql.com/docs/angular/</a></p>
</li>
<li>
<p>NG-Zorro: <a href="https://ng.ant.design/docs/introduce/en" rel="nofollow">https://ng.ant.design/docs/introduce/en</a></p>
</li>
</ul>
<h2><a id="user-content-timing" class="anchor" aria-hidden="true" href="#timing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Timing</h2>
<p>This project will end on 17/10/2019 at 23h59.</p>
