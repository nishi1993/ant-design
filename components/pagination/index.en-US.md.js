webpackJsonp([152,211],{893:function(t,e){t.exports={content:["section",["p","A long list can be divided into several pages by ",["code","Pagination"],", and only one page will be loaded at a time."],["h2","When To Use"],["ul",["li",["p","When it will take a long time to load/render all items."]],["li",["p","If you want to browse the data by switching in the pages."]]]],meta:{category:"Components",type:"Navigation",title:"Pagination",cols:1,filename:"components/pagination/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{onChange}</span> <span class="token attr-name">total</span><span class="token attr-value"><span class="token punctuation">=</span>{50}</span> <span class="token punctuation">/></span></span>'},["code","<Pagination onChange={onChange} total={50} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","current"],["td","current page number"],["td","number"],["td","-"]],["tr",["td","defaultCurrent"],["td","default current page number"],["td","number"],["td","1"]],["tr",["td","total"],["td","total number of data"],["td","number"],["td","0"]],["tr",["td","defaultPageSize"],["td","default number of data per page"],["td","number"],["td","10"]],["tr",["td","pageSize"],["td","number of data per page"],["td","number"],["td","-"]],["tr",["td","onChange"],["td","a callback function, can be executed when the page number is changing, and it takes the resulting page number and pageSize as its arguments"],["td","Function(page, pageSize)"],["td","noop"]],["tr",["td","showSizeChanger"],["td","determine whether ",["code","pageSize"]," can be changed"],["td","boolean"],["td","false"]],["tr",["td","pageSizeOptions"],["td","specify the sizeChanger selections"],["td","string[]"],["td","['10', '20', '30', '40']"]],["tr",["td","onShowSizeChange"],["td","a callback function, can be executed when ",["code","pageSize"]," is changing"],["td","Function(current, size)"],["td","noop"]],["tr",["td","showQuickJumper"],["td","determine whether you can jump to a page directly"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","specify the size of ",["code","Pagination"],", can be set to ",["code","small"]],["td","string"],["td",'""']],["tr",["td","simple"],["td","whether to use simple mode"],["td","boolean"],["td","-"]],["tr",["td","showTotal"],["td","to display the total number and range"],["td","Function(total, range)"],["td","-"]]]]]}}});