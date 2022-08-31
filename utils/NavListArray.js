const NAVLISTARRAY = [
  {
    title: "Home",
    path: "/",
    className: "nav_item",
  },

  {
    title: "Services",
    className: "nav_item",
    path: "",
    submenu: [
      { subitem: "Consulting services", path: "consult" },
      { subitem: " Communication services", path: "ict" },
      { subitem: "Engineering services", path: "engineering" },
    ],
  },

  {
    title: "About us",
    path: "about",
    className: "nav_item",
  },
  {
    title: "Contact us",
    path: "contact",
    className: "nav_item",
  },
];

export default NAVLISTARRAY;
