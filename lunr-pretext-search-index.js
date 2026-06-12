var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sets",
  "level": "1",
  "url": "sets.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets",
  "body": " Sets  Filler text lol.  "
},
{
  "id": "relations",
  "level": "1",
  "url": "relations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Relations",
  "body": " Relations  Filler text lol.  "
},
{
  "id": "functions",
  "level": "1",
  "url": "functions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Functions",
  "body": " Functions  Filler text lol.  "
},
{
  "id": "natural_numbers",
  "level": "1",
  "url": "natural_numbers.html",
  "type": "Section",
  "number": "2.1",
  "title": "Natural Numbers",
  "body": " Natural Numbers  Filler text lol.  "
},
{
  "id": "open_and_closed",
  "level": "1",
  "url": "open_and_closed.html",
  "type": "Section",
  "number": "3.1",
  "title": "Open and Closed Sets",
  "body": " Open and Closed Sets  Filler text lol.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
