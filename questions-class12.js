/* =====================================================================
   Class 12 TESTS.  Add or change Class 12 tests in this file only.
   Same rules as in questions-class11.js (title, desc, levels, minutes, questions). Keep every test inside window.TESTS.push( ... ).
   ===================================================================== */
window.TESTS = window.TESTS || [];
window.TESTS.push(
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

  {
    title: "Sample Mock Test", levels: ["Class 12"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
      { q: "$\\displaystyle \\int_0^1 x e^{x^2}\\,dx =$", o: ["$e - 1$", "$\\frac{e-1}{2}$", "$\\frac{e}{2}$", "$\\frac{e+1}{2}$"], a: 1, s: "Put $t = x^2$: the integral is $\\frac{1}{2}\\int_0^1 e^t\\,dt = \\frac{e-1}{2}$." },
      { q: "The number of diagonals of a hexagon is", o: ["6", "9", "12", "15"], a: 1, s: "$\\binom{6}{2} - 6 = 15 - 6 = 9$." },
      { q: "The radius of the circle $x^2 + y^2 - 6x + 8y = 0$ is", o: ["3", "4", "5", "25"], a: 2, s: "Centre $(3, -4)$, so $r^2 = 9 + 16 = 25$ and $r = 5$." },
      { q: "If $A$ is a $2 \\times 2$ matrix with $|A| = 3$, then $|2A| =$", o: ["6", "12", "9", "24"], a: 1, s: "$|2A| = 2^2 |A| = 4 \\times 3 = 12$." }
    ]
  }
);
