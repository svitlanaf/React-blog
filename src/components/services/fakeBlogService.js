export const blogs = [
  {
    _id: "1",
    title: "C# IS AWESOME",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt lectus, ac consectetur dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultrices mi in ex tempor volutpat. Nulla elementum libero tortor, quis auctor orci euismod a. Nulla mollis et eros id blandit. Nunc vitae urna interdum diam pretium maximus. Pellentesque eget sodales urna."
  },
  {
    _id: "2",
    title: "My Programmer Journey",
    about:
      "Praesent consequat orci ut dui semper, ut fringilla diam tincidunt. Aliquam accumsan consectetur ultrices. Integer dapibus dui ac pulvinar malesuada. Praesent id sem maximus, sagittis arcu eget, pulvinar ligula. Quisque tempor porttitor urna id tempor. Nunc dolor sem, tempus et felis id, mollis venenatis mauris. Sed auctor est pulvinar neque hendrerit, ut scelerisque justo tincidunt. Sed sit amet neque eu mauris sollicitudin tempus in sit amet quam. Etiam iaculis pulvinar enim. Nulla porta egestas lectus sed mattis."
  },
  {
    _id: "3",
    title: "How To Become A Professional Dev",
    about:
      "Nullam posuere lorem quam. Donec est purus, feugiat vel porta in, luctus non lectus. Aliquam erat volutpat. Vestibulum purus lorem, efficitur ut sem nec, viverra imperdiet lectus. Nunc sit amet nunc vitae tellus ornare pharetra. Maecenas accumsan nisi id posuere gravida. Mauris tristique ullamcorper luctus. Quisque vitae elit auctor, bibendum leo sed, scelerisque erat. In hac habitasse platea dictumst. Suspendisse porta tincidunt dolor non congue."
  }
];

export function getBlogs() {
  return blogs.filter(b => b);
}
