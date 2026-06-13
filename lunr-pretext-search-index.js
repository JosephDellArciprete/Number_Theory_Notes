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
  "body": " Sets   Sets and Subsets  Sets are determined uniquely by their elements. The primitive, undefined concept in set theory is that of membership .    A set is a collection of objects, called the elements of the set. To denote an element is a member of a set we write . If is not an element of we write . By definition a set is totally determined by its elements, so two sets are equal if and only if they have the same elements: .    As mentioned above the key concept is that of membership, we do not care about repeats of element nor of the order of the elements. The set of US presidents between 1789 to 2026 is the same if we list the in ascending order, descending order, or if we repeat some of the presidents in our description of the set  We immediately come to another simple concept for out next definition.    If A and B are sets we say that A is a subset of B, written , if every element of A is also an element of B, that is:     We must not abuse the the concepts of set membership too much though, consider Russel's Paradox , named after logician Bertrand Russell.   Russell's Paradox  Let be the set of all sets such that . Is ? One the one hand if then by definition, . However if again by definition . So in either case we get a contradiction. Hence R is not a well defined set.   One way to avoid such problems is to have a well defined universal set and define a subsets of this set by defining a valid property that defines a subset. Particular for a set and a predicate  on , i.e a valid statement that is true of false, then: Is a subset on , this is known as predicate form .  Another easy to define a set is simply to list its elements, straightforward but obviously not often feasible.   On the other hand we also have the empty set , denoted , the set containing no elements.        Set Operations  filler    Algebra of Sets  fillers    Generalized Operations  filler lol    Product Sets  pootis   "
},
{
  "id": "def-Set",
  "level": "2",
  "url": "sets.html#def-Set",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A set is a collection of objects, called the elements of the set. To denote an element is a member of a set we write . If is not an element of we write . By definition a set is totally determined by its elements, so two sets are equal if and only if they have the same elements: .   "
},
{
  "id": "def-Subset",
  "level": "2",
  "url": "sets.html#def-Subset",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  If A and B are sets we say that A is a subset of B, written , if every element of A is also an element of B, that is:    "
},
{
  "id": "subsec_sets_and_subsets-8",
  "level": "2",
  "url": "sets.html#subsec_sets_and_subsets-8",
  "type": "Warning",
  "number": "1.1.3",
  "title": "Russell’s Paradox.",
  "body": " Russell's Paradox  Let be the set of all sets such that . Is ? One the one hand if then by definition, . However if again by definition . So in either case we get a contradiction. Hence R is not a well defined set.  "
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
