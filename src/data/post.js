export const links = [
    { 
      slug: "cat1",
      title: "Cat1", 
      path: "https://i.pinimg.com/236x/a2/e9/70/a2e97087637b3b74ec16812e8480f5b3.jpg" ,
      desc: "Description for Cat1"
    },
    { 
      slug: "cat2",
      title: "Cat2", 
      path: "https://i.pinimg.com/236x/1f/72/e3/1f72e3406c084bcc8e102dc01cf686a5.jpg" ,
      desc: "Description for Cat2"
    },
  ];


  export function findLinkBySlug(slug) {
    return links.find(link => link.slug === slug);
  }
  

  