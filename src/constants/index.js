export const actionTypes = {
  DELETEELEMENT: "DELETEELEMENT",
  CREATENEWELEMENT: "CREATENEWELEMENT",
  SHOWADDITEMFORM: "SHOWADDITEMFORM",
  SETSELECTEDITEMID: "SETSELECTEDITEMID",
  SETCURRENTPARENT: "SETCURRENTPARENT",
  SHOWCONTEXTMENU: "SHOWCONTEXTMENU",
  SHOWFILEINFO: "SHOWFILEINFO"
};

export const fs = {
  0: {
    name: "root",
    id: 0,
    path: "root",
    parentPath: null,
    type: "folder",
    parent: null,
    children: [1, 2, 3, 4, 5, 6]
  },
  1: {
    name: "apps",
    id: 1,

    path: "root/apps",
    parentPath: "root/",
    type: "folder",
    parent: 0,
    children: []
  },
  2: {
    name: "pictures",
    id: 2,
    path: "root/pictures",
    parentPath: "root/",
    type: "folder",
    parent: 0,
    children: []
  },
  3: {
    name: "videos",
    id: 3,

    path: "root/videos",
    parentPath: "root/",
    type: "folder",
    parent: 0,
    children: []
  },
  4: {
    name: "docs",
    id: 4,

    path: "root/docs",
    parentPath: "root/",
    type: "folder",
    parent: 0,
    children: [7, 8, 9]
  },
  5: {
    name: "a.pdf",
    id: 5,

    path: "root/a.pdf",
    parentPath: "root/",
    parent: 0,
    type: "file"
  },
  6: {
    name: "b.jpg",
    id: 6,

    path: "root/b.jpg",
    parentPath: "root/",
    parent: 0,
    type: "file"
  },
  7: {
    name: "work",
    id: 7,

    path: "root/docs/work",
    parentPath: "root/docs",
    type: "folder",
    parent: 4,
    children: [10, 11]
  },
  8: {
    name: "c.pdf",
    id: 8,

    path: "root/docs/c.pdf",
    parentPath: "root/docs",
    parent: 4,
    type: "file"
  },
  9: {
    name: "d.docx",
    id: 9,

    path: "root/docs/d.docx",
    parentPath: "root/docs",
    parent: 4,
    type: "file"
  },
  10: {
    name: "e.pdf",
    id: 10,

    path: "root/docs/work/e.pdf",
    parentPath: "root/docs/work",
    parent: 7,
    type: "file"
  },
  11: {
    name: "f.ts",
    id: 11,

    path: "root/docs/work/f.ts",
    parentPath: "root/docs/work",
    extension: "ts",
    parent: 7,
    type: "file"
  }
};
