import{_ as e,D as a,c as t,I as n,U as s,o as l}from"./chunks/framework.1NCGK6sV.js";const y=JSON.parse('{"title":"Contributing","description":"","frontmatter":{},"headers":[],"relativePath":"contributing.md","filePath":"contributing.md"}'),p={name:"contributing.md"},h=s(`<h1 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-label="Permalink to &quot;Contributing&quot;">​</a></h1><p><a href="https://dms-vep.org" target="_blank" rel="noreferrer"><code>dms-vep.org</code></a> is a repository for deep mutational scanning (DMS) studies with a focus on viral entry proteins (VEPs). The site contains a series of write-ups on individual deep mutational scanning experiments for a variety of viruses and conditions. This guide contains instructions for how to contribute your experimental write-ups.</p><p>There are three parts to this guide:</p><ol><li><a href="#getting-started">Getting Started</a>: How to add a new write-up and view the updated website.</li><li><a href="#writing-markdown">Writing Markdown</a>: How to take advantage of the VitePress markdown interpreter.</li><li><a href="#style-guide">Style Guide</a>: How to structure your experimental write-ups.</li></ol><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p><a href="https://dms-vep.org" target="_blank" rel="noreferrer"><code>dms-vep.org</code></a> is based on the static site generator <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> with some additional custom components written in <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a>. This allows you to create fully functional web pages using <a href="https://www.markdownguide.org/" target="_blank" rel="noreferrer">Markdown</a> documents. To add a new page to the site, you simply create a markdown document in the correct directory and make a pull request to <a href="https://github.com/dms-vep/dms-vep.github.io" target="_blank" rel="noreferrer">the website repository on GitHub</a>. Below are detailed instructions on how to do this.</p><h3 id="setting-up-to-contribute" tabindex="-1">Setting up to contribute <a class="header-anchor" href="#setting-up-to-contribute" aria-label="Permalink to &quot;Setting up to contribute&quot;">​</a></h3><p>Since contributions are made through <a href="https://github.com/dms-vep/dms-vep.github.io" target="_blank" rel="noreferrer">GitHub</a>, the first thing you&#39;ll need to do is clone the repository locally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:dms-vep/dms-vep.github.io.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dms-vep.github.io</span></span></code></pre></div><p>Now that you have the repository and you&#39;re in the <code>dms-vep.github.io</code> directory, you&#39;ll need to set up a few things if you want to view a live preview of the website with your local changes. You&#39;re going to need two pieces of software to do this: <code>Node.js</code> and <code>npm</code>.</p><p><code>Node.js</code> is an environment that allows you to run Javascript code on your computer. <code>npm</code> is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing <code>Node</code> and <code>npm</code> depend on your operating system and personal preference. Follow the instructions <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noreferrer">here</a>.</p><p>To verify that <code>Node</code> and <code>npm</code> are installed, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>You should see the node and npm versions that you installed on your computer.</p><p>With these installed, you can now boot up a live preview of your local version of <code>dms-vep.github.io</code> on your browser. To do this, simply run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p>Now, there will be a local version of the website running at <code>http://localhost:5173</code>. Visit this URL in your browser to see a preview of the site.</p><h3 id="structure-of-the-repository" tabindex="-1">Structure of the repository <a class="header-anchor" href="#structure-of-the-repository" aria-label="Permalink to &quot;Structure of the repository&quot;">​</a></h3><p>The file structure of this website is as follows:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> about.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contributing.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contributors.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experiments</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> methodology.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span></code></pre></div><p>Any file ending <code>*.md</code> is converted to a page on the site. Individual experiments are located in the <code>experiments/</code> directory.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experiments</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hiv</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> influenza</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lassa</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nipah</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sars2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> posts</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delta-spike-REGN10933.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> omicron-spike-mABs.md</span></span></code></pre></div><p>Experiments for a given viral protein are located in a corresponding viral subdirectory underneath another directory called <code>posts/</code>. The markdown files in the <code>experiments/&lt;virus&gt;/posts/</code> directory contain the write-ups for each DMS experiment.</p><h3 id="adding-your-experiments" tabindex="-1">Adding your experiments <a class="header-anchor" href="#adding-your-experiments" aria-label="Permalink to &quot;Adding your experiments&quot;">​</a></h3><p>Fundamentally, adding an experimental write-up involves adding a new markdown file in the <code>experiments/&lt;virus&gt;/posts/</code> directory for your viral protein. The name of the file doesn&#39;t matter. Any markdown file you add in a posts directory will be indexed by the website on build and added as a page to the site.</p><p>However, there are some nuances to adding your experimental write-up. At the top of every markdown file, you have to add a <a href="https://yaml.org/" target="_blank" rel="noreferrer"><code>YAML</code></a> header that contains important metadata about your experiment. Here&#39;s an example of what that header looks like:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Deep mutational scanning of SARS-CoV-2 Delta variant spike using a barcoded lentiviral platform&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Bernadeta Dadonaite</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Jesse Bloom</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2022-10-07</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">github</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">paper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://doi.org/10.1016/j.cell.2023.02.001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">subtext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">This is some test of the subtext, what&#39;s the experiment about? Here&#39;s a short plain text introduction.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keywords</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Delta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Spike</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Lentiviral Pseudotyping</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Then your write-up goes here...</span></span></code></pre></div><p>Ensure that <strong>every write-up contains the headers listed above</strong>. These pieces of metadata will appear in the index of experiments for a given virus. The <code>title</code> will appear as the title, the <code>subtext</code> will appear as a description below the title, and the <code>keywords</code> are used to filter the write-ups listed in the index.</p><p>Finally, if this is your first time contributing to <code>dms-vep.github.io</code>, make sure to update the <code>contributors.json</code> with your name and a link to a photo:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jesse Bloom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember/image.img.jpg/1540125095310.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Your Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://my/awesome/photo.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ...</span></span></code></pre></div><h2 id="writing-markdown" tabindex="-1">Writing Markdown <a class="header-anchor" href="#writing-markdown" aria-label="Permalink to &quot;Writing Markdown&quot;">​</a></h2><p>Writing in markdown for <code>dms-vep.github.io</code> is essentially the same as writing a normal markdown file with some added features. Many of these features are extensions provided by VitePress. For a detailed guide to these extensions, check out the VitePress documentation <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">here</a>. However, there are some additional features to be aware of for <code>dms-vep.github.io</code>.</p><h3 id="adding-images" tabindex="-1">Adding images <a class="header-anchor" href="#adding-images" aria-label="Permalink to &quot;Adding images&quot;">​</a></h3><p>To add images, you can use normal markdown syntax while providing a link to where an image is stored on the web. For example, here&#39;s some markdown that displays an image of the <code>Snakemake</code> rulegraph for an analysis pipeline:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/_images/rulegraph.svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Which results in an image being displayed on the webpage like this:</p><p><img src="https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/_images/rulegraph.svg" alt="Image"></p><h3 id="adding-altair-plots" tabindex="-1">Adding <code>Altair</code> plots <a class="header-anchor" href="#adding-altair-plots" aria-label="Permalink to &quot;Adding \`Altair\` plots&quot;">​</a></h3><p>To add <code>Altair</code> plots, you&#39;ll need to use a custom syntax and provide a link to either an HTML page that contains your plot (i.e. a <a href="https://raw.githubusercontent.com/dms-vep/dms-vep-pipeline-3/main/docs/htmls/293T_ACE2_entry_latent_effects.html" target="_blank" rel="noreferrer">page like this</a>), or a raw <code>JSON</code> file exported from <code>Altair</code>.</p><p>To add you&#39;re <code>Altair</code> plot simply use the following syntax:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;Altair :spec-url=&quot;&#39;https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/muteffects_latent_heatmap.html&#39;&quot;&gt;&lt;/Altair&gt;</span></span></code></pre></div><p>Where the <code>:spec-url</code> points to either a <code>JSON</code> or <code>HTML</code> file exported from <code>Altair</code>.</p><p>The result will look something like this:</p>`,43),o=s(`<h3 id="adding-views-of-dms-viz" tabindex="-1">Adding views of <code>dms-viz</code> <a class="header-anchor" href="#adding-views-of-dms-viz" aria-label="Permalink to &quot;Adding views of \`dms-viz\`&quot;">​</a></h3><p>You can also include views of websites like <code>dms-viz.github.io</code> in your write-ups using <code>iframes</code>. These are <code>HTML</code> elements that take a URL and generate a view of that website within another website. You can use them like this:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;iframe </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  src=&quot;https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&amp;e=IDC508&amp;ce=%255B%25221%2522%252C%25222%2522%255D&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width=&quot;100%&quot; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height=&quot;600px&quot; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  style=&quot;border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/iframe&gt;</span></span></code></pre></div><p>Which will result in a view of the URL provided to the <code>src</code> property of the <code>iframe</code>. The result looks like this:</p><iframe src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&amp;e=IDC508&amp;ce=%255B%25221%2522%252C%25222%2522%255D" width="100%" height="600px" style="border:0;margin:0 auto;display:block;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"></iframe><p>You can simply copy this code and replace the URL with the URL to your website of choice.</p><h2 id="style-guide" tabindex="-1">Style Guide <a class="header-anchor" href="#style-guide" aria-label="Permalink to &quot;Style Guide&quot;">​</a></h2><p>In progress...</p>`,8);function r(d,k,c,g,u,F){const i=a("Altair");return l(),t("div",null,[h,n(i,{"spec-url":"https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/muteffects_latent_heatmap.html"},null,8,["spec-url"]),o])}const E=e(p,[["render",r]]);export{y as __pageData,E as default};
