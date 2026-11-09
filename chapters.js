/* =====================================================================
   CHAPTER LIST FOR THE LEARN PAGE.  To add a new chapter, copy one { ... } block below,
   paste it after the last one (keep the comma between blocks) and change the details.

   title    : chapter name
   branch   : the area of maths (Algebra, Calculus, Coordinate Geometry, Trigonometry ...)
   levels   : where it belongs. Use only: "Class 11", "Class 12", "JEE Main", "JEE Advanced"
   desc     : one or two lines about the chapter
   tags     : small labels shown on the card (3 or 4 are enough)
   status   : "ready" = chapter page is finished.  "soon" = shows "Coming soon" (no link)
   url      : the chapter's page file, for example "circles.html" (only needed when status is "ready")

   To publish a chapter that is "soon": build its page, then change status to "ready" and add its url.
   ===================================================================== */
window.CHAPTERS = [
  { title: "Sets", branch: "Algebra", levels: ["Class 11", "JEE Main"], status: "ready", url: "chapter.html",
    desc: "From the meaning of a set to De Morgan's laws and counting problems, with Venn diagrams.",
    tags: ["15 topics", "Venn diagrams", "Formula sheet", "Practice"] },

  { title: "Quadratic Equations", branch: "Algebra", levels: ["Class 11", "JEE Main"], status: "ready", url: "quadratic.html",
    desc: "Roots, discriminant, location of roots and JEE shortcuts, learned with a live parabola.",
    tags: ["Parabola Lab", "Shortcut Lab", "Hint Ladder", "Speed Round"] },

  { title: "Complex Numbers", branch: "Algebra", levels: ["Class 11", "JEE Main", "JEE Advanced"], status: "soon",
    desc: "Argand plane, modulus and argument, and roots of unity.", tags: ["Argand plane"] },

  { title: "Sequences and Series", branch: "Algebra", levels: ["Class 11", "JEE Main"], status: "soon",
    desc: "AP, GP, HP and special series.", tags: ["AP", "GP", "HP"] },

  { title: "Straight Lines", branch: "Coordinate Geometry", levels: ["Class 11", "JEE Main"], status: "soon",
    desc: "Slope, forms of a line, distance and angle between lines.", tags: ["Slope", "Distance"] },

  { title: "Circles", branch: "Coordinate Geometry", levels: ["Class 11", "JEE Main", "JEE Advanced"], status: "soon",
    desc: "Equation of a circle, tangents and common tangents.", tags: ["Tangents"] },

  { title: "Limits and Derivatives", branch: "Calculus", levels: ["Class 11", "Class 12", "JEE Main"], status: "soon",
    desc: "Limits, continuity and the idea of the derivative.", tags: ["Limits", "Derivatives"] }
];
