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
      { q: "The roots of $x^2 + x + 1 = 0$ are", o: ["real and equal", "real and distinct", "complex, not real", "rational"], a: 2, s: "$D = 1 - 4 = -3 < 0$, so the roots are complex and not real." },
    ]
  },

{
id: "quad-quiz", minutes: 0,
    title: "Sets Theory: Chapter Quiz",
    desc: "Five quick questions on Sets",
    questions: [
      { q: "If a finite set $A$ contains exactly 4 elements, what is the total number of subsets that can be formed from $A$ ? ", o: ["4", "8", "16", "32"], a: 3, s: "The total number of subsets for a finite set with $n$ elements is given by the formula $2^n$. For this set, $2^4 = 16.$" },
      { q: "Let $A = {1, 2, 3, 4}$ and $B = {3, 4, 5, 6\}$. Which of the following represents the intersection of the two sets $ A &cap; B $ ? ", o : ["{1, 2}", "{3, 4}", "{5, 6}", "{1, 2, 3, 4, 5, 6}"], a: 1, s: "The intersection $A &cap; B$ consists only of the elements that are common to both set $A$ and set $B$. The numbers 3 and 4 appear in both sets."},
      { q: "Consider a Universal set $U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} $ and a subset $A = {2, 4, 6, 8, 10} $. What is the complement of set $ A  (A') $?", o : ["{1, 3, 5, 7, 9}", "{2, 4, 6, 8, 10}", " &phi", "{1, 2, 3, 4, 5}"], a: 0, s: "The complement of a set $ A $ contains all the elements in the universal set $ U $ that do not belong to $ A $. Since $ A $ contains the even numbers up to 10, its complement contains the odd numbers up to 10."},
      { q: "In a class of $ 30 $ students, $ 18 $ take Mathematics,$ 12 $ take Physics, and 5 take both subjects. How many students take neither Mathematics nor Physics?", o : ["10", "7", "5", "3"], a : 2, s : "By the principle of inclusion-exclusion, the number of students taking at least one subject is $ 18 + 12 - 5 = 25. $ Subtracting this from the total class size $ 30 - 25 $ gives $ 5 $ students who take neither."},
      { q: "According to De Morgan's Laws, which of the following identities is mathematically correct for any two sets $A$ and $B$", o : ["(A &cup; B)'= A' &cup; B'", "(A &cup; B)' = A' &cap; B'", "(A &cap; B)= A' &cap; B'", "(A &cap; B)'= A &cup; B"], a : 1, s : "De Morgan's Law states that the complement of the union of two sets is equal to the intersection of their individual complements: $(A &cup; B)' = A' &cap; B'.$ "},

]
, 
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
