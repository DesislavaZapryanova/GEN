import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="container-blog">
      <div className="container-frame-blog">
        <h1>Elements of interior designing</h1>

        <img
          className="blog-img"
          src="images/blog1.jpg"
        />
        <p className="blog-p">
          Regardless of whether you are working with existing furniture and objects or starting from
          scratch with an empty room, it is imperative to utilize the elements and principles of
          design as your guiding framework in making selections. The elements serve as your tools or
          raw materials, akin to the pigments for an artist. The elements of design encompass space,
          line, form, color, and texture. The principles of design pertain to how you employ these
          elements, and include balance, emphasis, rhythm, proportion and scale, as well as harmony
          and unity.
        </p>

        <img
          className="blog-img"
          src="images/blog2.jpg"
        />

        <p className="blog-p">
          <h3>1. Space:</h3> Space delineates and establishes the boundaries of functional and
          decorative elements you may employ. Typically, you may not be defining the space; rather,
          you will be faced with the challenge of utilizing the existing space effectively and
          functionally.
        </p>
        <img
          className="blog-img"
          src="images/blog3.jpg"
        />

        <p className="blog-p">
          <h3>2. Line:</h3> Lines in a room are second in significance only to color when it comes
          to determining the overall mood or feel of the space. The lines of windows should uphold
          the dominant line of the room. In most situations, the dominant line is straight
          (vertical, horizontal, or diagonal), rather than curved. Your choice to emphasize the
          direction of the lines will determine the mood you wish to create. Vertical lines add
          height and grandeur, establishing a more formal atmosphere. Vertical lines also balance
          the horizontal lines found in most furniture. Horizontal lines tend to create a calm,
          informal ambiance. They work well in casual rooms or as a counterpoint to the strong
          verticals in formal spaces. Diagonal lines draw attention and lead the eye. They can be
          unsettling unless supported by verticals or opposing diagonals. Curved lines impart a
          softening effect and shield the room from excessive rigidity. Use curved lines with a
          measure of restraint to prevent the room from becoming overly soft and excessively
          feminine.
        </p>
        <img
          className="blog-img"
          src="images/blog4.jpg"
        />

        <p className="blog-p">
          <h3>3. Form:</h3> The lines that converge create the shape of an object, which in turn
          influences the overall perception of the space. Straight lines create rectangles, squares,
          and triangles. Curved lines form circles and ovals. The rectangle is the most prevalent
          shape and often serves as the dominant form in a room. Triangles provide stability, while
          curved forms soften the contours of objects.
        </p>
        <img
          className="blog-img"
          src="images/blog5.jpg"
        />

        <p className="blog-p">
          <h3>4. Colour:</h3> More than any other element, colour can enhance the beauty of a room.
          Colour has the power to set the mood. It can make a room feel warmer or cooler, larger or
          smaller. It can conceal unattractive features or draw attention to a focal point. Even
          with the simplest furniture, the judicious use of colour can transform a room.
        </p>

        <img
          className="blog-img"
          src="images/blog6.jpg"
        />

        <p className="blog-p">
          <h3>5. Texture:</h3> Texture plays an increasingly vital role in home decoration. Visual
          texture is the perceived smoothness or roughness of a material. To maintain and enhance a
          relaxed feel, use fabrics with a more pronounced visual texture, such as fluffy or coarse
          textures. Smooth, shiny surfaces like silk, satin, and polished wood maintain a more
          formal feel in the room. Incorporating multiple levels of complementary textures adds
          variety and sustains interest. However, it is advisable to avoid dramatic contrasts in
          texture.
        </p>
        <img
          className="blog-img"
          src="images/blog7.jpg"
        />
      </div>
    </div>
  );
}

export default Blog;
