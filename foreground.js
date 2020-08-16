const _0x205e = [
    "push",
    "nodeName",
    "div",
    "none",
    "classList",
    "createElement",
    "children",
    "display",
    "appendChild",
    "style",
    ".article-offer",
    "opacity",
    "querySelector",
    "length",
    "color",
    ".pb-f-article-body",
    "black",
    "QUnWjUZnT0nf",
    "childNodes",
    "block",
    "getElementById",
    "remove"
  ];
  (function (_0x58e6f4, _0x205eed) {
    const _0x4195ec = function (_0x5e40fd) {
      while (--_0x5e40fd) {
        _0x58e6f4["push"](_0x58e6f4["shift"]());
      }
    };
    _0x4195ec(++_0x205eed);
  })(_0x205e, 0x1d9);
  const _0x4195 = function (_0x58e6f4, _0x205eed) {
    _0x58e6f4 = _0x58e6f4 - 0x0;
    let _0x4195ec = _0x205e[_0x58e6f4];
    return _0x4195ec;
  };
  let article = document[_0x4195("0x9")]("article-content");
  article[_0x4195("0x14")][_0x4195("0x12")] = _0x4195("0xe");
  document[_0x4195("0x1")](_0x4195("0x15"))[_0x4195("0x14")][
    _0x4195("0x12")
  ] = _0x4195("0xe");
  let parentDiv = document[_0x4195("0x9")](
      document["querySelector"](_0x4195("0x4"))["id"]
    ),
    clonedArticle = article["cloneNode"](!![]),
    newArticleDiv = document[_0x4195("0x10")](_0x4195("0xd"));
  parentDiv[_0x4195("0x13")](newArticleDiv);
  let articleArr = [],
    setVisible = (_0x4d09b7) => {
      _0x4d09b7[_0x4195("0x14")][_0x4195("0x12")] = _0x4195("0x8");
      _0x4d09b7[_0x4195("0x14")][_0x4195("0x3")] = _0x4195("0x5");
      _0x4d09b7[_0x4195("0x14")][_0x4195("0x0")] = "1";
      _0x4d09b7[_0x4195("0xf")][_0x4195("0xa")](_0x4195("0x6"));
    };
  for (let i = 0x0; i < clonedArticle[_0x4195("0x7")][_0x4195("0x2")]; i++) {
    clonedArticle[_0x4195("0x7")][i][_0x4195("0xc")] !== "#text" &&
      articleArr[_0x4195("0xb")](clonedArticle[_0x4195("0x7")][i]);
  }
  for (let i = 0x0; i < articleArr[_0x4195("0x2")]; i++) {
    setVisible(articleArr[i]);
    for (let x = 0x0; x < articleArr[i][_0x4195("0x11")][_0x4195("0x2")]; x++) {
      articleArr[i][_0x4195("0x11")][_0x4195("0x2")] > 0x0 &&
        setVisible(articleArr[i][_0x4195("0x11")][x]);
    }
    newArticleDiv[_0x4195("0x13")](articleArr[i]);
  }
  
console.log('completed');