// ADD YOUR TESTS HERE. Each question: q = question, o = 4 options, a = index of correct option (0 to 3), s = solution.
// Write maths between dollar signs, for example $x^2 + 1$. minutes: 0 = chapter quiz (no timer, solution after each answer).
// minutes above 0 = timed mock test with +4 for correct and -1 for wrong.
window.TESTS = [
  {
    id: "quad-quiz", minutes: 0,
    title: "Quadratic Equations: Chapter Quiz",
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
    id: "sample-mock", minutes: 10,
    title: "Sample Mock Test",
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
      { q: "$\\displaystyle \\int_0^1 x e^{x^2}\\,dx =$", o: ["$e - 1$", "$\\frac{e-1}{2}$", "$\\frac{e}{2}$", "$\\frac{e+1}{2}$"], a: 1, s: "Put $t = x^2$: the integral is $\\frac{1}{2}\\int_0^1 e^t\\,dt = \\frac{e-1}{2}$." },
      { q: "The number of diagonals of a hexagon is", o: ["6", "9", "12", "15"], a: 1, s: "$\\binom{6}{2} - 6 = 15 - 6 = 9$." },
      { q: "The radius of the circle $x^2 + y^2 - 6x + 8y = 0$ is", o: ["3", "4", "5", "25"], a: 2, s: "Centre $(3, -4)$, so $r^2 = 9 + 16 = 25$ and $r = 5$." },
      { q: "If $A$ is a $2 \\times 2$ matrix with $|A| = 3$, then $|2A| =$", o: ["6", "12", "9", "24"], a: 1, s: "$|2A| = 2^2 |A| = 4 \\times 3 = 12$." }
    ]
  }
];
