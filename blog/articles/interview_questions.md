# Front End Interview Questions

1. Soft Skills questions that I was asked:
 
 - Why do you want to leave?
 - Do you like working in a team? Whould you preffer working in a team or single?
 - Why should we hire you?
 - Tell me a thing about you! (doesn't have to be dev related) 

2. Technical questions that I was asked:

 - How would you solve a problem? What steps would you take?
 - Why do we do code reviews? (testing what automated tests cannot) 
 - What is MVC and why do we use it?
 - What component libraries have you used? (like React, Vue.JS or anything alike) 
 - What are Restful APIs what do we use them for?

3. HTML questions that I was asked:

 - Can you give me an example of HTML5 tags? 
   - `header, main, nav, aside, article`  
   - they are used for SEO purposes & accesibility via screen readers) 
   - What media elements does HTML5 introduced? 
   - `video and audio`
 - What is the difference between inline elements and block elements?
 - What is the box model?
  - what width does it have a div with width 100px and a padding of 20px? 
  - A: 140px without the `box-sizing: border-box;` css rule
 - What is picture tag and why do we use it?
 - What can you tell me about svgs?
 - What can you tell me about meta tags? (meta for SEO, social cards, advanced seo like language, ignore duplicate content, canonical, etc)

4. CSS questions that I was asked:

 - What is CSS specifity?
    - what wins between a class and an id, but between 2 classes and id?
 - What do you think about !important? 
 - What can you say about relative units? (rem and em)
   - What is rem relative to? (*root, browser, operating system* in that order)
   - Where does rem naming come from and what does it mean? (rem unit stands for `root em` and means *The root element's font-size*)
 - What other css layout display do you know? (display: table / block / inline-block / flex / inline-flex  / grid ) 
 - What types of positions do you know and are they useful for? (position `static`, `absolute`, `relative`, `fixed`, `sticky` / used for `sticky navs, absolute and fixed elements`) 
 - What is `z-index` used for?
 - What's the difference between native css variables and scss variables?
    - scss variables are available only on scss files and are used for code purposes, while css variables are available in the css files and can be changed with js, also you can use css native variable to update all the style within a class / responsive use case, an example would be use of dark/light theme
 - What is `map` in scss?
 - What is a `mixin`?
    - @mixin, very similar to a function but the main difference between the two is that mixins output lines of Sass code that will compile directly into CSS styles, while functions return a value that can then become the value for a CSS property or become something that might be passed to another function or mixin.
 - What is a `function` in scss and why do we use it?
    - @function are blocks of code that return a single value of any Sass data type. For example a function that it takes a pixel size and converts into rem.
 - What is the difference between a `mixin` and a `function`?
    - `mixins` returns block of code while `functions` returns a `value` like `px to rem, / ligh­ten­, darken or greyscale - which are native functions`
 - What is a `placeholder` in scss?
    - `placeholder` are very similar to class selectors used like `%icon` instead of `.icon` that will not show up in the generated CSS, only the selectors that extend them will be included
    - [Sass : @function, @mixin, placeholder, @extend](https://dev.to/keinchy/sass--function-mixin-placeholder-extend-18g6)
 - What are `pseudoelements` && `pseudo-classes` in css? (`pseudo-classes: :hover, :active, :checked, :first-child, :not; pseudo-elements: ::after`, `::before`, `::first-letter`, `::first-line` etc)
    - Why do we use it?
    - Pseudo-classes select regular elements but under certain conditions, like when their position relative to siblings or when they’re under a particular state.
    - Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element. This introduces huge benefits for creating cool effects with minimal markup, also aiding significantly in keeping the presentation of the document out of the HTML and in CSS where it belongs.
    - [Pseudo-classes vs pseudo-elements](https://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html)
 - What is `@root` in scss?
  
 - Can you tell me something about CSS methodologies? What methodology have you used so far?
 - What's the difference between reset and normalize? (Normalize.css preserves useful defaults rather than "unstyling" everything as reset is doing it.)

5. JS questions that I was asked:

 - What's the difference between let, const and var? (`var` has a functional scope while `let` & `const` have a block scope + `hoisting` )
 - How can you check the type of a variable? (using `typeof`)
 - What are `pop` & `push`? (arr methods for add an element at the beginning/ end of an array)
 - What's the difference between local storage / session storage and cookies?
 - What is typescript bringing to the table? (strongly typed variables)
 - What is `webpack` bringing to the table? (adding styles and scripts in the browser)
 - Example of gulp function? (using `pipe` for stream functions in series / paralel)
 - Difference between gulp and grunt? (grunt uses series functions while gulp uses series & paralel functions)
 - What are primitives in JS?
 - What are prototypes in JS?
 - Daca `a={val:1} b={val=1}` ce va returna `a == b` si `a === b` si de ce?
   - vor returna `false` ambele pentru ca obiectele in js se folosesc de referinta si nu pot fi comparate dupa valoare - pentru aceastea se folosesc metodele de comparatie de obiect
 - Care este diferenta dintre `function test(){}` si `const test = function (){}`?
      - Dar intre `function test(){}` si `var test = function (){}`? 
      - `function` este definit la inceputul functiei din care face parte (la initializare) si va putea fi apelata inainte de bucatica de cod in care este scrisa in timp ce `var test` chiar daca este definit la initializare (pentru ca `var` are un scope de functie), la apelarea dinainte de bucatica de cod in care este scrisa va returan `undefined`
      - function este definit la initializare inainte de variabile in timp ce var este initializat dupa functii si va suprascrie functia definita anterior
 - what is bubbling in js? event propagation from button to parent div to html which can be inversed using a ... property
 - ? event delegation in js ?

4. Computer Science questions that I was asked:

 - Ce este un Singleton?
   - o clasa care poate avea o singura instanta
 - Ce este overwriting si overloading la clase?
   - overwriting = suprascrierea parametrilor din instanta clasei
   - overloading = apelarea unei metode a unei clase cu parametrii diferiti (spre expl o functie de test care poate fi apelata cu diferiti parametrii in functie de scenariul de test folosit)
 - Ce poti sa-mi spui despre recursivitate si unde este folosita?
   -  o functie care se apeleaza pe ea insasi
   
Questions to ask:
 - How a normal day look like?
 - What resources would I be able to get working remote? (laptop, monitors, etc)
 - What projects do you work at right now?
 - Do you offer some type of training for different tech?
 - Can you switch from a project to another if you want to learn more React for example?

Resources: 
 - [Sass functions cheat sheet](https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46)