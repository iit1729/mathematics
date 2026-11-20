/* =====================================================================
   YOUR TESTS. This is the only file you edit to add or change tests.

   Each test is one block { ... } inside window.TESTS. Copy a block, paste it after the last one
   (keep the comma between blocks) and change the details.

   title     : name of the test
   desc      : one line about the test
   levels    : where it appears. Only these four words: "Class 11", "Class 12", "JEE Main", "JEE Advanced"
               (a test can be in more than one course; a test with no "levels" appears in every course)
   minutes   : 0 = no timer, the solution is shown after each answer
               above 0 = timed test (for example 30), marked +4 for correct and -1 for wrong
   kind      : "chapter" or "mock" (optional). If you leave it out, minutes: 0 is a chapter test
               and a timed test is a mock test.
   questions : the list of questions. For each question:
       q       = the question
       o       = the options, for example ["A", "B", "C", "D"]
       a       = the number of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth
       s       = the solution shown after answering

   MATHS: write formulas between dollar signs, for example $x^2 + 1$.
          Inside the dollar signs write every backslash twice, for example $\\frac{1}{2}$.
   ===================================================================== */
window.TESTS = [

  /* ----- CHAPTER TESTS ----- */
  {
    title: "Sets: Chapter Test", levels: ["Class 11"], minutes: 0,
    desc: "Six questions on subsets, operations, De Morgan's laws and counting.",
    questions: [
      { q: "How many subsets does a set with 4 elements have?", o: ["8", "12", "16", "15"], a: 2, s: "A set with 4 elements has $2^4 = 16$ subsets." },
      { q: "If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A - B =$", o: ["$\\{1, 2\\}$", "$\\{4, 5\\}$", "$\\{3\\}$", "$\\{1, 2, 4, 5\\}$"], a: 0, s: "$A - B$ has the elements of $A$ that are not in $B$: 1 and 2." },
      { q: "If $n(A) = 20$, $n(B) = 15$ and $n(A \\cap B) = 5$, then $n(A \\cup B) =$", o: ["40", "35", "30", "25"], a: 2, s: "$n(A \\cup B) = 20 + 15 - 5 = 30$." },
      { q: "$(A \\cup B)'$ is equal to", o: ["$A' \\cup B'$", "$A' \\cap B'$", "$A \\cap B'$", "$A' - B$"], a: 1, s: "De Morgan's law: $(A \\cup B)' = A' \\cap B'$." },
      { q: "Which of these is an empty set?", o: ["$\\{0\\}$", "$\\{x : x^2 + 1 = 0,\\ x \\in \\mathbb{R}\\}$", "$\\{\\emptyset\\}$", "$\\{x : x^2 = 1\\}$"], a: 1, s: "$x^2 + 1 = 0$ has no real solution, so that set has no elements. The others each have at least one element." },
      { q: "The number of proper subsets of $\\{a, b, c\\}$ is", o: ["8", "7", "6", "3"], a: 1, s: "Proper subsets $= 2^3 - 1 = 7$." }
    ]
  },
  {
    title: "Quadratic Equations: Chapter Test", levels: ["Class 11", "JEE Main"], minutes: 0,
    desc: "Five quick questions on roots, discriminant and nature of roots.",
    questions: [
      { q: "If $\\alpha, \\beta$ are the roots of $x^2 - 5x + 6 = 0$, then $\\alpha^2 + \\beta^2 =$", o: ["11", "13", "25", "19"], a: 1, s: "Roots are 2 and 3, so $\\alpha^2 + \\beta^2 = 4 + 9 = 13$." },
      { q: "For $k > 0$, the equation $x^2 + kx + 4 = 0$ has equal roots. Then $k =$", o: ["2", "4", "8", "16"], a: 1, s: "Equal roots need $D = k^2 - 16 = 0$, so $k = 4$." },
      { q: "The sum of the roots of $2x^2 - 7x + 3 = 0$ is", o: ["$\\frac{3}{2}$", "$-\\frac{7}{2}$", "$\\frac{7}{2}$", "2"], a: 2, s: "Sum of roots $= -b/a = 7/2$." },
      { q: "If $1$ is a root of $x^2 - 4x + k = 0$, then $k =$", o: ["1", "3", "4", "5"], a: 1, s: "Put $x = 1$: $1 - 4 + k = 0$, so $k = 3$." },
      { q: "The roots of $x^2 + x + 1 = 0$ are", o: ["real and equal", "real and distinct", "complex, not real", "rational"], a: 2, s: "$D = 1 - 4 = -3 < 0$, so the roots are complex and not real." }
    ]
  },
  {
    title: "Calculus Basics: Chapter Test", levels: ["Class 12"], minutes: 0,
    desc: "Four questions on derivatives, integrals and a standard limit.",
    questions: [
      { q: "$\\dfrac{d}{dx}(x^3) =$", o: ["$x^2$", "$3x^2$", "$3x$", "$x^3$"], a: 1, s: "Power rule: $\\frac{d}{dx}x^n = nx^{n-1}$, so the answer is $3x^2$." },
      { q: "$\\dfrac{d}{dx}(\\sin x) =$", o: ["$-\\cos x$", "$\\cos x$", "$\\sin x$", "$-\\sin x$"], a: 1, s: "The derivative of $\\sin x$ is $\\cos x$." },
      { q: "$\\displaystyle\\int 2x\\,dx =$", o: ["$x^2 + C$", "$2x^2 + C$", "$x + C$", "$2 + C$"], a: 0, s: "$\\int 2x\\,dx = 2 \\cdot \\frac{x^2}{2} + C = x^2 + C$." },
      { q: "$\\displaystyle\\lim_{x \\to 0} \\frac{e^x - 1}{x} =$", o: ["0", "1", "$e$", "$\\infty$"], a: 1, s: "This is a standard limit and its value is 1." }
    ]
  },

  /* ----- MOCK TESTS ----- */
  {
    title: "Quadratic Equations: Mini Mock Test", levels: ["Class 11", "JEE Main"], minutes: 10,
    desc: "Five JEE Main style questions on quadratic equations.",
    questions: [
      { q: "The sum of all real values of $x$ satisfying $(x^2 - 5x + 5)^{x^2 + 4x - 60} = 1$ is", o: ["3", "$-4$", "6", "5"], a: 0, s: "Base $= 1$ gives $x = 1, 4$. Exponent $= 0$ gives $x = -10, 6$. Base $= -1$ needs an even exponent: $x = 2$ works, $x = 3$ does not. Sum $= 1 + 4 - 10 + 6 + 2 = 3$." },
      { q: "If the roots of $x^2 - px + q = 0$ differ by 1, then $p^2 - 4q =$", o: ["1", "0", "2", "4"], a: 0, s: "$|\\alpha - \\beta| = \\sqrt{D} = 1$, so $D = p^2 - 4q = 1$." },
      { q: "The number of real solutions of $x^2 - 3|x| + 2 = 0$ is", o: ["2", "3", "4", "1"], a: 2, s: "Put $|x| = t$: $t^2 - 3t + 2 = 0$ gives $t = 1$ or $2$, so $x = \\pm 1, \\pm 2$. That is 4 solutions." },
      { q: "If $\\alpha, \\beta$ are the roots of $x^2 - x - 1 = 0$, then $\\alpha^3 + \\beta^3 =$", o: ["3", "4", "1", "5"], a: 1, s: "$S = 1$, $P = -1$. $\\alpha^3 + \\beta^3 = S^3 - 3PS = 1 + 3 = 4$." },
      { q: "The equation $x^2 - 2x + k = 0$ has real roots when", o: ["$k \\ge 1$", "$k \\le 1$", "$k < 1$", "$k > 1$"], a: 1, s: "$D = 4 - 4k \\ge 0$ gives $k \\le 1$." }
    ]
  },
  {
    title: "Sample Mock Test", levels: ["Class 12", "JEE Main"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
      { q: "$\\displaystyle \\int_0^1 x e^{x^2}\\,dx =$", o: ["$e - 1$", "$\\frac{e-1}{2}$", "$\\frac{e}{2}$", "$\\frac{e+1}{2}$"], a: 1, s: "Put $t = x^2$: the integral is $\\frac{1}{2}\\int_0^1 e^t\\,dt = \\frac{e-1}{2}$." },
      { q: "The number of diagonals of a hexagon is", o: ["6", "9", "12", "15"], a: 1, s: "$\\binom{6}{2} - 6 = 15 - 6 = 9$." },
      { q: "The radius of the circle $x^2 + y^2 - 6x + 8y = 0$ is", o: ["3", "4", "5", "25"], a: 2, s: "Centre $(3, -4)$, so $r^2 = 9 + 16 = 25$ and $r = 5$." },
      { q: "If $A$ is a $2 \\times 2$ matrix with $|A| = 3$, then $|2A| =$", o: ["6", "12", "9", "24"], a: 1, s: "$|2A| = 2^2 |A| = 4 \\times 3 = 12$." }
    ]
  }

  /* JEE Advanced tests will appear here once you add them with levels: ["JEE Advanced"]. */
];
