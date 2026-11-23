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

  /* Class 11 tests will appear here once you add them with levels: ["Class 11"]. */  

             /* ----- CHAPTER TESTS ----- */
  {
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION A: INTRODUCTION AND REPRESENTATION OF SETS",
    questions: [
  
    { q: "Which of the following is a well-defined collection?", o: ["A collection of beautiful flowers.", "A collection of intelligent students.", "A collection of prime numbers less than 20.", "A collection of difficult problems." ], a: 2, s: "A set is a well-defined collection of distinct objects. Prime numbers less than 20 form a definite collection: {2, 3, 5, 7, 11, 13, 17, 19}. The other collections involve subjective descriptions." },
    
    { q: "The roster form of A = {x ∈ N : x < 6} is:", o: [ "{0, 1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}", "{2, 3, 4, 5}" ], a: 1, s: "Since N = {1, 2, 3, ...}, the natural numbers less than 6 are 1, 2, 3, 4 and 5. Hence A = {1, 2, 3, 4, 5}." },

   { q: "Which of the following represents the set of even natural numbers less than 12?", o: [ "{0, 2, 4, 6, 8, 10}", "{2, 4, 6, 8, 10}", "{2, 4, 6, 8, 10, 12}", "{1, 3, 5, 7, 9, 11}"], a: 1, s: "Even natural numbers are positive integers divisible by 2. Those less than 12 are 2, 4, 6, 8 and 10." },
  
   { q: "If A = {x ∈ Z : x² = 25}, then A is:", o: [ "{5}", "{-5}", "{-5, 5}", "{-25, 25}" ], a: 2, s: "Solving x² = 25 gives x = ±5. Both values belong to the set of integers. Therefore, A = {-5, 5}." },
   
  { q: "Which of the following is an empty set?", o: [ "{x ∈ N : x < 0}", "{x ∈ N : x < 5}", "{x ∈ Z : x² = 1}", "{x ∈ R : x² = 0}" ], a: 0, s: "There is no natural number less than zero. Hence the set is empty. The other sets contain elements." },

  ]
},


{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION B: TYPES AND EQUALITY OF SETS",
    questions: [
      
    { q: "Which of the following is a finite set?", o: [ "Set of all integers.", "Set of all natural numbers.", "Set of all prime numbers.", "Set of all days in a week." ], a: 3 , s: "A finite set contains a limited number of elements. There are exactly seven days in a week. The sets of integers, natural numbers and prime numbers are infinite."},

    { q: "Two sets A and B are equal if:", o: [ "They have the same number of elements.", "Every element of A belongs to B and every element of B belongs to A.", "They have at least one common element.", "Both sets are infinite." ], a: 1,
s: "Two sets are equal if and only if they contain exactly the same elements. In other words, A = B if A ⊆ B and B ⊆ A."},

    { q: "Which of the following pairs represents equal sets?", o: [ "A = {1, 2, 3}, B = {1, 2, 4}", "A = {a, e, i}, B = {i, a, e}", "A = {1, 2}, B = {1, 2, 3}", "A = {2, 4, 6}, B = {2, 4, 8}" ], a: 1, s: "The order of elements does not matter in a set. Both sets contain exactly a, e and i. Therefore, A = B." },

        { q: "Two sets having the same number of elements are called:", o: [ "Equal sets", "Disjoint sets", "Equivalent sets", "Universal sets" ], a: 2,  s: "Two finite sets are called equivalent if they have the same cardinal number. They need not contain the same elements." },

       { q: "If A = {1, 2, 3} and B = {a, b, c}, then:", o: [ "A = B", "A and B are equivalent sets.", "A and B are disjoint and unequal in cardinality.", "A ⊂ B" ], a: 1,  s: "Both sets contain three elements, so n(A) = n(B) = 3. However, their elements are different. Hence they are equivalent but not equal." },

]
},

{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION C: SUBSETS AND POWER SETS",
    questions: [

    { q: "If A = {1, 2, 3}, then the number of subsets of A is:", o: ["3", "6", "7", "8"],  a: 3, s: "The number of subsets of a finite set containing n elements is 2ⁿ. Here n = 3. Therefore, the number of subsets = 2³ = 8." },

    { q: "If A = {a, b, c, d}, then the number of proper subsets of A is:", o: ["8", "14", "15", "16"], a: 2,  s: "Total subsets = 2⁴ = 16. A proper subset is any subset other than the set itself. Hence the number of proper subsets = 16 - 1 = 15."},

    { q: "If a set A has 6 elements, then n(P(A)) is:", o: ["12", "32", "36", "64"], a: 3, s: "The power set contains all subsets of A. The number of elements in a power set is the same as the number of subsets. Therefore, n(P(A)) = 2ⁿ = 2⁶ = 64."},

   { q: "If A = {1, 2}, then P(A) is:", o: [ "{{1}, {2}}", "{∅, {1}, {2}, {1, 2}}", "{1, 2, {1, 2}}", "{∅, 1, 2}" ], a: 1,
s: "The power set contains every subset, including the empty set and the set itself. The subsets are ∅, {1}, {2} and {1, 2}."}, 

   { q: "The power set of the empty set is:", o: [ "∅", "{∅}", "{{∅}}", "{0}" ], a: 1, s: "The empty set has exactly one subset, namely itself. Therefore, P(∅) = {∅}. Note that {∅} is not the empty set; it contains one element." },

   { q: "If A ⊆ B, then which statement is always true?", o: [ "A ∪ B = A", "A ∩ B = B", "A ∪ B = B", "A - B = B" ], a: 2, s: "Since every element of A already belongs to B, their union contains exactly the elements of B. Hence A ∪ B = B."}, 

   { q: "Which statement is always true for any two sets A and B?", o: [ "A ⊆ B", "B ⊆ A", "A ∩ B ⊆ A", "A ∪ B ⊆ A" ], a: 2,  s: "Every element common to A and B necessarily belongs to A. Therefore, A ∩ B is always a subset of A. Similarly, A ∩ B ⊆ B." }, 

   { q: "If A = {1, 2, 3, 4} and B = {2, 4}, then:", o: [ "A ⊂ B", "B ⊂ A", "A = B", "A ∩ B = ∅" ], a: 1, s: "Every element of B belongs to A, but A contains additional elements 1 and 3. Thus B is a proper subset of A." },

]
},

{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION D: UNIVERSAL SET AND INTERVALS",
    questions: [

    { q: "Which of the following can represent a universal set for A = {1, 2, 3}?",  o: [ "{1, 2}", "{1, 2, 3, 4, 5}", "{4, 5, 6}", "∅" ], a: 1, s: "A universal set contains all elements under consideration. The set {1, 2, 3, 4, 5} contains every element of A and can therefore serve as its universal set." },

   { q: "The interval representing   {x ∈ R : -3 < x ≤ 5 }  is:", o: [ "[-3, 5]", "(-3, 5)", "(-3, 5]", "[-3, 5)"], a: 2, s: "The inequality -3 < x $excludes -3, so use a round bracket. The inequality x ≤ 5  includes 5, so use a square bracket. Hence the interval is  (-3, 5].  "}, 

   { q: "The set  {x ∈ R : x ≥ 4}  is represented by:", o: [ "(-∞, 4]", "[4, ∞)", "(4, ∞)", "(-∞, 4)" ], a: 1, s: "The condition   x ≥ 4  includes 4 and all real numbers greater than 4. Therefore, the interval is [4, ∞). Infinity always takes a round bracket."},

   { q: "The interval (-∞, 3) represents:", o: [ "{x ∈ R : x ≤ 3}", "{x ∈ R : x < 3}", "{x ∈ R : x > 3}", "{x ∈ R : x ≥ 3}" ], a: 1, s: "The interval (-∞, 3) contains all real numbers less than 3 but does not include 3."}, 

   { q: "The intersection of the intervals [1, 5] and (3, 7) is:", o: [  "[1, 3]", "(3, 5]", "[3, 5)", "(3, 7)" ], a: 1, s: "The common real numbers must satisfy  1 ≤ x ≤ 5   and   3 < x < 7    simultaneously. Combining these gives  3 < x ≤ 5.  Hence the intersection is (3, 5]." },

]
}, 

{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION E: UNION, INTERSECTION AND DIFFERENCE",
    questions: [

    { q: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B is:", o: [ "{3}", "{1, 2, 3, 4, 5}", "{1, 2, 4, 5}", "{1, 2, 3}" ], a: 1,  s: "The union contains every element belonging to A or B or both. Thus A ∪ B = {1, 2, 3, 4, 5}."}, 

    { q: "If A = {2, 4, 6, 8} and B = {1, 2, 3, 4}, then A ∩ B is:",  o: [ "{1, 2, 3, 4, 6, 8}", "{2, 4}", "{6, 8}", "∅" ], a: 1 , s: "The intersection contains only elements common to both sets. The common elements are 2 and 4. Hence A ∩ B = {2, 4}." },

    { q: "If A = {1, 2, 3, 4, 5} and B = {2, 4, 6}, then A - B is:", o: [ "{2, 4}", "{1, 3, 5}", "{1, 2, 3, 4, 5, 6}", "{6}" ], a: 1,  s: "A - B contains elements belonging to A but not to B. Removing the common elements 2 and 4 from A gives {1, 3, 5}."},

   { q: "If A and B are disjoint sets, then:",  o: [ "A ∪ B = ∅", "A ∩ B = ∅", "A = B", "A - B = ∅" ], a: 1,  s: "Disjoint sets have no common  elements. By definition, A ∩ B = ∅." },

   { q: "For any two sets A and B, which identity is correct?", o: [ "A - B = B - A", "A - B = A ∩ B", "A - B = A ∩ B'", "A - B = A ∪ B" ], a: 2,
s: "A - B contains elements belonging to A but not to B. These are precisely the elements belonging to A and the complement of B. Therefore, A - B = A ∩ B'."},
    
   { q: "If A = {1, 2, 3, 4} and B = {3, 4, 5}, then B - A is:", o: [ "{1, 2}", "{3, 4}", "{5}", "{1, 2, 5}" ], a: 2, s: "B - A contains elements of B that are not in A. Since 3 and 4 belong to both sets, only 5 remains." },

   { q: "If U = {1, 2, 3, 4, 5, 6} and A = {1, 3, 5}, then A' is:", o: [ "{1, 3, 5}", "{2, 4, 6}", "{1, 2, 3}",  "∅" ], a: 1, s: "The complement is the set of elements in U that do not belong to A. Hence A' = U - A = {2, 4, 6}."},

   { q: "For any set A, A ∩ A' is equal to:",  o: [ "A", "U", "∅", "A'" ], a: 2, s: "A and its complement have no common elements. Therefore, A ∩ A' = ∅. This is called the complement law." }, 

]
}, 

{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION F: PROPERTIES AND LAWS OF SET OPERATIONS ",
    questions: [

     { q: "Which of the following represents the commutative law of union?", o: [ "A ∪ B = B ∪ A", "A ∪ (B ∪ C) = (A ∪ B) ∪ C", "A ∪ A = A",
"A ∪ ∅ = A" ], a: 0,  s: "The commutative law states that changing the order of two sets does not change their union. Thus A ∪ B = B ∪ A." }, 
     
    { q: "Which of the following represents the associative law of intersection?", o: [ "A ∩ B = B ∩ A", "A ∩ (B ∩ C) = (A ∩ B) ∩ C", "A ∩ A = A", "A ∩ U = A" ],   a: 1, s: "The associative law states that the grouping of three sets does not affect their intersection. Therefore, A ∩ (B ∩ C) = (A ∩ B) ∩ C."  }, 

    { q: "Which of the following is the identity law for union?", o: [ "A ∪ U = A", "A ∪ ∅ = A", "A ∪ A = U", "A ∪ A' = ∅" ], a: 1, s: "The empty set is the identity element for union. Adding the empty set to any set does not change that set. Hence A ∪ ∅ = A." }, 

    { q: "Which of the following represents the identity law for intersection?", o: [ "A ∩ U = A", "A ∩ ∅ = A", "A ∩ A' = U", "A ∩ A = ∅" ], a: 0, s: "The universal set is the identity element for intersection. Since every element of A belongs to U, A ∩ U = A." },

    { q: "Which of the following is the idempotent law?", o: [ "A ∪ A = A and A ∩ A = A", "A ∪ ∅ = U", "A ∩ U = U", "A ∪ A' = ∅" ], a: 0, s: "The idempotent laws state that the union or intersection of a set with itself gives the same set: A ∪ A = A and A ∩ A = A." },

    { q: "Which of the following is the distributive law of intersection over union?", o: [ "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)", "A ∪ (B ∪ C) =(A ∪ B) ∩ C", "A ∩ (B ∩ C) = A ∪ (B ∩ C)", "A ∪ B = B ∪ A" ], a: 0, s: "Intersection distributes over union according to the identity A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."}, 

    { q: "According to De Morgan's first law, (A ∪ B)' is equal to:", o: [ "A' ∪ B'", "A' ∩ B'", "A ∩ B", "A ∪ B" ], a: 1, s: "De Morgan's first law states that the complement of a union is equal to the intersection of the complements: (A ∪ B)' = A' ∩ B'." }, 

    { q: "According to De Morgan's second law, (A ∩ B)' is equal to:", o: [ "A' ∩ B'", "A ∪ B", "A' ∪ B'", "A ∩ B" ], a: 2, s: "De Morgan's  second law states that the complement of an intersection is equal to the union of the complements: (A ∩ B)' = A' ∪ B'." }, 

    { q: "Which of the following represents the absorption law?", o: [ "A ∪ (A ∩ B) = A", "A ∪ B = B ∪ A", "A ∩ B = B ∩ A", "A ∪ ∅ = ∅" ], a: 0,
s: "The absorption laws are A ∪ (A ∩ B) = A and A ∩ (A ∪ B) = A. Therefore, option A is correct." },


]
},

{
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION G: CARDINALITY AND VENN DIAGRAM APPLICATIONS ",
    questions: [

    { q: "If n(A) = 20, n(B) = 15 and n(A ∩ B) = 5, then n(A ∪ B) is:", o: ["25", "30", "35", "40"], a: 1 ,  s: "Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B), we get 20 + 15 - 5 = 30."},

    { q: "In a class of 50 students, 30 like Mathematics and 25 like Physics. If 10 like both subjects, how many like neither subject?", o: ["0", "5", "10", "15"], a: 1, s: "Students liking at least one subject = 30 + 25 - 10 = 45. Students liking neither = 50 - 45 = 5."},

    { q: "If n(A) = 12, n(B) = 10 and n(A ∪ B) = 18, then n(A ∩ B) is:", o: ["2", "3", "4", "6"], a: 2, s: "Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B), we get 18 = 12 + 10 - n(A ∩ B). Thus n(A ∩ B) = 22-18 = 4."},

    { q: "In a group of 100 students, 60 like Mathematics, 45 like Physics and 20 like both. How many students like at least one of the two subjects?",  o: ["75", "80", "85", "90"],  a: 2,  s: "Using n(M ∪ P) = n(M) + n(P) - n(M ∩ P), we obtain 60 + 45 - 20 = 85. Therefore, 85 students like at least one subject."},

   { q: "In a group of 100 students, 60 like Mathematics, 45 like Physics and 20 like both. How many students like neither subject?",
o: ["10", "15", "20", "25"], a: 1, s: "Students liking at least one subject = 60 + 45 - 20 = 85. Therefore, students liking neither = 100 - 85 = 15." }, 

   { q: "If A and B are disjoint finite sets with n(A) = 8 and n(B) = 12, then n(A ∪ B) is:", o: ["4", "8", "12", "20"], a: 3, s: "For disjoint sets, A ∩ B = ∅, so n(A ∩ B) = 0. Therefore, n(A ∪ B) = 8 + 12 - 0 = 20."},

  { q: "If n(U) = 50 and n(A) = 32, then n(A') is:", o: ["12", "18", "22", "32"], a: 1, s: "Since A' = U - A, n(A') = n(U) - n(A) = 50 - 32 = 18."},

  { q: "If A ⊆ B, n(A) = 7 and n(B) = 12, then n(B - A) is:", o: ["3", "5", "7", "19"], a: 1, s: "Since A is a subset of B, B can be divided into A and B - A. Thus n(B - A) = n(B) - n(A) = 12 - 7 = 5."},

  { q: "If n(A) = 15, n(B) = 12 and n(A ∩ B) = 4, then n(A - B) is:", o: ["4", "8", "11", "15"],  a: 2, s: "The set A consists of the elements in A ∩ B and A - B. Therefore, n(A - B) = n(A) - n(A ∩ B) = 15 - 4 = 11."},

  { q: "In a group of 60 students, 30 like Mathematics, 25 like Physics, 20 like Chemistry, 10 like both Mathematics and Physics, 8 like both Physics and Chemistry, 5 like both Mathematics and Chemistry, and 3 like all three subjects. How many students like at least one subject?", o: ["50", "55", "57", "60"], a: 1, s: "Using the three-set inclusion-exclusion formula: n(M ∪ P ∪ C) = n(M) + n(P) + n(C) - n(M ∩ P) - n(P ∩ C) - n(M ∩ C) + n(M ∩ P ∩ C). Substituting: 30 + 25 + 20 - 10 - 8 - 5 + 3 = 55. Hence, 55 students like at least one subject."},

]
},

              /* ----- MOCK TESTS ----- */
  {
    title: "Sets : Mock Test - 01 ", levels: ["Class 11"], minutes: 10,
    desc: "25 Question on quadratic equations.",
    questions: [ 

{ q: "Which of the following represents the identity law for intersection?", o: [ "A ∩ U = A", "A ∩ ∅ = A", "A ∩ A' = U", "A ∩ A = ∅" ], a: 0, s: "The universal set is the identity element for intersection. Since every element of A belongs to U, A ∩ U = A." },

{ q: "According to De Morgan's second law, (A ∩ B)' is equal to:", o: [ "A' ∩ B'", "A ∪ B", "A' ∪ B'", "A ∩ B" ], a: 2, s: "De Morgan's  second law states that the complement of an intersection is equal to the union of the complements: (A ∩ B)' = A' ∪ B'." },

{ q: "If n(A) = 20, n(B) = 15 and n(A ∩ B) = 5, then n(A ∪ B) is:", o: ["25", "30", "35", "40"], a: 1 ,  s: "Using n(A ∪ B) = n(A) + n(B) - n(A ∩ B), we get 20 + 15 - 5 = 30."},


{ q: "In a group of 100 students, 60 like Mathematics, 45 like Physics and 20 like both. How many students like neither subject?",
o: ["10", "15", "20", "25"], a: 1, s: "Students liking at least one subject = 60 + 45 - 20 = 85. Therefore, students liking neither = 100 - 85 = 15." }, 

{ q: "In a group of 60 students, 30 like Mathematics, 25 like Physics, 20 like Chemistry, 10 like both Mathematics and Physics, 8 like both Physics and Chemistry, 5 like both Mathematics and Chemistry, and 3 like all three subjects. How many students like at least one subject?", o: ["50", "55", "57", "60"], a: 1, s: "Using the three-set inclusion-exclusion formula: n(M ∪ P ∪ C) = n(M) + n(P) + n(C) - n(M ∩ P) - n(P ∩ C) - n(M ∩ C) + n(M ∩ P ∩ C). Substituting: 30 + 25 + 20 - 10 - 8 - 5 + 3 = 55. Hence, 55 students like at least one subject."},

]

},


/* Class 12 tests will appear here once you add them with levels: ["Class 12"]. */

               /* ----- CHAPTER TESTS CLASS 12----- */
{
    title: "Quadratic Equations: Chapter Test", levels: [ "Class 12"], minutes: 0,
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

  

        /* ----- MOCK TESTS CLASS 12 ----- */
  {
    title: "Quadratic Equations: Mini Mock Test", levels: ["Class 12"], minutes: 10,
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
    title: "Sample Mock Test", levels: ["Class 12"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
      { q: "$\\displaystyle \\int_0^1 x e^{x^2}\\,dx =$", o: ["$e - 1$", "$\\frac{e-1}{2}$", "$\\frac{e}{2}$", "$\\frac{e+1}{2}$"], a: 1, s: "Put $t = x^2$: the integral is $\\frac{1}{2}\\int_0^1 e^t\\,dt = \\frac{e-1}{2}$." },
      { q: "The number of diagonals of a hexagon is", o: ["6", "9", "12", "15"], a: 1, s: "$\\binom{6}{2} - 6 = 15 - 6 = 9$." },
      { q: "The radius of the circle $x^2 + y^2 - 6x + 8y = 0$ is", o: ["3", "4", "5", "25"], a: 2, s: "Centre $(3, -4)$, so $r^2 = 9 + 16 = 25$ and $r = 5$." },
      { q: "If $A$ is a $2 \\times 2$ matrix with $|A| = 3$, then $|2A| =$", o: ["6", "12", "9", "24"], a: 1, s: "$|2A| = 2^2 |A| = 4 \\times 3 = 12$." }
    ]
  },

 




/* JEE Main tests will appear here once you add them with levels: ["JEE Main"]. */

             /* ----- CHAPTER TESTS JEE MAIN ----- */
{
    title: "Quadratic Equations: Chapter Test", levels: [ "JEE Main"], minutes: 0,
    desc: "Five quick questions on roots, discriminant and nature of roots.",
    questions: [
      { q: "If $\\alpha, \\beta$ are the roots of $x^2 - 5x + 6 = 0$, then $\\alpha^2 + \\beta^2 =$", o: ["11", "13", "25", "19"], a: 1, s: "Roots are 2 and 3, so $\\alpha^2 + \\beta^2 = 4 + 9 = 13$." },
]
},

          /* ----- MOCK TESTS JEE MAIN----- */

{
title: "Sample Mock Test", levels: ["JEE Main"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
  
   ]
},
 

/* JEE Advanced tests will appear here once you add them with levels: ["JEE Advanced"]. */

    /* ----- CHAPTER TESTS JEE ADVANCED ----- */
{
    title: "Quadratic Equations: Chapter Test", levels: [ "JEE Advanced"], minutes: 0,
    desc: "Five quick questions on roots, discriminant and nature of roots.",
    questions: [
      { q: "If $\\alpha, \\beta$ are the roots of $x^2 - 5x + 6 = 0$, then $\\alpha^2 + \\beta^2 =$", o: ["11", "13", "25", "19"], a: 1, s: "Roots are 2 and 3, so $\\alpha^2 + \\beta^2 = 4 + 9 = 13$." },
]
},

         /* ----- MOCK TESTS JEE ADVANCED----- */

{
title: "Sample Mock Test", levels: ["JEE Advanced"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
      { q: "$\\displaystyle \\lim_{x \\to 0} \\frac{\\sin 3x}{x} =$", o: ["0", "1", "3", "$\\frac{1}{3}$"], a: 2, s: "$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x} \\to 3$." },
  
   ]
},


];
