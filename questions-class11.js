/* =====================================================================
   Class 11 TESTS.  Add or change Class 11 tests in this file only.
   Each test is one block { ... } inside the brackets of window.TESTS.push( ... ).
   Put a COMMA between two tests, but NO comma after the last test.

   title     : name of the test
   desc      : one line about the test
   levels    : where it appears. Only these four words: "Class 11", "Class 12", "JEE Main", "JEE Advanced"
               (one test can appear in several courses, for example levels: ["Class 11", "JEE Main"])
   minutes   : 0 = no timer, the solution is shown after each answer (a chapter test)
               above 0 = timed test, for example 30, marked +4 for correct and -1 for wrong (a mock test)
   kind      : "chapter" or "mock" (optional). Without it, minutes: 0 is a chapter test and a timed test is a mock test.
   questions : the list of questions. For each question:
       q = the question,  o = the 4 options,  a = number of the correct option (0 = first, 1 = second, 2 = third, 3 = fourth),
       s = the solution shown after answering

   MATHS: write formulas between dollar signs, for example $x^2 + 1$. Inside them write every backslash twice: $\\frac{1}{2}$.

   To start another file (for example one file per chapter), copy this file, give it a new name,
   and add one line for it in tests.html next to the other questions-*.js lines.
   ===================================================================== */
window.TESTS = window.TESTS || [];
window.TESTS.push(
  

 /* Class 11 tests will appear here once you add them with levels: ["Class 11"]. */  


  // Class 11 NCERT Mathematics – Sets 50 MCQs

             /* ----- CHAPTER TESTS ----- */
  {
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION 01: 10 MCQs on Sets ",
    questions: [
  
    { q: "Which of the following is a well-defined collection?", o: ["A collection of beautiful flowers.", "A collection of intelligent students.", "A collection of prime numbers less than 20.", "A collection of difficult problems." ], a: 2, s: "A set is a well-defined collection of distinct objects. Prime numbers less than 20 form a definite collection: {2, 3, 5, 7, 11, 13, 17, 19}. The other collections involve subjective descriptions." },
    
    { q: "The roster form of A = {x ∈ N : x < 6} is:", o: [ "{0, 1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}", "{2, 3, 4, 5}" ], a: 1, s: "Since N = {1, 2, 3, ...}, the natural numbers less than 6 are 1, 2, 3, 4 and 5. Hence A = {1, 2, 3, 4, 5}." },

   { q: "Which of the following represents the set of even natural numbers less than 12?", o: [ "{0, 2, 4, 6, 8, 10}", "{2, 4, 6, 8, 10}", "{2, 4, 6, 8, 10, 12}", "{1, 3, 5, 7, 9, 11}"], a: 1, s: "Even natural numbers are positive integers divisible by 2. Those less than 12 are 2, 4, 6, 8 and 10." },
  
   { q: "If A = {x ∈ Z : x² = 25}, then A is:", o: [ "{5}", "{-5}", "{-5, 5}", "{-25, 25}" ], a: 2, s: "Solving x² = 25 gives x = ±5. Both values belong to the set of integers. Therefore, A = {-5, 5}." },
   
  { q: "Which of the following is an empty set?", o: [ "{x ∈ N : x < 0}", "{x ∈ N : x < 5}", "{x ∈ Z : x² = 1}", "{x ∈ R : x² = 0}" ], a: 0, s: "There is no natural number less than zero. Hence the set is empty. The other sets contain elements." },

      
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
    desc: "SECTION 02: 10 MCQs on Sets ",
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


    { q: "Which of the following can represent a universal set for A = {1, 2, 3}?",  o: [ "{1, 2}", "{1, 2, 3, 4, 5}", "{4, 5, 6}", "∅" ], a: 1, s: "A universal set contains all elements under consideration. The set {1, 2, 3, 4, 5} contains every element of A and can therefore serve as its universal set." },

   { q: "The interval representing   {x ∈ R : -3 < x ≤ 5 }  is:", o: [ "[-3, 5]", "(-3, 5)", "(-3, 5]", "[-3, 5)"], a: 2, s: "The inequality -3 < x $excludes -3, so use a round bracket. The inequality x ≤ 5  includes 5, so use a square bracket. Hence the interval is  (-3, 5].  "}, 


]
},

  {
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION 03: 10 MCQs on Sets ",
    questions: [

   { q: "The set  {x ∈ R : x ≥ 4}  is represented by:", o: [ "(-∞, 4]", "[4, ∞)", "(4, ∞)", "(-∞, 4)" ], a: 1, s: "The condition   x ≥ 4  includes 4 and all real numbers greater than 4. Therefore, the interval is [4, ∞). Infinity always takes a round bracket."},

   { q: "The interval (-∞, 3) represents:", o: [ "{x ∈ R : x ≤ 3}", "{x ∈ R : x < 3}", "{x ∈ R : x > 3}", "{x ∈ R : x ≥ 3}" ], a: 1, s: "The interval (-∞, 3) contains all real numbers less than 3 but does not include 3."}, 

   { q: "The intersection of the intervals [1, 5] and (3, 7) is:", o: [  "[1, 3]", "(3, 5]", "[3, 5)", "(3, 7)" ], a: 1, s: "The common real numbers must satisfy  1 ≤ x ≤ 5   and   3 < x < 7    simultaneously. Combining these gives  3 < x ≤ 5.  Hence the intersection is (3, 5]." },

    { q: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B is:", o: [ "{3}", "{1, 2, 3, 4, 5}", "{1, 2, 4, 5}", "{1, 2, 3}" ], a: 1,  s: "The union contains every element belonging to A or B or both. Thus A ∪ B = {1, 2, 3, 4, 5}."}, 

    { q: "If A = {2, 4, 6, 8} and B = {1, 2, 3, 4}, then A ∩ B is:",  o: [ "{1, 2, 3, 4, 6, 8}", "{2, 4}", "{6, 8}", "∅" ], a: 1 , s: "The intersection contains only elements common to both sets. The common elements are 2 and 4. Hence A ∩ B = {2, 4}." },

    { q: "If A = {1, 2, 3, 4, 5} and B = {2, 4, 6}, then A - B is:", o: [ "{2, 4}", "{1, 3, 5}", "{1, 2, 3, 4, 5, 6}", "{6}" ], a: 1,  s: "A - B contains elements belonging to A but not to B. Removing the common elements 2 and 4 from A gives {1, 3, 5}."},

   { q: "If A and B are disjoint sets, then:",  o: [ "A ∪ B = ∅", "A ∩ B = ∅", "A = B", "A - B = ∅" ], a: 1,  s: "Disjoint sets have no common  elements. By definition, A ∩ B = ∅." },

   { q: "For any two sets A and B, which identity is correct?", o: [ "A - B = B - A", "A - B = A ∩ B", "A - B = A ∩ B'", "A - B = A ∪ B" ], a: 2,
s: "A - B contains elements belonging to A but not to B. These are precisely the elements belonging to A and the complement of B. Therefore, A - B = A ∩ B'."},
    
   { q: "If A = {1, 2, 3, 4} and B = {3, 4, 5}, then B - A is:", o: [ "{1, 2}", "{3, 4}", "{5}", "{1, 2, 5}" ], a: 2, s: "B - A contains elements of B that are not in A. Since 3 and 4 belong to both sets, only 5 remains." },

   { q: "If U = {1, 2, 3, 4, 5, 6} and A = {1, 3, 5}, then A' is:", o: [ "{1, 3, 5}", "{2, 4, 6}", "{1, 2, 3}",  "∅" ], a: 1, s: "The complement is the set of elements in U that do not belong to A. Hence A' = U - A = {2, 4, 6}."},

]
},

  {
    title: "Chapter 1 : Sets - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: "SECTION 04: 10 MCQs on Sets ",
    questions: [

   { q: "For any set A, A ∩ A' is equal to:",  o: [ "A", "U", "∅", "A'" ], a: 2, s: "A and its complement have no common elements. Therefore, A ∩ A' = ∅. This is called the complement law." }, 

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
    desc: "SECTION 05: 10 MCQs on Sets ",
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



// Class 11 NCERT Mathematics – Relations and Functions 50 MCQs

{
    title: "Chapter 2 : Relations and Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01 : 10 MCQs on Relations & Functions ",
    questions: [

  {
    q : "If (x/3 + 1, y − 2/3) = (5/3, 1/3), then the values of x and y are:",
    o : ["x = 2, y = 1", "x = 1, y = 2", "x = 2, y = 2", "x = 3, y = 1"],
    a : 0,
    s : "Equating corresponding components: x/3 + 1 = 5/3 ⇒ x/3 = 2/3 ⇒ x = 2, and y − 2/3 = 1/3 ⇒ y = 1."
  },
  {
    q : "If (2a + b, 11) = (1, a − 3b), then the values of a and b are:",
    o : ["a = 2, b = −3", "a = −2, b = 3", "a = 3, b = −2", "a = −3, b = 2"],
    a : 0,
    s : "Solving 2a + b = 1 and a − 3b = 11: multiply the first by 3 to get 6a + 3b = 3. Adding gives 7a = 14 ⇒ a = 2, and b = 1 − 4 = −3."
  },
  {
    q : "If the set A has 3 elements and the set B = {3, 4, 5}, then the number of elements in (A × B) is:",
    o : ["3", "6", "9", "27"],
    a : 2,
    s : "Since |A| = 3 and |B| = 3, |A × B| = |A| × |B| = 3 × 3 = 9."
  },
  {
    q : "If G = {7, 8} and H = {5, 4, 2}, then H × G is:",
    o : ["{(5,7), (5,8), (4,7), (4,8), (2,7), (2,8)}", "{(7,5), (7,4), (7,2), (8,5), (8,4), (8,2)}", "{(5,7), (4,8), (2,7)}", "{(7,5), (8,4), (8,2)}"],
    a : 0,
    s : "H × G consists of all ordered pairs (h, g) with h ∈ H and g ∈ G, which gives {(5,7), (5,8), (4,7), (4,8), (2,7), (2,8)}."
  },
  {
    q : "If A = {−1, 1}, then the number of elements in A × A × A is:",
    o : ["2", "4", "6", "8"],
    a : 3,
    s : "|A × A × A| = |A|³ = 2³ = 8 ordered triplets."
  },
  {
    q : "If A × B = {(a, x), (a, y), (b, x), (b, y)}, then set A is:",
    o : ["{x, y}", "{a, b}", "{a, x}", "{b, y}"],
    a : 1,
    s : "Set A is the set of all first components of the ordered pairs in A × B, so A = {a, b}."
  },
  {
    q : "Let A = {1, 2}, B = {1, 2, 3, 4}, C = {5, 6}. Which of the following is true?",
    o : ["A × C is a subset of B × C", "B × C is a subset of A × C", "A × C = B × C", "(A × C) ∩ (B × C) = ∅"],
    a : 0,
    s : "Since A ⊆ B, every ordered pair in A × C is also present in B × C, meaning A × C ⊆ B × C."
  },
  {
    q : "If A = {1, 2} and B = {3, 4}, how many subsets will A × B have?",
    o : ["4", "8", "16", "32"],
    a : 2,
    s : "|A × B| = 2 × 2 = 4. Therefore, the number of subsets of A × B is 2⁴ = 16."
  },
  {
    q : "Let A and B be two sets such that n(A) = 3 and n(B) = 2. If (x, 1), (y, 2), (z, 1) are in A × B where x, y, z are distinct, then set A is:",
    o : ["{1, 2}", "{x, y, z}", "{x, y}", "{y, z}"],
    a : 1,
    s : "The distinct first coordinates x, y, z belong to A, and since n(A) = 3, A = {x, y, z}."
  },
  {
    q : "The Cartesian product A × A has 9 elements among which are found (−1, 0) and (0, 1). The set A is:",
    o : ["{−1, 0}", "{0, 1}", "{−1, 0, 1}", "{−1, 1}"],
    a : 2,
    s : "Since n(A × A) = 9, n(A) = 3. The elements −1, 0, and 1 appear as components, so A = {−1, 0, 1}."
  },

]
},
 
{
    title: "Chapter 2 : Relations and Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02 : 10 MCQs on Relations & Functions ",
    questions: [

 {
    q : "If A = {1, 2, 3}, B = {3, 4}, and C = {4, 5, 6}, then (A × B) ∩ (B × C) is:",
    o : ["{(3, 4)}", "{(3, 3), (4, 4)}", "{(4, 3)}", "∅"],
    a : 0,
    s : "A × B = {(1,3),(1,4),(2,3),(2,4),(3,3),(3,4)} and B × C = {(3,4),(3,5),(3,6),(4,4),(4,5),(4,6)}. Their common element is {(3, 4)}."
  },
  {
    q : "For any three sets A, B, and C, A × (B ∪ C) is equal to:",
    o : ["(A × B) ∩ (A × C)", "(A × B) ∪ (A × C)", "(A ∪ B) × (A ∪ C)", "(A ∩ B) × C"],
    a : 1,
    s : "Cartesian product distributes over union: A × (B ∪ C) = (A × B) ∪ (A × C)."
  },
  {
    q : "For any three sets A, B, and C, A × (B − C) is equal to:",
    o : ["(A × B) − (A × C)", "(A × B) ∪ (A × C)", "(A − B) × C", "A × (C − B)"],
    a : 0,
    s : "Cartesian product distributes over set difference: A × (B − C) = (A × B) − (A × C)."
  },
  {
    q : "Let A = {1, 2, ..., 14}. Define a relation R from A to A by R = {(x, y) : 3x − y = 0, where x, y ∈ A}. The range of R is:",
    o : ["{1, 2, 3, 4}", "{3, 6, 9, 12}", "{3, 6, 9, 12, 15}", "{1, 2, ..., 14}"],
    a : 1,
    s : "3x − y = 0 ⇒ y = 3x. For x ∈ A, valid pairs in A × A are (1,3), (2,6), (3,9), (4,12). Thus, range = {3, 6, 9, 12}."
  },
  {
    q : "Define a relation R on the set N of natural numbers by R = {(x, y) : y = x + 5, x is a natural number less than 4}. The domain of R is:",
    o : ["{1, 2, 3, 4}", "{1, 2, 3}", "{6, 7, 8}", "{6, 7, 8, 9}"],
    a : 1,
    s : "Natural numbers less than 4 are 1, 2, and 3, giving pairs (1,6), (2,7), (3,8). Hence the domain is {1, 2, 3}."
  },
  {
    q : "Let A = {1, 2, 3, 5} and B = {4, 6, 9}. Define a relation R from A to B by R = {(x, y) : the difference between x and y is odd; x ∈ A, y ∈ B}. How many elements are in R?",
    o : ["5", "6", "7", "8"],
    a : 2,
    s : "The pairs with odd |x − y| are (1,4), (1,6), (2,9), (3,4), (3,6), (5,4), (5,6), which is 7 elements."
  },
  {
    q : "Let R be the relation on Z defined by R = {(a, b) : a, b ∈ Z, a − b is an integer}. The domain and range of R are:",
    o : ["Domain = N, Range = Z", "Domain = Z, Range = Z", "Domain = Z, Range = N", "Domain = {0}, Range = Z"],
    a : 1,
    s : "Since the difference of any two integers is always an integer, R = Z × Z. Thus both domain and range equal Z."
  },
  {
    q : "Determine the range of the relation R defined by R = {(x, x + 5) : x ∈ {0, 1, 2, 3, 4, 5}}:",
    o : ["{0, 1, 2, 3, 4, 5}", "{5, 6, 7, 8, 9, 10}", "{1, 2, 3, 4, 5}", "{5, 6, 7, 8, 9}"],
    a : 1,
    s : "Adding 5 to each x in {0, 1, 2, 3, 4, 5} yields the second components {5, 6, 7, 8, 9, 10}."
  },
  {
    q : "Write the relation R = {(x, x³) : x is a prime number less than 10} in roster form:",
    o : ["{(2, 8), (3, 27), (5, 125), (7, 343)}", "{(1, 1), (2, 8), (3, 27), (5, 125), (7, 343)}", "{(2, 4), (3, 9), (5, 25), (7, 49)}", "{(3, 27), (5, 125), (7, 343)}"],
    a : 0,
    s : "Prime numbers less than 10 are 2, 3, 5, and 7. Cubing each gives {(2, 8), (3, 27), (5, 125), (7, 343)}."
  },
  {
    q : "Let A = {x, y, z} and B = {1, 2}. Find the total number of relations from A to B:",
    o : ["6", "8", "32", "64"],
    a : 3,
    s : "|A × B| = 3 × 2 = 6. The number of subsets (relations) of A × B is 2⁶ = 64."
  },
 

]
},

{
    title: "Chapter 2 : Relations and Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03 : 10 MCQs on Relations & Functions ",
    questions: [
 {
    q : "If R = {(x, y) : x, y ∈ Z, x² + y² ≤ 4} is a relation on Z, then the domain of R is:",
    o : ["{0, 1, 2}", "{−2, −1, 0, 1, 2}", "{−1, 0, 1}", "{−2, 0, 2}"],
    a : 1,
    s : "For integers x, x² ≤ 4 holds only when x ∈ {−2, −1, 0, 1, 2} (with y = 0 satisfying y² ≤ 4 − x²)."
  },
  {
    q : "If R = {(x, y) : x, y ∈ W, 2x + y = 8}, then the range of R is:",
    o : ["{0, 1, 2, 3, 4}", "{0, 2, 4, 6, 8}", "{2, 4, 6, 8}", "{1, 2, 3, 4}"],
    a : 1,
    s : "For whole numbers x, y = 8 − 2x ≥ 0 gives x = 0, 1, 2, 3, 4 and corresponding y values 8, 6, 4, 2, 0."
  },
  {
    q : "Which of the following relations is a function?",
    o : ["{(2, 1), (5, 1), (8, 1), (11, 1), (14, 1), (17, 1)}", "{(2, 1), (4, 2), (6, 3), (4, 4)}", "{(1, 3), (1, 5), (2, 5)}", "{(3, 1), (3, 2), (3, 3)}"],
    a : 0,
    s : "In {(2, 1), (5, 1), (8, 1), (11, 1), (14, 1), (17, 1)}, every first element is unique and maps to exactly one image."
  },
  {
    q : "Let N be the set of natural numbers and the relation R be defined on N such that R = {(x, y) : y = 2x, x, y ∈ N}. Is R a function?",
    o : ["Yes, with domain N and range 2N", "No, because 1 has no preimage", "Yes, with domain 2N and range N", "No, because some elements have two images"],
    a : 0,
    s : "Every natural number x has a unique image y = 2x in N, so R is a function with domain N and range equal to the set of even natural numbers (2N)."
  },
  {
    q : "Find the domain of the real function f(x) = −|x|:",
    o : ["(−∞, 0]", "[0, ∞)", "R", "R \ {0}"],
    a : 2,
    s : "The modulus function |x| is defined for every real number x, so the domain of f(x) = −|x| is R."
  },
  {
    q : "Find the range of the real function f(x) = −|x|:",
    o : ["R", "[0, ∞)", "(−∞, 0]", "(−∞, 0)"],
    a : 2,
    s : "Since |x| ≥ 0 for all x ∈ R, −|x| ≤ 0. Thus the range is (−∞, 0]."
  },
  {
    q : "Find the range of the real function f(x) = √(9 − x²):",
    o : ["[−3, 3]", "[0, 3]", "(0, 3)", "[0, 9]"],
    a : 1,
    s : "Domain is [−3, 3]. For x in [−3, 3], 0 ≤ 9 − x² ≤ 9, so 0 ≤ √(9 − x²) ≤ 3. The range is [0, 3]."
  },
  {
    q : "A function f is defined by f(x) = 2x − 5. What is the value of f(−3)?",
    o : ["−11", "−1", "1", "11"],
    a : 0,
    s : "Substituting x = −3 gives f(−3) = 2(−3) − 5 = −6 − 5 = −11."
  },
  {
    q : "The function t which maps temperature in degree Celsius into temperature in degree Fahrenheit is defined by t(C) = 9C/5 + 32. Find the value of C when t(C) = 212:",
    o : ["90", "100", "110", "120"],
    a : 1,
    s : "9C/5 + 32 = 212 ⇒ 9C/5 = 180 ⇒ C = 180 × 5 / 9 = 100."
  },
  {
    q : "Find the range of the function f(x) = 2 − 3x, x ∈ R, x > 0:",
    o : ["(−∞, 2)", "(−∞, 2]", "(2, ∞)", "[2, ∞)"],
    a : 0,
    s : "Since x > 0, −3x < 0 ⇒ 2 − 3x < 2. Hence the range is (−∞, 2)."
  },
  
]
},


{
    title: "Chapter 2 : Relations and Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04 : 10 MCQs on Relations & Functions ",
    questions: [

{
    q : "Find the range of the function f(x) = x² + 2, where x is a real number:",
    o : ["R", "[0, ∞)", "[2, ∞)", "(2, ∞)"],
    a : 2,
    s : "Since x² ≥ 0 for all x ∈ R, x² + 2 ≥ 2. Thus the range is [2, ∞)."
  },
  {
    q : "Let f = {(1, 1), (2, 3), (0, −1), (−1, −3)} be a linear function from Z into Z. Find f(x):",
    o : ["f(x) = 2x − 1", "f(x) = 2x + 1", "f(x) = x − 1", "f(x) = 3x − 1"],
    a : 0,
    s : "Let f(x) = mx + c. Since f(0) = −1, c = −1. Since f(1) = 1, m(1) − 1 = 1 ⇒ m = 2. Thus f(x) = 2x − 1."
  },
  {
    q : "Find the domain of the function f(x) = (x² + 2x + 1) / (x² − 8x + 12):",
    o : ["R \ {2, 6}", "R \ {−2, −6}", "R \ {−1}", "R"],
    a : 0,
    s : "Denominator x² − 8x + 12 = (x − 2)(x − 6) = 0 at x = 2 and x = 6. Excluding these gives R \ {2, 6}."
  },
  {
    q : "Find the domain of the real function f(x) = √(x − 1):",
    o : ["(1, ∞)", "[1, ∞)", "(−∞, 1]", "R"],
    a : 1,
    s : "For √(x − 1) to be real, x − 1 ≥ 0 ⇒ x ≥ 1, so the domain is [1, ∞)."
  },
  {
    q : "Find the range of the real function f(x) = |x − 1|:",
    o : ["R", "[0, ∞)", "[1, ∞)", "(−∞, 0]"],
    a : 1,
    s : "The absolute value |x − 1| is always non-negative and takes every value ≥ 0, so the range is [0, ∞)."
  },
  {
    q : "Let f = {(x, x²/(1 + x²)) : x ∈ R} be a function from R into R. Determine the range of f:",
    o : ["[0, 1]", "[0, 1)", "(0, 1)", "R"],
    a : 1,
    s : "Since 0 ≤ x² < 1 + x² for all x ∈ R, 0 ≤ x²/(1 + x²) < 1. Thus the range is [0, 1)."
  },
  {
    q : "Let f(x) = x² and g(x) = 2x + 1 be two real functions. Find (f + g)(x):",
    o : ["x² + 2x + 1", "x² − 2x − 1", "2x³ + x²", "x² + 2x"],
    a : 0,
    s : "(f + g)(x) = f(x) + g(x) = x² + 2x + 1."
  },
  {
    q : "Let f(x) = √x and g(x) = x be two functions defined over the set of non-negative real numbers. Find (fg)(x):",
    o : ["x^(3/2)", "x^(1/2)", "x²", "x^(−1/2)"],
    a : 0,
    s : "(fg)(x) = f(x)g(x) = √x · x = x^(1/2 + 1) = x^(3/2) for x ≥ 0."
  },
  {
    q : "Let f(x) = √x and g(x) = x be defined over non-negative real numbers. Find (f/g)(x) for x > 0:",
    o : ["√x", "1/√x", "x", "1/x"],
    a : 1,
    s : "(f/g)(x) = √x / x = 1/√x for x > 0."
  },
  {
    q : "If f(x) = x², find [f(1.1) − f(1)] / (1.1 − 1):",
    o : ["2.1", "2.0", "1.1", "0.21"],
    a : 0,
    s : "[f(1.1) − f(1)] / (1.1 − 1) = (1.21 − 1) / 0.1 = 0.21 / 0.1 = 2.1."
  },
  
]
},


{
    title: "Chapter 2 : Relations and Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Relations & Functions ",
    questions: [
{
    q : "Find the domain of the function f(x) = (x² + 3x + 5) / (x² − 5x + 4):",
    o : ["R \ {1, 4}", "R \ {−1, −4}", "R \ {1, 5}", "R"],
    a : 0,
    s : "Factoring the denominator gives x² − 5x + 4 = (x − 1)(x − 4). Setting it ≠ 0 gives domain R \ {1, 4}."
  },
  {
    q : "The relation f is defined by f(x) = x² for 0 ≤ x ≤ 3 and f(x) = 3x for 3 ≤ x ≤ 10. What is f(3)?",
    o : ["3", "6", "9", "Not defined"],
    a : 2,
    s : "At x = 3, both pieces give 3² = 9 and 3(3) = 9, so f(3) = 9 and f is well-defined."
  },
  {
    q : "The relation g is defined by g(x) = x² for 0 ≤ x ≤ 2 and g(x) = 3x for 2 ≤ x ≤ 10. Why is g NOT a function?",
    o : ["g(0) is not defined", "g(2) takes two different values (4 and 6)", "g is not defined for x > 2", "The domain is infinite"],
    a : 1,
    s : "At x = 2, the first rule gives 2² = 4 while the second gives 3(2) = 6. Since 2 has two distinct images, g is not a function."
  },
  {
    q : "Find the domain and range of the real function f(x) = 1 / (1 − x²):",
    o : ["Domain: R \ {−1, 1}, Range: (−∞, 0) ∪ [1, ∞)", "Domain: R \ {1}, Range: R \ {0}", "Domain: (−1, 1), Range: [1, ∞)", "Domain: R \ {−1, 1}, Range: R \ {0}"],
    a : 0,
    s : "1 − x² ≠ 0 ⇒ x ≠ ±1. Writing y = 1/(1 − x²) gives x² = (y − 1)/y ≥ 0, which holds for y < 0 or y ≥ 1."
  },
  {
    q : "Find the domain of the real function f(x) = |x − 3|:",
    o : ["[3, ∞)", "R \ {3}", "R", "(−3, 3)"],
    a : 2,
    s : "|x − 3| is defined for every real number x, so its domain is R."
  },
  {
    q : "Let A = {9, 10, 11, 12, 13} and let f : A → N be defined by f(n) = the highest prime factor of n. Find the range of f:",
    o : ["{2, 3, 5, 11, 13}", "{3, 5, 11, 13}", "{3, 5, 7, 11, 13}", "{9, 10, 11, 12, 13}"],
    a : 1,
    s : "Highest prime factors: f(9) = 3, f(10) = 5, f(11) = 11, f(12) = 3, f(13) = 13. Thus the range is {3, 5, 11, 13}."
  },
  {
    q : "Which of the following represents a constant function f : R → R?",
    o : ["f(x) = x", "f(x) = c (where c is a fixed real number)", "f(x) = |x|", "f(x) = [x]"],
    a : 1,
    s : "A constant function assigns the same fixed real constant c to every element x in its domain R."
  },
  {
    q : "What is the value of [3.99] + [−3.99], where [·] denotes the greatest integer function?",
    o : ["0", "−1", "1", "−7"],
    a : 1,
    s : "[3.99] = 3 and [−3.99] = −4. Their sum is 3 + (−4) = −1."
  },
  {
    q : "If f(x) = (x − 1) / (x + 1) for x ≠ −1, then f(1/x) (for x ≠ 0, −1) is equal to:",
    o : ["f(x)", "−f(x)", "1/f(x)", "−1/f(x)"],
    a : 1,
    s : "f(1/x) = (1/x − 1) / (1/x + 1) = (1 − x) / (1 + x) = −(x − 1)/(x + 1) = −f(x)."
  },
  {
    q : "Let R = {(1, 3), (4, 2), (2, 4), (2, 3), (3, 1)} be a relation on the set A = {1, 2, 3, 4}. The relation R is:",
    o : ["A function", "Not a function", "An identity relation", "A universal relation"],
    a : 1,
    s : "The element 2 ∈ A is related to two different elements (4 and 3), so R is not a function."
  },
]
},



{
    title: "Chapter 3 : Trigonometric Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Trigonometric Functions ",
    questions: [

{
    q : "The radian measure corresponding to 240° is:",
    o : ["2π/3", "3π/4", "4π/3", "5π/3"],
    a : 2,
    s : "To convert degrees to radians, multiply by π/180°. Thus, 240° × (π/180°) = 4π/3 radians."
  },
  {
    q : "The degree measure corresponding to 5π/3 radians is:",
    o : ["150°", "240°", "300°", "330°"],
    a : 2,
    s : "Multiply by 180°/π: (5π/3) × (180°/π) = 5 × 60° = 300°."
  },
  {
    q : "What is the radian measure of −47°30′?",
    o : ["−19π/72", "−19π/36", "−17π/72", "−15π/36"],
    a : 0,
    s : "47°30′ = 47.5° = (95/2)°. Multiplying by π/180° gives −(95/2) × (π/180) = −19π/72 radians."
  },
  {
    q : "A wheel makes 360 revolutions in one minute. Through how many radians does it turn in one second?",
    o : ["6π", "12π", "18π", "24π"],
    a : 1,
    s : "Revolutions in 1 second = 360 / 60 = 6. One revolution equals 2π radians, so 6 revolutions = 6 × 2π = 12π radians."
  },
  {
    q : "Find the length of an arc of a circle of radius 5 cm subtending a central angle of 15°.",
    o : ["5π/12 cm", "π/12 cm", "5π/6 cm", "π/6 cm"],
    a : 0,
    s : "θ = 15° = 15 × (π/180) = π/12 radians. Using l = rθ, l = 5 × (π/12) = 5π/12 cm."
  },
  {
    q : "If the arcs of the same lengths in two circles subtend angles 65° and 110° at the centre, the ratio of their radii is:",
    o : ["13 : 22", "22 : 13", "11 : 13", "13 : 11"],
    a : 1,
    s : "Since l = r₁θ₁ = r₂θ₂, r₁/r₂ = θ₂/θ₁ = 110°/65° = 22/13."
  },
  {
    q : "The angle in radians through which a pendulum swings if its length is 75 cm and the tip describes an arc of length 15 cm is:",
    o : ["1/3", "1/4", "1/5", "2/5"],
    a : 2,
    s : "Using θ = l/r, we get θ = 15 / 75 = 1/5 radians."
  },
  {
    q : "If cos x = −3/5 and x lies in the third quadrant, what is the value of sin x?",
    o : ["4/5", "−4/5", "3/4", "−3/4"],
    a : 1,
    s : "sin²x = 1 − cos²x = 1 − 9/25 = 16/25. Since x is in the third quadrant, sin x is negative, so sin x = −4/5."
  },
  {
    q : "If cot x = 3/4 and x lies in the third quadrant, then the value of sec x is:",
    o : ["5/3", "−5/3", "5/4", "−5/4"],
    a : 1,
    s : "cot x = 3/4 implies tan x = 4/3. sec²x = 1 + tan²x = 1 + 16/9 = 25/9. In the third quadrant sec x is negative, so sec x = −5/3."
  },
  {
    q : "If sin x = 3/5 and x lies in the second quadrant, what is the value of tan x?",
    o : ["3/4", "−3/4", "4/3", "−4/3"],
    a : 1,
    s : "cos²x = 1 − 9/25 = 16/25. In quadrant II, cos x = −4/5. Hence tan x = sin x / cos x = (3/5) / (−4/5) = −3/4."
  },

]
},

{
    title: "Chapter 3 : Trigonometric Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Trigonometric Functions ",
    questions: [


  {
    q : "Which of the following trigonometric functions are positive in the fourth quadrant?",
    o : ["sin x and cosec x", "tan x and cot x", "cos x and sec x", "sin x and cos x"],
    a : 2,
    s : "By the ASTC rule, only cosine and its reciprocal secant are positive in the fourth quadrant."
  },
  {
    q : "The value of sin(765°) is:",
    o : ["1/2", "1/√2", "√3/2", "1"],
    a : 1,
    s : "765° = 2 × 360° + 45°. Since sine has period 360°, sin(765°) = sin(45°) = 1/√2."
  },
  {
    q : "The value of cosec(−1410°) is:",
    o : ["1", "2", "−2", "√2"],
    a : 1,
    s : "cosec(−1410°) = −cosec(1410°) = −cosec(4 × 360° − 30°) = −(−cosec 30°) = 2."
  },
  {
    q : "The value of tan(19π/3) is:",
    o : ["1/√3", "√3", "−√3", "−1/√3"],
    a : 1,
    s : "19π/3 = 6π + π/3. Since tan has period π, tan(6π + π/3) = tan(π/3) = √3."
  },
  {
    q : "The value of sin(−11π/3) is:",
    o : ["√3/2", "−√3/2", "1/2", "−1/2"],
    a : 0,
    s : "sin(−11π/3) = −sin(11π/3) = −sin(4π − π/3) = −(−sin(π/3)) = √3/2."
  },
  {
    q : "The value of cot(−15π/4) is:",
    o : ["−1", "1", "√3", "0"],
    a : 1,
    s : "cot(−15π/4) = −cot(15π/4) = −cot(4π − π/4) = −(−cot(π/4)) = 1."
  },
  {
    q : "The domain of the function f(x) = sec x is:",
    o : ["R", "R \\ {nπ : n ∈ Z}", "R \\ {(2n + 1)π/2 : n ∈ Z}", "[−1, 1]"],
    a : 2,
    s : "sec x = 1/cos x is undefined where cos x = 0, which occurs at odd multiples of π/2, i.e., (2n + 1)π/2 for n ∈ Z."
  },
  {
    q : "The range of the function f(x) = cosec x is:",
    o : ["R", "[−1, 1]", "R \\ (−1, 1)", "R \\ [−1, 1]"],
    a : 2,
    s : "Since −1 ≤ sin x ≤ 1 and sin x ≠ 0, cosec x = 1/sin x takes all real values except those in (−1, 1)."
  },
  {
    q : "The range of the function f(x) = cot x is:",
    o : ["[−1, 1]", "R \\ {0}", "R", "(0, ∞)"],
    a : 2,
    s : "As x varies over R \\ {nπ : n ∈ Z}, cot x takes every real value from −∞ to +∞."
  },
  {
    q : "cos(π/2 + x) is equal to:",
    o : ["sin x", "−sin x", "cos x", "−cos x"],
    a : 1,
    s : "In the second quadrant, cosine is negative and co-function changes cos to sin, so cos(π/2 + x) = −sin x."
  },

]
},

{
    title: "Chapter 3 : Trigonometric Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Trigonometric Functions ",
    questions: [


  {
    q : "tan(π − x) is equal to:",
    o : ["tan x", "−tan x", "cot x", "−cot x"],
    a : 1,
    s : "π − x lies in the second quadrant where tangent is negative, so tan(π − x) = −tan x."
  },
  {
    q : "The value of sin²(π/6) + cos²(π/3) − tan²(π/4) is:",
    o : ["−1/2", "1/2", "0", "1"],
    a : 0,
    s : "sin(π/6) = 1/2, cos(π/3) = 1/2, tan(π/4) = 1. Thus (1/2)² + (1/2)² − 1² = 1/4 + 1/4 − 1 = −1/2."
  },
  {
    q : "The value of 2sin²(π/6) + cosec²(7π/6)cos²(π/3) is:",
    o : ["1/2", "3/2", "1", "5/2"],
    a : 1,
    s : "sin(π/6) = 1/2, cosec(7π/6) = cosec(π + π/6) = −2, cos(π/3) = 1/2. Expression = 2(1/4) + (−2)²(1/4) = 1/2 + 1 = 3/2."
  },
  {
    q : "The value of sin(75°) is:",
    o : ["(√3 − 1)/(2√2)", "(√3 + 1)/(2√2)", "(√3 + 1)/2", "(√3 − 1)/2"],
    a : 1,
    s : "sin(75°) = sin(45° + 30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2)."
  },
  {
    q : "The value of tan(15°) is:",
    o : ["2 + √3", "2 − √3", "√3 − 1", "√3 + 1"],
    a : 1,
    s : "tan(15°) = tan(45° − 30°) = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = (√3 − 1)²/2 = 2 − √3."
  },
  {
    q : "cos(π/4 − x)cos(π/4 − y) − sin(π/4 − x)sin(π/4 − y) simplifies to:",
    o : ["sin(x + y)", "cos(x + y)", "sin(x − y)", "cos(x − y)"],
    a : 0,
    s : "Using cos A cos B − sin A sin B = cos(A + B), we get cos(π/2 − (x + y)) = sin(x + y)."
  },
  {
    q : "tan(π/4 + x) / tan(π/4 − x) is equal to:",
    o : ["(1 + tan x)/(1 − tan x)", "((1 + tan x)/(1 − tan x))²", "(1 − tan x)/(1 + tan x)", "((1 − tan x)/(1 + tan x))²"],
    a : 1,
    s : "tan(π/4 + x) = (1 + tan x)/(1 − tan x) and tan(π/4 − x) = (1 − tan x)/(1 + tan x). Dividing them gives ((1 + tan x)/(1 − tan x))²."
  },
  {
    q : "sin(n + 1)x sin(n + 2)x + cos(n + 1)x cos(n + 2)x is equal to:",
    o : ["sin x", "cos x", "cos(2n + 3)x", "sin(2n + 3)x"],
    a : 1,
    s : "Using cos A cos B + sin A sin B = cos(A − B), this simplifies to cos((n + 2)x − (n + 1)x) = cos x."
  },
  {
    q : "cos(3π/4 + x) − cos(3π/4 − x) is equal to:",
    o : ["√2 sin x", "−√2 sin x", "√2 cos x", "−√2 cos x"],
    a : 1,
    s : "Using cos(A + B) − cos(A − B) = −2sin A sin B, we get −2sin(3π/4)sin x = −2(1/√2)sin x = −√2 sin x."
  },
  {
    q : "sin²(6x) − sin²(4x) is equal to:",
    o : ["sin 2x sin 10x", "cos 2x cos 10x", "sin 2x cos 10x", "cos 2x sin 10x"],
    a : 0,
    s : "Using sin²A − sin²B = sin(A + B)sin(A − B), we get sin(6x + 4x)sin(6x − 4x) = sin 10x sin 2x."
  },

]
},


{
    title: "Chapter 3 : Trigonometric Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Trigonometric Functions ",
    questions: [

  {
    q : "cos²(2x) − cos²(6x) is equal to:",
    o : ["sin 4x sin 8x", "cos 4x cos 8x", "−sin 4x sin 8x", "sin 4x cos 8x"],
    a : 0,
    s : "cos²(2x) − cos²(6x) = (1 − sin²2x) − (1 − sin²6x) = sin²6x − sin²2x = sin(6x + 2x)sin(6x − 2x) = sin 8x sin 4x."
  },
  {
    q : "(sin 5x + sin 3x) / (cos 5x + cos 3x) is equal to:",
    o : ["tan 4x", "cot 4x", "tan 2x", "tan x"],
    a : 0,
    s : "(2sin 4x cos x) / (2cos 4x cos x) = sin 4x / cos 4x = tan 4x."
  },
  {
    q : "(cos 9x − cos 5x) / (sin 17x − sin 3x) is equal to:",
    o : ["sin 2x / cos 10x", "−sin 2x / cos 10x", "cos 2x / sin 10x", "−cos 2x / sin 10x"],
    a : 1,
    s : "Numerator = −2sin 7x sin 2x. Denominator = 2cos 10x sin 7x. Dividing gives −sin 2x / cos 10x."
  },
  {
    q : "Which of the following is NOT a correct formula for cos 2x?",
    o : ["cos²x − sin²x", "2cos²x − 1", "1 − 2sin²x", "(1 + tan²x)/(1 − tan²x)"],
    a : 3,
    s : "The tangent formula for cos 2x is (1 − tan²x)/(1 + tan²x), not (1 + tan²x)/(1 − tan²x)."
  },
  {
    q : "sin 2x in terms of tan x is:",
    o : ["2tan x / (1 − tan²x)", "2tan x / (1 + tan²x)", "(1 − tan²x) / (1 + tan²x)", "2tan x / (1 + tan x)"],
    a : 1,
    s : "By double-angle identity, sin 2x = 2sin x cos x = 2tan x / sec²x = 2tan x / (1 + tan²x)."
  },
  {
    q : "The identity for sin 3x is:",
    o : ["3sin x + 4sin³x", "3sin x − 4sin³x", "4sin³x − 3sin x", "3cos x − 4cos³x"],
    a : 1,
    s : "By triple-angle formula, sin 3x = 3sin x − 4sin³x."
  },
  {
    q : "The identity for cos 3x is:",
    o : ["3cos x − 4cos³x", "4cos³x − 3cos x", "4cos³x + 3cos x", "3sin x − 4sin³x"],
    a : 1,
    s : "By triple-angle formula, cos 3x = 4cos³x − 3cos x."
  },
  {
    q : "tan 3x is equal to:",
    o : ["(3tan x − tan³x)/(1 − 3tan²x)", "(3tan x + tan³x)/(1 − 3tan²x)", "(3tan x − tan³x)/(1 + 3tan²x)", "(tan³x − 3tan x)/(1 − 3tan²x)"],
    a : 0,
    s : "Expanding tan(2x + x) yields (3tan x − tan³x)/(1 − 3tan²x)."
  },
  {
    q : "cot x cot 2x − cot 2x cot 3x − cot 3x cot x is equal to:",
    o : ["0", "1", "−1", "2"],
    a : 1,
    s : "Write 3x = 2x + x, so cot 3x = (cot 2x cot x − 1)/(cot 2x + cot x). Cross-multiplying and rearranging gives cot x cot 2x − cot 2x cot 3x − cot 3x cot x = 1."
  },
  {
    q : "cos 4x is equal to:",
    o : ["1 − 8sin²x cos²x", "1 + 8sin²x cos²x", "1 − 4sin²x cos²x", "1 − 2sin²x cos²x"],
    a : 0,
    s : "cos 4x = 1 − 2sin²(2x) = 1 − 2(2sin x cos x)² = 1 − 8sin²x cos²x."
  },
  
]
},

{
    title: "Chapter 3 : Trigonometric Functions - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Trigonometric Functions ",
    questions: [
{
    q : "What is the principal solution of tan x = √3?",
    o : ["π/3 and 2π/3", "π/3 and 4π/3", "π/6 and 7π/6", "π/3 and 5π/3"],
    a : 1,
    s : "tan x is positive in the first and third quadrants. In [0, 2π), tan(π/3) = √3 and tan(π + π/3) = tan(4π/3) = √3."
  },
  {
    q : "What is the principal solution of sec x = 2?",
    o : ["π/3 and 2π/3", "π/3 and 5π/3", "π/6 and 11π/6", "π/6 and 5π/6"],
    a : 1,
    s : "sec x = 2 implies cos x = 1/2. Cosine is positive in the first and fourth quadrants, giving x = π/3 and x = 2π − π/3 = 5π/3."
  },
  {
    q : "What is the general solution of sin x = 0?",
    o : ["x = nπ, n ∈ Z", "x = (2n + 1)π/2, n ∈ Z", "x = 2nπ, n ∈ Z", "x = nπ/2, n ∈ Z"],
    a : 0,
    s : "sin x vanishes at all integral multiples of π, so x = nπ where n ∈ Z."
  },
  {
    q : "What is the general solution of cos x = 0?",
    o : ["x = nπ, n ∈ Z", "x = (2n + 1)π/2, n ∈ Z", "x = 2nπ, n ∈ Z", "x = (2n + 1)π, n ∈ Z"],
    a : 1,
    s : "cos x vanishes at all odd multiples of π/2, so x = (2n + 1)π/2 where n ∈ Z."
  },
  {
    q : "The general solution of cos x = 1/2 is:",
    o : ["2nπ ± π/3, n ∈ Z", "nπ ± π/3, n ∈ Z", "2nπ ± π/6, n ∈ Z", "nπ + (−1)^n π/6, n ∈ Z"],
    a : 0,
    s : "cos x = cos(π/3) has the general solution x = 2nπ ± π/3, where n ∈ Z."
  },
  {
    q : "The general solution of sin x = −√3/2 is:",
    o : ["nπ + (−1)^n (4π/3), n ∈ Z", "nπ + (−1)^n (π/3), n ∈ Z", "2nπ ± 4π/3, n ∈ Z", "nπ − π/3, n ∈ Z"],
    a : 0,
    s : "sin x = −√3/2 = sin(4π/3). Using sin x = sin y ⇒ x = nπ + (−1)^n y, we obtain x = nπ + (−1)^n (4π/3), n ∈ Z."
  },
  {
    q : "The general solution of tan 2x = −cot(x + π/3) is:",
    o : ["nπ + 5π/6, n ∈ Z", "nπ/3 + 5π/18, n ∈ Z", "nπ − 5π/6, n ∈ Z", "2nπ + 5π/6, n ∈ Z"],
    a : 0,
    s : "Rewrite −cot(x + π/3) as tan(π/2 + x + π/3) = tan(x + 5π/6). Then 2x = nπ + x + 5π/6, so x = nπ + 5π/6, where n ∈ Z."
  },
  {
    q : "The general solution of sec²(2x) = 1 − tan 2x is:",
    o : ["x = nπ/2 or x = nπ/2 + 3π/8, n ∈ Z", "x = nπ or x = nπ + 3π/4, n ∈ Z", "x = nπ/2 or x = nπ/2 − π/8, n ∈ Z", "x = nπ/2 + π/4, n ∈ Z"],
    a : 0,
    s : "1 + tan²2x = 1 − tan 2x ⇒ tan 2x(tan 2x + 1) = 0. Thus tan 2x = 0 ⇒ 2x = nπ ⇒ x = nπ/2, or tan 2x = −1 = tan(3π/4) ⇒ 2x = nπ + 3π/4 ⇒ x = nπ/2 + 3π/8."
  },
  {
    q : "If tan x = 3/4 and π < x < 3π/2, what is the value of sin(x/2)?",
    o : ["1/√10", "3/√10", "−3/√10", "−1/√10"],
    a : 1,
    s : "x is in quadrant III, so cos x = −4/5 and π/2 < x/2 < 3π/4 (quadrant II, where sin(x/2) > 0). sin(x/2) = √((1 − cos x)/2) = √((1 + 4/5)/2) = √(9/10) = 3/√10."
  },
  {
    q : "What is the value of cos(π/8)?",
    o : ["√(2 + √2)/2", "√(2 − √2)/2", "√(2 + √3)/2", "(√3 + 1)/(2√2)"],
    a : 0,
    s : "Using cos²(π/8) = (1 + cos(π/4))/2 = (1 + 1/√2)/2 = (2 + √2)/4, and taking the positive root since π/8 is in quadrant I, cos(π/8) = √(2 + √2)/2."
  },

]
},


 // Chapter 4  Complex Numbers and Quadratic Equations //

{
    title: "Chapter 4 : Complex Numbers and Quadratic Equations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Complex Numbers and Quadratic Equations ",
    questions: [

{
    q : "The value of i^4 is:",
    o : ["1", "−1", "i", "−i"],
    a : 0,
    s : "Since i^2 = −1, we have i^4 = (i^2)^2 = (−1)^2 = 1."
  },
  {
    q : "The value of i^39 is:",
    o : ["1", "−1", "i", "−i"],
    a : 3,
    s : "Divide 39 by 4: 39 = 4 × 9 + 3. Hence i^39 = (i^4)^9 · i^3 = 1 · (−i) = −i."
  },
  {
    q : "The value of i^(−35) is:",
    o : ["1", "−1", "i", "−i"],
    a : 2,
    s : "i^(−35) = 1 / i^35 = 1 / (i^32 · i^3) = 1 / (−i) = i / (−i^2) = i / 1 = i."
  },
  {
    q : "What is the value of i^9 + i^19?",
    o : ["0", "2i", "−2i", "1"],
    a : 0,
    s : "i^9 = (i^4)^2 · i = i and i^19 = (i^4)^4 · i^3 = −i. Their sum is i + (−i) = 0."
  },
  {
    q : "The sum of four consecutive powers of i, i.e., i^n + i^(n+1) + i^(n+2) + i^(n+3) for any integer n, is:",
    o : ["1", "−1", "0", "i"],
    a : 2,
    s : "Factoring out i^n gives i^n(1 + i + i^2 + i^3) = i^n(1 + i − 1 − i) = 0."
  },
  {
    q : "Express (5i)(−3/5 i) in the form a + ib:",
    o : ["3 + 0i", "−3 + 0i", "0 + 3i", "0 − 3i"],
    a : 0,
    s : "(5i)(−3/5 i) = −3i^2 = −3(−1) = 3 = 3 + 0i."
  },
  {
    q : "Express (1 − i)^4 in the form a + ib:",
    o : ["4 + 0i", "−4 + 0i", "0 + 4i", "0 − 4i"],
    a : 1,
    s : "(1 − i)^2 = 1 − 2i + i^2 = −2i. Squaring again gives (−2i)^2 = 4i^2 = −4 = −4 + 0i."
  },
  {
    q : "Express (1/3 + 3i)^3 in the form a + ib:",
    o : ["−242/27 − 26i", "242/27 + 26i", "−242/27 + 26i", "242/27 − 26i"],
    a : 0,
    s : "(1/3)^3 + 3(1/3)^2(3i) + 3(1/3)(3i)^2 + (3i)^3 = 1/27 + i − 9 − 27i = −242/27 − 26i."
  },
  {
    q : "Express (−2 − 1/3 i)^3 in the form a + ib:",
    o : ["−22/3 − 107/27 i", "22/3 + 107/27 i", "−22/3 + 107/27 i", "22/3 − 107/27 i"],
    a : 0,
    s : "−(2 + i/3)^3 = −[8 + 3(4)(i/3) + 3(2)(i^2/9) + i^3/27] = −[8 + 4i − 2/3 − i/27] = −22/3 − 107/27 i."
  },
  {
    q : "If z = a + ib, then the real part Re(z) and imaginary part Im(z) are respectively:",
    o : ["a and ib", "a and b", "b and a", "ia and b"],
    a : 1,
    s : "For a complex number z = a + ib where a, b ∈ R, Re(z) = a and Im(z) = b (both are real numbers)."
  },

]
},

{
    title: "Chapter 4 : Complex Numbers and Quadratic Equations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Complex Numbers and Quadratic Equations ",
    questions: [

  {
    q : "If 4x + i(3x − y) = 3 + i(−6), where x and y are real numbers, then the values of x and y are:",
    o : ["x = 3/4, y = 33/4", "x = 3/4, y = −33/4", "x = 4/3, y = 33/4", "x = 3/4, y = 15/4"],
    a : 0,
    s : "Equating real and imaginary parts: 4x = 3 ⇒ x = 3/4, and 3x − y = −6 ⇒ 9/4 − y = −6 ⇒ y = 33/4."
  },
  {
    q : "If (x + iy)(2 − 3i) = 4 + i, then the value of x is:",
    o : ["5/13", "14/13", "8/13", "11/13"],
    a : 0,
    s : "x + iy = (4 + i)/(2 − 3i) = (4 + i)(2 + 3i)/(4 + 9) = (8 + 14i − 3)/13 = 5/13 + 14/13 i. Hence x = 5/13."
  },
  {
    q : "The additive inverse of the complex number z = −3 + 5i is:",
    o : ["−3 − 5i", "3 + 5i", "3 − 5i", "5 − 3i"],
    a : 2,
    s : "The additive inverse of z is −z = −(−3 + 5i) = 3 − 5i."
  },
  {
    q : "The multiplicative inverse of 4 − 3i is:",
    o : ["4/25 + 3/25 i", "4/25 − 3/25 i", "−4/25 + 3/25 i", "4/7 + 3/7 i"],
    a : 0,
    s : "z^(−1) = z̄ / |z|^2 = (4 + 3i) / (4^2 + (−3)^2) = (4 + 3i) / 25 = 4/25 + 3/25 i."
  },
  {
    q : "The multiplicative inverse of √5 + 3i is:",
    o : ["√5/14 − 3/14 i", "√5/14 + 3/14 i", "−√5/14 − 3/14 i", "√5/8 − 3/8 i"],
    a : 0,
    s : "z^(−1) = (√5 − 3i) / ((√5)^2 + 3^2) = (√5 − 3i) / (5 + 9) = √5/14 − 3/14 i."
  },
  {
    q : "The multiplicative inverse of −i is:",
    o : ["−i", "i", "1", "−1"],
    a : 1,
    s : "1 / (−i) = i / (−i^2) = i / 1 = i."
  },
  {
    q : "The conjugate of the complex number z = (3 − 2i)(2 + 3i) is:",
    o : ["12 + 5i", "12 − 5i", "−12 + 5i", "5 − 12i"],
    a : 1,
    s : "z = 6 + 9i − 4i − 6i^2 = 12 + 5i. Its conjugate is z̄ = 12 − 5i."
  },
  {
    q : "The conjugate of 1 / (3 + 4i) is:",
    o : ["3/25 + 4/25 i", "3/25 − 4/25 i", "−3/25 + 4/25 i", "3/7 + 4/7 i"],
    a : 0,
    s : "1 / (3 + 4i) = (3 − 4i) / 25 = 3/25 − 4/25 i. Taking its conjugate gives 3/25 + 4/25 i."
  },
  {
    q : "For any complex number z, z · z̄ is equal to:",
    o : ["|z|", "|z|^2", "Re(z)^2 − Im(z)^2", "0"],
    a : 1,
    s : "If z = a + ib, then z · z̄ = (a + ib)(a − ib) = a^2 + b^2 = |z|^2."
  },
  {
    q : "For any two complex numbers z₁ and z₂, which of the following is ALWAYS true?",
    o : ["|z₁ + z₂| = |z₁| + |z₂|", "|z₁ − z₂| = |z₁| − |z₂|", "|z₁ z₂| = |z₁| |z₂|", "Re(z₁ z₂) = Re(z₁) Re(z₂)"],
    a : 2,
    s : "The modulus of a product equals the product of the moduli: |z₁ z₂| = |z₁| |z₂|."
  },

]
},


{
    title: "Chapter 4 : Complex Numbers and Quadratic Equations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Complex Numbers and Quadratic Equations ",
    questions: [

  {
    q : "The modulus of the complex number z = −1 − i√3 is:",
    o : ["1", "2", "√2", "4"],
    a : 1,
    s : "|z| = √((−1)^2 + (−√3)^2) = √(1 + 3) = √4 = 2."
  },
  {
    q : "The modulus of (1 + i)/(1 − i) − (1 − i)/(1 + i) is:",
    o : ["0", "1", "2", "√2"],
    a : 2,
    s : "(1 + i)/(1 − i) = i and (1 − i)/(1 + i) = −i. Thus the expression is i − (−i) = 2i, whose modulus is |2i| = 2."
  },
  {
    q : "If (1 + i)/(1 − i) = x + iy, then (x, y) is:",
    o : ["(0, 1)", "(1, 0)", "(0, −1)", "(−1, 0)"],
    a : 0,
    s : "(1 + i)/(1 − i) = (1 + i)^2 / 2 = 2i / 2 = i = 0 + 1i. Hence (x, y) = (0, 1)."
  },
  {
    q : "If ((1 + i)/(1 − i))^m = 1, then the least positive integral value of m is:",
    o : ["1", "2", "3", "4"],
    a : 3,
    s : "(1 + i)/(1 − i) = i. Since i^m = 1, the smallest positive integer m is 4."
  },
  {
    q : "If x − iy = √((a − ib)/(c − id)), then (x^2 + y^2)^2 is equal to:",
    o : ["(a^2 + b^2)/(c^2 + d^2)", "(a^2 − b^2)/(c^2 − d^2)", "√((a^2 + b^2)/(c^2 + d^2))", "(a + b)/(c + d)"],
    a : 0,
    s : "Taking modulus on both sides: |x − iy| = √(|a − ib|/|c − id|) ⇒ √(x^2 + y^2) = ((a^2 + b^2)/(c^2 + d^2))^(1/4). Raising both sides to power 4 gives (x^2 + y^2)^2 = (a^2 + b^2)/(c^2 + d^2)."
  },
  {
    q : "If (x + iy)^3 = u + iv, then u/x + v/y is equal to:",
    o : ["4(x^2 − y^2)", "4(x^2 + y^2)", "2(x^2 − y^2)", "−4(x^2 − y^2)"],
    a : 0,
    s : "u + iv = (x^3 − 3xy^2) + i(3x^2y − y^3). Thus u/x + v/y = (x^2 − 3y^2) + (3x^2 − y^2) = 4(x^2 − y^2)."
  },
  {
    q : "If α and β are different complex numbers with |β| = 1, then |(β − α)/(1 − ᾱβ)| is:",
    o : ["0", "1/2", "1", "2"],
    a : 2,
    s : "Since |β| = 1, ββ̄ = 1. Thus |(β − α)/(1 − ᾱβ)| = |(β − α)/(ββ̄ − ᾱβ)| = |(β − α)/(β(β̄ − ᾱ))| = |β − α| / (|β| |β − α|) = 1."
  },
  {
    q : "The number of non-zero integral solutions of the equation |1 − i|^x = 2^x is:",
    o : ["0", "1", "2", "Infinitely many"],
    a : 0,
    s : "|1 − i| = √2, so (√2)^x = 2^x ⇒ 2^(x/2) = 2^x ⇒ x/2 = x ⇒ x = 0. Hence there are 0 non-zero integral solutions."
  },
  {
    q : "If a + ib = (x + i)^2 / (2x^2 + 1), then a^2 + b^2 is equal to:",
    o : ["(x^2 + 1)^2 / (2x^2 + 1)^2", "(x^2 − 1)^2 / (2x^2 + 1)^2", "(x^2 + 1) / (2x^2 + 1)", "(x + 1)^2 / (2x^2 + 1)^2"],
    a : 0,
    s : "Taking modulus squared on both sides: a^2 + b^2 = |a + ib|^2 = |x + i|^4 / |2x^2 + 1|^2 = (x^2 + 1)^2 / (2x^2 + 1)^2."
  },
  {
    q : "Let z₁ = 2 − i and z₂ = −2 + i. What is Re(z₁ z₂ / z̄₁)?",
    o : ["−2/5", "2/5", "−11/5", "11/5"],
    a : 0,
    s : "z₁ z₂ = (2 − i)(−2 + i) = −3 + 4i. Dividing by z̄₁ = 2 + i gives (−3 + 4i)(2 − i)/5 = (−2 + 11i)/5. Thus Re = −2/5."
  },

]
},


{
    title: "Chapter 4 : Complex Numbers and Quadratic Equations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Complex Numbers and Quadratic Equations ",
    questions: [

  {
    q : "In the Argand plane, the complex number z = −3 + 4i lies in which quadrant?",
    o : ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
    a : 1,
    s : "z = −3 + 4i corresponds to the point (−3, 4), which has x < 0 and y > 0, so it lies in the second quadrant."
  },
  {
    q : "The distance between the points representing z₁ = 1 + 2i and z₂ = 4 − 2i in the Argand plane is:",
    o : ["3", "4", "5", "√13"],
    a : 2,
    s : "Distance = |z₁ − z₂| = |(1 − 4) + (2 − (−2))i| = |−3 + 4i| = √((−3)^2 + 4^2) = 5."
  },
  {
    q : "The principal argument of the complex number z = −1 − i√3 is:",
    o : ["π/3", "2π/3", "−2π/3", "−π/3"],
    a : 2,
    s : "z lies in the third quadrant with tan α = √3 ⇒ α = π/3. In the third quadrant, the principal argument is θ = −(π − π/3) = −2π/3."
  },
  {
    q : "The principal argument of the complex number z = −√3 + i is:",
    o : ["π/6", "5π/6", "−5π/6", "−π/6"],
    a : 1,
    s : "z lies in the second quadrant with tan α = 1/√3 ⇒ α = π/6. Thus principal argument θ = π − π/6 = 5π/6."
  },
  {
    q : "The polar form of the complex number z = 1 − i is:",
    o : ["√2(cos(π/4) + i sin(π/4))", "√2(cos(−π/4) + i sin(−π/4))", "2(cos(−π/4) + i sin(−π/4))", "√2(cos(3π/4) + i sin(3π/4))"],
    a : 1,
    s : "r = |1 − i| = √2. Since 1 − i is in quadrant IV, θ = −π/4. Thus z = √2(cos(−π/4) + i sin(−π/4))."
  },
  {
    q : "The polar form of the complex number z = −3 is:",
    o : ["3(cos 0 + i sin 0)", "3(cos π + i sin π)", "3(cos(π/2) + i sin(π/2))", "3(cos(−π/2) + i sin(−π/2))"],
    a : 1,
    s : "r = |−3| = 3 and −3 lies on the negative real axis, so θ = π. Hence z = 3(cos π + i sin π)."
  },
  {
    q : "The polar form of the complex number z = i is:",
    o : ["cos 0 + i sin 0", "cos(π/2) + i sin(π/2)", "cos(−π/2) + i sin(−π/2)", "cos π + i sin π"],
    a : 1,
    s : "r = |i| = 1 and i lies on the positive imaginary axis, so θ = π/2. Thus z = cos(π/2) + i sin(π/2)."
  },
  {
    q : "Convert the complex number z = (i − 1) / (cos(π/3) + i sin(π/3)) into polar form:",
    o : ["√2(cos(5π/12) + i sin(5π/12))", "√2(cos(7π/12) + i sin(7π/12))", "2(cos(5π/12) + i sin(5π/12))", "√2(cos(−5π/12) + i sin(−5π/12))"],
    a : 0,
    s : "i − 1 = −1 + i has modulus √2 and argument 3π/4. Denominator has modulus 1 and argument π/3. Quotient has r = √2 and θ = 3π/4 − π/3 = 5π/12."
  },
  {
    q : "The roots of the quadratic equation x^2 + 3 = 0 are:",
    o : ["±3i", "±√3 i", "±3", "±√3"],
    a : 1,
    s : "x^2 = −3 ⇒ x = ±√(−3) = ±√3 i."
  },
  {
    q : "The solutions of the quadratic equation 2x^2 + x + 1 = 0 are:",
    o : ["(−1 ± i√7)/4", "(1 ± i√7)/4", "(−1 ± √7)/4", "(−1 ± i√7)/2"],
    a : 0,
    s : "Discriminant D = 1^2 − 4(2)(1) = −7. Using the quadratic formula, x = (−1 ± √(−7))/(2 × 2) = (−1 ± i√7)/4."
  },

]
},


{
    title: "Chapter 4 : Complex Numbers and Quadratic Equations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Complex Numbers and Quadratic Equations ",
    questions: [

  {
    q : "The solutions of the quadratic equation x^2 + 3x + 9 = 0 are:",
    o : ["(−3 ± 3i√3)/2", "(3 ± 3i√3)/2", "(−3 ± i√3)/2", "(−3 ± 3√3)/2"],
    a : 0,
    s : "D = 9 − 36 = −27. Thus x = (−3 ± √(−27))/2 = (−3 ± 3i√3)/2."
  },
  {
    q : "The solutions of the quadratic equation −x^2 + x − 2 = 0 are:",
    o : ["(1 ± i√7)/2", "(−1 ± i√7)/2", "(1 ± i√7)/(−2)", "(1 ± √7)/2"],
    a : 0,
    s : "Multiply by −1: x^2 − x + 2 = 0. D = 1 − 8 = −7. Hence x = (1 ± i√7)/2."
  },
  {
    q : "The roots of √2 x^2 + x + √2 = 0 are:",
    o : ["(−1 ± i√7)/(2√2)", "(1 ± i√7)/(2√2)", "(−1 ± i√7)/√2", "(−1 ± i√3)/(2√2)"],
    a : 0,
    s : "D = 1^2 − 4(√2)(√2) = 1 − 8 = −7. Therefore x = (−1 ± i√7)/(2√2)."
  },
  {
    q : "The roots of x^2 + x + 1/√2 = 0 are:",
    o : ["(−1 ± i√(2√2 − 1))/2", "(1 ± i√(2√2 − 1))/2", "(−1 ± i√(2√2 + 1))/2", "(−1 ± √(2√2 − 1))/2"],
    a : 0,
    s : "D = 1 − 4(1)(1/√2) = 1 − 2√2 = −(2√2 − 1). Thus x = (−1 ± i√(2√2 − 1))/2."
  },
  {
    q : "The roots of 3x^2 − 4x + 20/3 = 0 are:",
    o : ["2/3 ± 4/3 i", "−2/3 ± 4/3 i", "2/3 ± 2/3 i", "4/3 ± 2/3 i"],
    a : 0,
    s : "Multiply by 3: 9x^2 − 12x + 20 = 0. D = 144 − 720 = −576. Thus x = (12 ± 24i)/18 = 2/3 ± 4/3 i."
  },
  {
    q : "What is the discriminant of the quadratic equation x^2 − 2x + 3/2 = 0?",
    o : ["−2", "2", "−10", "10"],
    a : 0,
    s : "D = b^2 − 4ac = (−2)^2 − 4(1)(3/2) = 4 − 6 = −2."
  },
  {
    q : "Which quadratic equation has roots 3 + 2i and 3 − 2i?",
    o : ["x^2 − 6x + 13 = 0", "x^2 + 6x + 13 = 0", "x^2 − 6x + 5 = 0", "x^2 + 6x − 13 = 0"],
    a : 0,
    s : "Sum of roots = (3 + 2i) + (3 − 2i) = 6; product of roots = (3 + 2i)(3 − 2i) = 9 + 4 = 13. The equation is x^2 − 6x + 13 = 0."
  },
  {
    q : "Simplify: [i^18 + (1/i)^25]^3",
    o : ["2 − 2i", "−2 + 2i", "2 + 2i", "−2 − 2i"],
    a : 0,
    s : "i^18 = (i^4)^4 · i^2 = −1, and (1/i)^25 = 1/i = −i. Then (−1 − i)^3 = −(1 + i)^3 = −(1 + 3i − 3 − i) = −(−2 + 2i) = 2 − 2i."
  },
  {
    q : "If z = (2 + i) / (1 − 3i), then |z| is equal to:",
    o : ["1/√2", "√2", "5/10", "1/2"],
    a : 0,
    s : "|z| = |2 + i| / |1 − 3i| = √(4 + 1) / √(1 + 9) = √5 / √10 = 1/√2."
  },
  {
    q : "If z₁ = 2 + 3i and z₂ = 1 − 4i, then |z₁ + z₂|^2 is:",
    o : ["8", "10", "13", "25"],
    a : 1,
    s : "z₁ + z₂ = (2 + 1) + (3 − 4)i = 3 − i. Therefore |z₁ + z₂|^2 = 3^2 + (−1)^2 = 9 + 1 = 10."
  },

]
},



// Chapter 5 :  – Linear Inequalities // 


{
    title: "Chapter 5 : Linear Inequalities - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Linear Inequalities ",
    questions: [

{
    q : "Which of the following is a strict inequality?",
    o : ["3x + 5 ≤ 10", "2x − 7 ≥ 3", "4x + 1 < 9", "5x − 2 = 8"],
    a : 2,
    s : "An inequality involving < or > is called a strict inequality, whereas ≤ or ≥ defines a slack inequality."
  },
  {
    q : "If a < b and c < 0, then which of the following is true?",
    o : ["ac < bc", "ac > bc", "a/c < b/c", "a − c > b − c"],
    a : 1,
    s : "Multiplying or dividing both sides of an inequality by a negative number reverses the sign of inequality. Hence ac > bc."
  },
  {
    q : "Solve 24x < 100 when x is a natural number:",
    o : ["{1, 2, 3, 4}", "{0, 1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "(−∞, 25/6)"],
    a : 0,
    s : "24x < 100 gives x < 100/24 = 25/6 ≈ 4.16. The natural numbers less than 4.16 are 1, 2, 3, and 4."
  },
  {
    q : "Solve 24x < 100 when x is an integer:",
    o : ["{..., −2, −1, 0, 1, 2, 3, 4}", "{1, 2, 3, 4}", "{..., −1, 0, 1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4}"],
    a : 0,
    s : "Since x < 4.16 and x ∈ Z, the solution set consists of all integers less than or equal to 4: {..., −2, −1, 0, 1, 2, 3, 4}."
  },
  {
    q : "Solve −12x > 30 when x is a natural number:",
    o : ["{1, 2}", "{−3, −4, ...}", "No solution (∅)", "{0, 1, 2}"],
    a : 2,
    s : "Dividing by −12 reverses the inequality: x < −30/12 = −2.5. There is no natural number less than −2.5, so the solution set is empty."
  },
  {
    q : "Solve −12x > 30 when x is an integer:",
    o : ["{..., −4, −3}", "{..., −3, −2}", "{−2, −1, 0, ...}", "{..., −5, −4}"],
    a : 0,
    s : "x < −2.5 and x ∈ Z gives all integers strictly less than −2.5, which is {..., −5, −4, −3}."
  },
  {
    q : "Solve 5x − 3 < 7 when x is an integer:",
    o : ["{..., −1, 0, 1}", "{..., −1, 0, 1, 2}", "{1, 2}", "{0, 1}"],
    a : 0,
    s : "5x < 10 implies x < 2. The integers strictly less than 2 are {..., −2, −1, 0, 1}."
  },
  {
    q : "Solve 5x − 3 < 7 when x is a real number:",
    o : ["(−∞, 2]", "(−∞, 2)", "(2, ∞)", "[2, ∞)"],
    a : 1,
    s : "5x − 3 < 7 ⇒ 5x < 10 ⇒ x < 2. For real x, the solution set is (−∞, 2)."
  },
  {
    q : "Solve 3x + 8 > 2 when x is an integer:",
    o : ["{−2, −1, 0, 1, ...}", "{−1, 0, 1, 2, ...}", "{0, 1, 2, ...}", "{−3, −2, −1, ...}"],
    a : 1,
    s : "3x > −6 ⇒ x > −2. The integers strictly greater than −2 are −1, 0, 1, 2, ..."
  },
  {
    q : "The solution set of 4x + 3 < 5x + 7 for real x is:",
    o : ["(−∞, −4)", "(−4, ∞)", "[−4, ∞)", "(4, ∞)"],
    a : 1,
    s : "Subtracting 4x and 7 from both sides gives −4 < x, i.e., x > −4, which is (−4, ∞)."
  },

]
},

{
    title: "Chapter 5 : Linear Inequalities - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Linear Inequalities ",
    questions: [
  {
    q : "The solution set of 3x − 7 > 5x − 1 for real x is:",
    o : ["(−∞, −3)", "(−∞, −3]", "(−3, ∞)", "(3, ∞)"],
    a : 0,
    s : "3x − 5x > −1 + 7 ⇒ −2x > 6 ⇒ x < −3. Thus the solution set is (−∞, −3)."
  },
  {
    q : "Solve the inequality 3(x − 1) ≤ 2(x − 3) for real x:",
    o : ["(−∞, −3)", "(−∞, −3]", "[−3, ∞)", "(−∞, 3]"],
    a : 1,
    s : "3x − 3 ≤ 2x − 6 ⇒ x ≤ −3. Hence x ∈ (−∞, −3]."
  },
  {
    q : "Solve the inequality 3(2 − x) ≥ 2(1 − x) for real x:",
    o : ["(−∞, 4]", "[4, ∞)", "(−∞, 4)", "(4, ∞)"],
    a : 0,
    s : "6 − 3x ≥ 2 − 2x ⇒ 4 ≥ x, i.e., x ≤ 4. Thus x ∈ (−∞, 4]."
  },
  {
    q : "The solution of x + x/2 + x/3 < 11 for real x is:",
    o : ["(−∞, 6)", "(−∞, 6]", "(6, ∞)", "(−∞, 11/6)"],
    a : 0,
    s : "(6x + 3x + 2x)/6 < 11 ⇒ 11x/6 < 11 ⇒ x < 6. Thus x ∈ (−∞, 6)."
  },
  {
    q : "The solution of x/3 > x/2 + 1 for real x is:",
    o : ["(−∞, −6)", "(−6, ∞)", "(−∞, 6)", "(6, ∞)"],
    a : 0,
    s : "x/3 − x/2 > 1 ⇒ −x/6 > 1 ⇒ x < −6. Hence x ∈ (−∞, −6)."
  },
  {
    q : "Solve 3(x − 2)/5 ≤ 5(2 − x)/3 for real x:",
    o : ["(−∞, 2]", "[2, ∞)", "(−∞, 2)", "(−∞, −2]"],
    a : 0,
    s : "Multiply by 15: 9(x − 2) ≤ 25(2 − x) ⇒ 9x − 18 ≤ 50 − 25x ⇒ 34x ≤ 68 ⇒ x ≤ 2."
  },
  {
    q : "Solve (2x − 1)/3 ≥ (3x − 2)/4 − (2 − x)/5 for real x:",
    o : ["(−∞, 2]", "[2, ∞)", "(−∞, −2]", "[−2, ∞)"],
    a : 0,
    s : "Multiply by 60: 20(2x − 1) ≥ 15(3x − 2) − 12(2 − x) ⇒ 40x − 20 ≥ 45x − 30 − 24 + 12x ⇒ 40x − 20 ≥ 57x − 54 ⇒ 34 ≥ 17x ⇒ x ≤ 2."
  },
  {
    q : "The solution set of 37 − (3x + 5) ≥ 9x − 8(x − 3) is:",
    o : ["(−∞, 2]", "[2, ∞)", "(−∞, 2)", "(−∞, 8]"],
    a : 0,
    s : "37 − 3x − 5 ≥ 9x − 8x + 24 ⇒ 32 − 3x ≥ x + 24 ⇒ 8 ≥ 4x ⇒ x ≤ 2."
  },
  {
    q : "Solve x/4 < (5x − 2)/3 − (7x − 3)/5 for real x:",
    o : ["(4, ∞)", "[4, ∞)", "(−∞, 4)", "(−∞, 4]"],
    a : 0,
    s : "Multiply by 60: 15x < 20(5x − 2) − 12(7x − 3) ⇒ 15x < 100x − 40 − 84x + 36 ⇒ 15x < 16x − 4 ⇒ x > 4."
  },
  {
    q : "If |x| < 5, then x belongs to:",
    o : ["(−5, 5)", "[−5, 5]", "(−∞, −5) ∪ (5, ∞)", "(0, 5)"],
    a : 0,
    s : "For a > 0, |x| < a is equivalent to −a < x < a. Thus −5 < x < 5."
  },

]
},


{
    title: "Chapter 5 : Linear Inequalities - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Linear Inequalities ",
    questions: [
  {
    q : "If |x| ≥ 3, then the solution set is:",
    o : ["[−3, 3]", "(−3, 3)", "(−∞, −3] ∪ [3, ∞)", "(−∞, −3) ∪ (3, ∞)"],
    a : 2,
    s : "For a > 0, |x| ≥ a means x ≤ −a or x ≥ a, so x ∈ (−∞, −3] ∪ [3, ∞)."
  },
  {
    q : "Solve |x − 2| ≤ 4:",
    o : ["[−2, 6]", "(−2, 6)", "[−6, 2]", "[2, 6]"],
    a : 0,
    s : "−4 ≤ x − 2 ≤ 4. Adding 2 throughout gives −2 ≤ x ≤ 6, i.e., [−2, 6]."
  },
  {
    q : "Solve |3x − 2| > 4:",
    o : ["(−2/3, 2)", "(−∞, −2/3) ∪ (2, ∞)", "[−2/3, 2]", "(−∞, −2) ∪ (2/3, ∞)"],
    a : 1,
    s : "3x − 2 < −4 or 3x − 2 > 4 ⇒ 3x < −2 or 3x > 6 ⇒ x < −2/3 or x > 2."
  },
  {
    q : "Solve the double inequality 6 ≤ −3(2x − 4) < 12:",
    o : ["(0, 1]", "[0, 1)", "(0, 1)", "[0, 1]"],
    a : 0,
    s : "Divide by −3 (reversing signs): −2 ≥ 2x − 4 > −4 ⇒ 2 ≥ 2x > 0 ⇒ 1 ≥ x > 0, so x ∈ (0, 1]."
  },
  {
    q : "Solve −12 < 4 − 3x/(−5) ≤ 2:",
    o : ["(−80/3, −10/3]", "[−80/3, −10/3)", "(−80/3, 10/3]", "(10/3, 80/3]"],
    a : 0,
    s : "−12 < 4 + 3x/5 ≤ 2. Subtract 4: −16 < 3x/5 ≤ −2. Multiply by 5/3: −80/3 < x ≤ −10/3."
  },
  {
    q : "Solve 7 ≤ (3x + 11)/2 ≤ 11:",
    o : ["[1, 11/3]", "(1, 11/3)", "[1, 3]", "[−1, 11/3]"],
    a : 0,
    s : "Multiply by 2: 14 ≤ 3x + 11 ≤ 22. Subtract 11: 3 ≤ 3x ≤ 11. Divide by 3: 1 ≤ x ≤ 11/3."
  },
  {
    q : "Find the solution set of the system of inequalities: 3x − 7 < 5 + x and 11 − 5x ≤ 1:",
    o : ["[2, 6)", "(2, 6)", "[2, 6]", "(−∞, 6)"],
    a : 0,
    s : "First inequality: 2x < 12 ⇒ x < 6. Second inequality: −5x ≤ −10 ⇒ x ≥ 2. Common solution is [2, 6)."
  },
  {
    q : "Find the solution set of the system: 5x + 1 > −24 and 5x − 1 < 24:",
    o : ["(−5, 5)", "[−5, 5]", "(−∞, 5)", "(−5, ∞)"],
    a : 0,
    s : "5x > −25 ⇒ x > −5, and 5x < 25 ⇒ x < 5. Intersection is (−5, 5)."
  },
  {
    q : "Find the solution set of the system: 2(x − 1) < x + 5 and 3(x + 2) > 2 − x:",
    o : ["(−1, 7)", "[−1, 7]", "(−1, ∞)", "(−∞, 7)"],
    a : 0,
    s : "2x − 2 < x + 5 ⇒ x < 7. Also 3x + 6 > 2 − x ⇒ 4x > −4 ⇒ x > −1. Combining gives (−1, 7)."
  },
  {
    q : "Find the solution set of: 3x − 6 ≥ 0 and 4x − 10 ≤ 6:",
    o : ["[2, 4]", "(2, 4)", "[2, ∞)", "(−∞, 4]"],
    a : 0,
    s : "3x ≥ 6 ⇒ x ≥ 2, and 4x ≤ 16 ⇒ x ≤ 4. Thus x ∈ [2, 4]."
  },

]
},

{
    title: "Chapter 5 : Linear Inequalities - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Linear Inequalities ",
    questions: [
  {
    q : "Ravi obtained 70 and 75 marks in first two unit tests. Find the minimum marks he should get in the third test to have an average of at least 60 marks:",
    o : ["35", "40", "45", "50"],
    a : 0,
    s : "(70 + 75 + x)/3 ≥ 60 ⇒ 145 + x ≥ 180 ⇒ x ≥ 35. Minimum marks required = 35."
  },
  {
    q : "To receive Grade 'A' in a course, one must obtain an average of 90 marks or more in five examinations (each of 100 marks). If Sunita's marks in first four examinations are 87, 92, 94 and 95, find minimum marks that Sunita must obtain in fifth examination to get grade 'A':",
    o : ["80", "82", "85", "88"],
    a : 1,
    s : "(87 + 92 + 94 + 95 + x)/5 ≥ 90 ⇒ 368 + x ≥ 450 ⇒ x ≥ 82."
  },
  {
    q : "Find all pairs of consecutive odd positive integers both of which are smaller than 10 such that their sum is more than 11:",
    o : ["(5, 7) and (7, 9)", "(3, 5) and (5, 7)", "(7, 9) only", "(5, 7) only"],
    a : 0,
    s : "Let integers be x and x + 2. x + 2 < 10 ⇒ x < 8, and 2x + 2 > 11 ⇒ x > 4.5. Odd integers between 4.5 and 8 are 5 and 7, giving pairs (5, 7) and (7, 9)."
  },
  {
    q : "Find all pairs of consecutive even positive integers, both of which are larger than 5 such that their sum is less than 23:",
    o : ["(6, 8), (8, 10), (10, 12)", "(6, 8), (8, 10)", "(8, 10), (10, 12)", "(4, 6), (6, 8), (8, 10)"],
    a : 0,
    s : "Let integers be x and x + 2. x > 5 and 2x + 2 < 23 ⇒ x < 10.5. Even integers in (5, 10.5) are 6, 8, and 10, giving (6, 8), (8, 10), (10, 12)."
  },
  {
    q : "The longest side of a triangle is 3 times the shortest side and the third side is 2 cm shorter than the longest side. If the perimeter of the triangle is at least 61 cm, find the minimum length of the shortest side:",
    o : ["7 cm", "8 cm", "9 cm", "10 cm"],
    a : 2,
    s : "Sides are x, 3x, and 3x − 2. Perimeter: x + 3x + (3x − 2) ≥ 61 ⇒ 7x − 2 ≥ 61 ⇒ 7x ≥ 63 ⇒ x ≥ 9 cm."
  },
  {
    q : "A man wants to cut three lengths from a single piece of board of length 91 cm. The second length is to be 3 cm longer than the shortest and the third length is to be twice as long as the shortest. What are the possible lengths of the shortest board if the third piece is to be at least 5 cm longer than the second?",
    o : ["8 ≤ x ≤ 22", "5 ≤ x ≤ 22", "8 ≤ x ≤ 25", "x ≥ 8"],
    a : 0,
    s : "Pieces: x, x + 3, 2x. Total length: x + (x + 3) + 2x ≤ 91 ⇒ 4x ≤ 88 ⇒ x ≤ 22. Also 2x ≥ (x + 3) + 5 ⇒ x ≥ 8. Hence 8 ≤ x ≤ 22."
  },
  {
    q : "In drilling world's deepest hole, temperature T in degree Celsius x km below the surface of earth was given by T = 30 + 25(x − 3), 3 < x < 15. At what depth will temperature be between 200°C and 300°C?",
    o : ["Between 9.8 km and 13.8 km", "Between 8.8 km and 12.8 km", "Between 10.2 km and 14.2 km", "Between 7.8 km and 11.8 km"],
    a : 0,
    s : "200 < 30 + 25(x − 3) < 300 ⇒ 170 < 25(x − 3) < 270 ⇒ 6.8 < x − 3 < 10.8 ⇒ 9.8 < x < 13.8 km."
  },
  {
    q : "A solution is to be kept between 68°F and 77°F. What is the range in temperature in degree Celsius (C) if the Celsius/Fahrenheit conversion formula is given by F = (9/5)C + 32?",
    o : ["Between 20°C and 25°C", "Between 15°C and 20°C", "Between 25°C and 30°C", "Between 18°C and 24°C"],
    a : 0,
    s : "68 < (9/5)C + 32 < 77 ⇒ 36 < (9/5)C < 45 ⇒ 20 < C < 25°C."
  },
  {
    q : "IQ of a person is given by the formula IQ = (MA/CA) × 100, where MA is mental age and CA is chronological age. If 80 ≤ IQ ≤ 140 for a group of 12 years old children, find the range of their mental age:",
    o : ["9.6 ≤ MA ≤ 16.8", "8.4 ≤ MA ≤ 15.6", "9.0 ≤ MA ≤ 16.0", "10.0 ≤ MA ≤ 17.2"],
    a : 0,
    s : "80 ≤ (MA/12) × 100 ≤ 140 ⇒ (80 × 12)/100 ≤ MA ≤ (140 × 12)/100 ⇒ 9.6 ≤ MA ≤ 16.8."
  },
  {
    q : "A solution of 8% boric acid is to be diluted by adding a 2% boric acid solution to it. The resulting mixture is to be more than 4% but less than 6% boric acid. If we have 640 litres of the 8% solution, how many litres of the 2% solution will have to be added?",
    o : ["More than 320 litres but less than 1280 litres", "More than 160 litres but less than 640 litres", "More than 320 litres but less than 640 litres", "More than 640 litres but less than 1280 litres"],
    a : 0,
    s : "Let x litres of 2% solution be added. 0.04(640 + x) < 0.08(640) + 0.02x < 0.06(640 + x). Solving left: 25.6 + 0.04x < 51.2 + 0.02x ⇒ 0.02x < 25.6 ⇒ x < 1280. Solving right: 51.2 + 0.02x < 38.4 + 0.06x ⇒ 12.8 < 0.04x ⇒ x > 320."
  },
]
},


{
    title: "Chapter 5 : Linear Inequalities - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Linear Inequalities ",
    questions: [
  {
    q : "How many litres of water will have to be added to 1125 litres of the 45% solution of acid so that the resulting mixture will contain more than 25% but less than 30% acid content?",
    o : ["More than 562.5 litres but less than 900 litres", "More than 450 litres but less than 900 litres", "More than 562.5 litres but less than 1125 litres", "More than 300 litres but less than 600 litres"],
    a : 0,
    s : "Let x litres of water be added. 0.25(1125 + x) < 0.45(1125) < 0.30(1125 + x). Left inequality: 1125 + x < 2025 ⇒ x < 900. Right inequality: 1687.5 < 1125 + x ⇒ x > 562.5."
  },
  {
    q : "The graphical solution of the linear inequality x + y < 5 in the xy-plane is:",
    o : ["Open half-plane containing the origin", "Open half-plane not containing the origin", "Closed half-plane containing the origin", "Closed half-plane not containing the origin"],
    a : 0,
    s : "Since the inequality is strict (<), it represents an open half-plane. Testing (0, 0) gives 0 + 0 < 5, which is true, so it contains the origin."
  },
  {
    q : "The boundary line for the inequality 2x + 3y ≥ 6 is drawn as:",
    o : ["A dotted line", "A solid line", "A vertical line", "A horizontal line"],
    a : 1,
    s : "Because the inequality is slack (≥), points on the boundary line 2x + 3y = 6 satisfy the inequality, so it is drawn as a solid line."
  },
  {
    q : "Which of the following points lies in the solution region of 3x − 2y > 6?",
    o : ["(0, 0)", "(2, 0)", "(3, 1)", "(1, 2)"],
    a : 2,
    s : "Substituting (3, 1) gives 3(3) − 2(1) = 9 − 2 = 7 > 6, which is true. All other points give values ≤ 6."
  },
  {
    q : "The region represented by x ≥ 0, y ≥ 0 is:",
    o : ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
    a : 0,
    s : "Both x and y are non-negative in the first quadrant (including the positive axes and origin)."
  },
  {
    q : "The solution region of the inequality y < −2 lies completely:",
    o : ["Above the line y = −2", "Below the line y = −2", "To the right of x = −2", "To the left of x = −2"],
    a : 1,
    s : "y < −2 consists of all points whose y-coordinate is strictly less than −2, which is the open half-plane below the horizontal line y = −2."
  },
  {
    q : "The inequality x > −3 represents the region:",
    o : ["To the left of x = −3", "To the right of x = −3", "Above y = −3", "Below y = −3"],
    a : 1,
    s : "x > −3 includes all points with x-coordinate greater than −3, lying to the right of the vertical line x = −3."
  },
  {
    q : "If (x − 3)/(x + 1) > 0, then x belongs to:",
    o : ["(−∞, −1) ∪ (3, ∞)", "(−1, 3)", "[−1, 3]", "(−∞, −1] ∪ [3, ∞)"],
    a : 0,
    s : "A fraction is positive when numerator and denominator have the same sign. Both are positive for x > 3, and both are negative for x < −1. Thus x ∈ (−∞, −1) ∪ (3, ∞)."
  },
  {
    q : "Solve |x + 3| ≥ 10:",
    o : ["(−∞, −13] ∪ [7, ∞)", "[−13, 7]", "(−∞, −7] ∪ [13, ∞)", "(−13, 7)"],
    a : 0,
    s : "x + 3 ≤ −10 or x + 3 ≥ 10 ⇒ x ≤ −13 or x ≥ 7. Hence x ∈ (−∞, −13] ∪ [7, ∞)."
  },
  {
    q : "A manufacturer has 600 litres of a 12% solution of acid. How many litres of a 30% acid solution must be added to it so that acid content in the resulting mixture will be more than 15% but less than 18%?",
    o : ["More than 120 litres but less than 300 litres", "More than 150 litres but less than 300 litres", "More than 120 litres but less than 240 litres", "More than 100 litres but less than 250 litres"],
    a : 0,
    s : "0.15(600 + x) < 0.12(600) + 0.30x < 0.18(600 + x). Left: 90 + 0.15x < 72 + 0.30x ⇒ 18 < 0.15x ⇒ x > 120. Right: 72 + 0.30x < 108 + 0.18x ⇒ 0.12x < 36 ⇒ x < 300."
  },

]
},


// Chapter 6 : Permutations and Combinations //

{
    title: "Chapter 6 : Permutations and Combinations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Linear Inequalities ",
    questions: [

{
    q : "If there are 3 routes from city A to city B and 4 routes from city B to city C, the number of ways a person can travel from A to C via B is:",
    o : ["7", "12", "64", "81"],
    a : 1,
    s : "By the Fundamental Principle of Counting (multiplication principle), total ways = 3 × 4 = 12."
  },
  {
    q : "How many 3-digit numbers can be formed from the digits 1, 2, 3, 4 and 5 assuming that repetition of the digits is allowed?",
    o : ["60", "120", "125", "243"],
    a : 2,
    s : "Each of the 3 places (hundreds, tens, units) can be filled in 5 ways. Total numbers = 5 × 5 × 5 = 125."
  },
  {
    q : "How many 3-digit numbers can be formed from the digits 1, 2, 3, 4 and 5 assuming that repetition of the digits is not allowed?",
    o : ["60", "120", "125", "20"],
    a : 0,
    s : "The hundreds place has 5 choices, tens place has 4 choices, and units place has 3 choices. Total numbers = 5 × 4 × 3 = 60."
  },
  {
    q : "How many 3-digit even numbers can be formed from the digits 1, 2, 3, 4, 5, 6 if the digits can be repeated?",
    o : ["108", "120", "216", "72"],
    a : 0,
    s : "For an even number, the units place must be 2, 4, or 6 (3 choices). Hundreds and tens places have 6 choices each. Total = 6 × 6 × 3 = 108."
  },
  {
    q : "How many 4-letter codes can be formed using the first 10 letters of the English alphabet, if no letter can be repeated?",
    o : ["5040", "10000", "210", "720"],
    a : 0,
    s : "Number of 4-letter codes = 10 × 9 × 8 × 7 = 5040."
  },
  {
    q : "How many 5-digit telephone numbers can be constructed using the digits 0 to 9 if each number starts with 67 and no digit appears more than once?",
    o : ["336", "504", "720", "1000"],
    a : 0,
    s : "The first two digits are fixed as 6 and 7. The remaining 3 places can be filled from the remaining 8 digits in 8 × 7 × 6 = 336 ways."
  },
  {
    q : "A coin is tossed 3 times and the outcomes are recorded. How many possible outcomes are there?",
    o : ["3", "6", "8", "9"],
    a : 2,
    s : "Each toss has 2 outcomes (Head or Tail). For 3 tosses, total possible outcomes = 2 × 2 × 2 = 8."
  },
  {
    q : "Given 5 flags of different colours, how many different signals can be generated if each signal requires the use of 2 flags, one below the other?",
    o : ["10", "20", "25", "32"],
    a : 1,
    s : "The upper flag can be chosen in 5 ways and the lower flag in 4 ways. Total signals = 5 × 4 = 20."
  },
  {
    q : "The value of 0! is:",
    o : ["0", "1", "∞", "Undefined"],
    a : 1,
    s : "By definition, 0! = 1."
  },
  {
    q : "The value of 7! − 5! is:",
    o : ["2!", "4920", "5040", "4800"],
    a : 1,
    s : "7! = 5040 and 5! = 120. Thus 7! − 5! = 5040 − 120 = 4920."
  },

]
},


{
    title: "Chapter 6 : Permutations and Combinations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Linear Inequalities ",
    questions: [

  {
    q : "Compute 8! / (6! × 2!):",
    o : ["28", "56", "14", "4"],
    a : 0,
    s : "8! / (6! × 2!) = (8 × 7 × 6!) / (6! × 2) = 56 / 2 = 28."
  },
  {
    q : "If 1/6! + 1/7! = x/8!, then the value of x is:",
    o : ["64", "56", "49", "72"],
    a : 0,
    s : "1/6! + 1/(7 × 6!) = x / (8 × 7 × 6!). Multiplying throughout by 6! gives 1 + 1/7 = x/56 ⇒ 8/7 = x/56 ⇒ x = 64."
  },
  {
    q : "Evaluate n! / (n − r)! when n = 9 and r = 5:",
    o : ["15120", "3024", "126", "720"],
    a : 0,
    s : "9! / (9 − 5)! = 9! / 4! = 9 × 8 × 7 × 6 × 5 = 15120."
  },
  {
    q : "Which of the following is the correct formula for ⁿPᵣ (0 ≤ r ≤ n)?",
    o : ["n! / r!", "n! / (n − r)!", "n! / [r!(n − r)!]", "(n − r)! / n!"],
    a : 1,
    s : "The number of permutations of n different objects taken r at a time without repetition is ⁿPᵣ = n! / (n − r)!."
  },
  {
    q : "How many 3-digit numbers can be formed by using the digits 1 to 9 if no digit is repeated?",
    o : ["504", "729", "84", "336"],
    a : 0,
    s : "Number of 3-digit numbers = ⁹P₃ = 9 × 8 × 7 = 504."
  },
  {
    q : "How many 4-digit numbers are there with no digit repeated?",
    o : ["4536", "5040", "9000", "3024"],
    a : 0,
    s : "The thousands place cannot be 0, so it has 9 choices (1 to 9). The remaining 3 places can be filled from the remaining 9 digits in ⁹P₃ = 504 ways. Total = 9 × 504 = 4536."
  },
  {
    q : "How many 3-digit even numbers can be made using the digits 1, 2, 3, 4, 6, 7, if no digit is repeated?",
    o : ["60", "120", "108", "24"],
    a : 0,
    s : "Units place can be filled by 2, 4, or 6 (3 ways). The remaining 2 places can be filled from the remaining 5 digits in ⁵P₂ = 20 ways. Total = 3 × 20 = 60."
  },
  {
    q : "Find the number of 4-digit numbers that can be formed using the digits 1, 2, 3, 4, 5 if no digit is repeated. How many of these will be even?",
    o : ["120 and 48", "120 and 60", "60 and 24", "120 and 24"],
    a : 0,
    s : "Total 4-digit numbers = ⁵P₄ = 120. For even numbers, units digit is 2 or 4 (2 ways), and remaining 3 places in ⁴P₃ = 24 ways, giving 2 × 24 = 48."
  },
  {
    q : "From a committee of 8 persons, in how many ways can we choose a chairman and a vice chairman assuming one person cannot hold more than one position?",
    o : ["28", "56", "64", "16"],
    a : 1,
    s : "Since order matters (distinct positions), number of ways = ⁸P₂ = 8 × 7 = 56."
  },
  {
    q : "Find n if ⁿ⁻¹P₃ : ⁿP₄ = 1 : 9:",
    o : ["9", "10", "8", "11"],
    a : 0,
    s : "[(n − 1)! / (n − 4)!] / [n! / (n − 4)!] = 1/9 ⇒ 1/n = 1/9 ⇒ n = 9."
  },

]
},

{
    title: "Chapter 6 : Permutations and Combinations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Linear Inequalities ",
    questions: [

  {
    q : "Find r if 5 × ⁴Pᵣ = 6 × ⁵Pᵣ₋₁:",
    o : ["3", "4", "2", "1"],
    a : 0,
    s : "5 × [4! / (4 − r)!] = 6 × [5! / (6 − r)!] ⇒ 1 / (4 − r)! = 6 / [(6 − r)(5 − r)(4 − r)!] ⇒ (6 − r)(5 − r) = 6 ⇒ r² − 11r + 24 = 0 ⇒ r = 3 (since r ≤ 4)."
  },
  {
    q : "How many words, with or without meaning, can be formed using all the letters of the word EQUATION, using each letter exactly once?",
    o : ["40320", "5040", "720", "362880"],
    a : 0,
    s : "EQUATION has 8 distinct letters. Number of arrangements = 8! = 40320."
  },
  {
    q : "How many words, with or without meaning, can be made from the letters of the word MONDAY, assuming that no letter is repeated, if 4 letters are used at a time?",
    o : ["360", "720", "120", "24"],
    a : 0,
    s : "MONDAY has 6 distinct letters. Taking 4 at a time gives ⁶P₄ = 6 × 5 × 4 × 3 = 360."
  },
  {
    q : "How many words, with or without meaning, can be made from the letters of the word MONDAY (no repetition) if all letters are used but the first letter is a vowel?",
    o : ["240", "120", "360", "480"],
    a : 0,
    s : "Vowels in MONDAY are O and A (2 choices for first place). The remaining 5 letters can be arranged in 5! = 120 ways. Total = 2 × 120 = 240."
  },
  {
    q : "The number of permutations of n objects, where p₁ objects are of one kind, p₂ are of second kind, ..., pₖ are of k-th kind and the rest, if any, are of different kind is:",
    o : ["n! / (p₁ + p₂ + ... + pₖ)!", "n! / (p₁! p₂! ... pₖ!)", "n! × (p₁! p₂! ... pₖ!)", "(n − p₁ − p₂ − ... − pₖ)!"],
    a : 1,
    s : "By theorem, the number of distinct permutations of n objects with identical groups of sizes p₁, p₂, ..., pₖ is n! / (p₁! p₂! ... pₖ!)."
  },
  {
    q : "In how many of the distinct permutations of the letters in MISSISSIPPI do the four I's not come together?",
    o : ["34650", "33810", "840", "35490"],
    a : 1,
    s : "Total permutations = 11! / (4! 4! 2!) = 34650. Treating all 4 I's as one block gives 8! / (4! 2!) = 840 arrangements where I's are together. Hence not together = 34650 − 840 = 33810."
  },
  {
    q : "In how many ways can the letters of the word PERMUTATIONS be arranged if the words start with P and end with S?",
    o : ["1814400", "3628800", "907200", "453600"],
    a : 0,
    s : "PERMUTATIONS has 12 letters with T repeated twice. Fixing P at start and S at end leaves 10 letters (two T's). Arrangements = 10! / 2! = 3628800 / 2 = 1814400."
  },
  {
    q : "In how many ways can the letters of the word PERMUTATIONS be arranged if all vowels are all together?",
    o : ["2419200", "1209600", "604800", "483840"],
    a : 0,
    s : "There are 5 distinct vowels (E, U, A, I, O) treated as 1 unit, plus 7 consonants (with 2 T's), making 8 units. Arrangements = (8! / 2!) × 5! = 20160 × 120 = 2419200."
  },
  {
    q : "In how many ways can the letters of the word PERMUTATIONS be arranged if there are always 4 letters between P and S?",
    o : ["25401600", "12700800", "6350400", "3175200"],
    a : 0,
    s : "P and S can be placed in 7 positions (1-6, 2-7, ..., 7-12) in 2 ways (P...S or S...P), giving 14 ways. Remaining 10 letters (two T's) arrange in 10!/2! ways. Total = 14 × (10!/2!) = 7 × 3628800 = 25401600."
  },
  {
    q : "How many words, with or without meaning, each of 2 vowels and 3 consonants can be formed from the letters of the word DAUGHTER?",
    o : ["3600", "720", "30", "1200"],
    a : 0,
    s : "DAUGHTER has 3 vowels (A, U, E) and 5 consonants. Selecting 2 vowels and 3 consonants = ³C₂ × ⁵C₃ = 3 × 10 = 30 ways. Arranging these 5 letters = 30 × 5! = 30 × 120 = 3600."
  },

]
},

{
    title: "Chapter 6 : Permutations and Combinations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Linear Inequalities ",
    questions: [

  {
    q : "How many words, with or without meaning, can be formed using all the letters of the word EQUATION at a time so that the vowels and consonants occur together?",
    o : ["1440", "720", "2880", "576"],
    a : 0,
    s : "5 vowels (E, U, A, I, O) form 1 block and 3 consonants (Q, T, N) form 1 block. These 2 blocks arrange in 2! ways, vowels in 5! ways, consonants in 3! ways. Total = 2! × 5! × 3! = 2 × 120 × 6 = 1440."
  },
  {
    q : "Which of the following relations between ⁿPᵣ and ⁿCᵣ is always true?",
    o : ["ⁿPᵣ = ⁿCᵣ × r!", "ⁿCᵣ = ⁿPᵣ × r!", "ⁿPᵣ = ⁿCᵣ / r!", "ⁿPᵣ + ⁿCᵣ = n!"],
    a : 0,
    s : "Each combination of r objects can be arranged in r! ways, so ⁿPᵣ = ⁿCᵣ × r!."
  },
  {
    q : "The identity ⁿCᵣ = ⁿCₙ₋ᵣ holds for:",
    o : ["Only r = n/2", "All integers r with 0 ≤ r ≤ n", "Only even n", "Only odd r"],
    a : 1,
    s : "Selecting r objects from n leaves (n − r) objects unselected, so ⁿCᵣ = ⁿCₙ₋ᵣ for all 0 ≤ r ≤ n."
  },
  {
    q : "If ⁿC₈ = ⁿC₂, find ⁿC₂:",
    o : ["45", "90", "10", "28"],
    a : 0,
    s : "ⁿC₈ = ⁿC₂ implies n = 8 + 2 = 10. Therefore, ¹⁰C₂ = (10 × 9) / 2 = 45."
  },
  {
    q : "If ⁿC₉ = ⁿC₈, find ⁿC₁₇:",
    o : ["1", "17", "0", "136"],
    a : 0,
    s : "ⁿC₉ = ⁿC₈ implies n = 9 + 8 = 17. Therefore, ¹⁷C₁₇ = 1."
  },
  {
    q : "According to Pascal's rule, ⁿCᵣ + ⁿCᵣ₋₁ is equal to:",
    o : ["ⁿ⁺¹Cᵣ", "ⁿ⁺¹Cᵣ₋₁", "ⁿCᵣ₊₁", "ⁿ⁻¹Cᵣ"],
    a : 0,
    s : "By Pascal's identity, ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ."
  },
  {
    q : "Determine n if ²ⁿC₃ : ⁿC₃ = 12 : 1:",
    o : ["5", "6", "7", "8"],
    a : 0,
    s : "[2n(2n − 1)(2n − 2)/6] / [n(n − 1)(n − 2)/6] = 12 ⇒ 4(2n − 1) / (n − 2) = 12 ⇒ 2n − 1 = 3n − 6 ⇒ n = 5."
  },
  {
    q : "How many chords can be drawn through 21 points on a circle?",
    o : ["210", "420", "190", "231"],
    a : 0,
    s : "A chord is uniquely determined by choosing 2 points out of 21. Number of chords = ²¹C₂ = (21 × 20) / 2 = 210."
  },
  {
    q : "In how many ways can a team of 3 boys and 3 girls be selected from 5 boys and 4 girls?",
    o : ["40", "14", "120", "240"],
    a : 0,
    s : "Number of ways = ⁵C₃ × ⁴C₃ = 10 × 4 = 40."
  },
  {
    q : "Find the number of ways of selecting 9 balls from 6 red balls, 5 white balls and 5 blue balls if each selection consists of 3 balls of each colour:",
    o : ["2000", "1000", "400", "30"],
    a : 0,
    s : "Number of ways = ⁶C₃ × ⁵C₃ × ⁵C₃ = 20 × 10 × 10 = 2000."
  },

]
},


{
    title: "Chapter 6 : Permutations and Combinations - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Linear Inequalities ",
    questions: [


  {
    q : "Determine the number of 5-card combinations out of a deck of 52 cards if there is exactly one ace in each combination:",
    o : ["778320", "2598960", "194580", "389160"],
    a : 0,
    s : "Select 1 ace from 4 aces (⁴C₁ = 4) and 4 non-aces from 48 cards (⁴⁸C₄ = 194580). Total = 4 × 194580 = 778320."
  },
  {
    q : "In how many ways can one select a cricket team of eleven from 17 players in which only 5 players can bowl if each cricket team of 11 must include exactly 4 bowlers?",
    o : ["3960", "1980", "7920", "12376"],
    a : 0,
    s : "Select 4 bowlers from 5 (⁵C₄ = 5) and 7 non-bowlers from 12 (¹²C₇ = 792). Total ways = 5 × 792 = 3960."
  },
  {
    q : "A bag contains 5 black and 6 red balls. Determine the number of ways in which 2 black and 3 red balls can be selected:",
    o : ["200", "100", "30", "1200"],
    a : 0,
    s : "Number of ways = ⁵C₂ × ⁶C₃ = 10 × 20 = 200."
  },
  {
    q : "In how many ways can a student choose a programme of 5 courses if 9 courses are available and 2 specific courses are compulsory for every student?",
    o : ["35", "126", "21", "70"],
    a : 0,
    s : "Since 2 courses are compulsory, the student must choose 3 more courses from the remaining 7 courses. Ways = ⁷C₃ = (7 × 6 × 5) / 6 = 35."
  },
  {
    q : "A committee of 7 has to be formed from 9 boys and 4 girls. In how many ways can this be done when the committee consists of exactly 3 girls?",
    o : ["504", "588", "126", "252"],
    a : 0,
    s : "Select 3 girls from 4 (⁴C₃ = 4) and 4 boys from 9 (⁹C₄ = 126). Total ways = 4 × 126 = 504."
  },
  {
    q : "A committee of 7 has to be formed from 9 boys and 4 girls. In how many ways can this be done when the committee consists of at least 3 girls?",
    o : ["588", "504", "84", "1632"],
    a : 0,
    s : "At least 3 girls means (3 girls and 4 boys) or (4 girls and 3 boys) = (⁴C₃ × ⁹C₄) + (⁴C₄ × ⁹C₃) = (4 × 126) + (1 × 84) = 504 + 84 = 588."
  },
  {
    q : "A committee of 7 has to be formed from 9 boys and 4 girls. In how many ways can this be done when the committee consists of at most 3 girls?",
    o : ["1632", "588", "1716", "1548"],
    a : 0,
    s : "Total committees of 7 from 13 people = ¹³C₇ = 1716. The only case excluded is 4 girls and 3 boys = ⁴C₄ × ⁹C₃ = 84. Thus at most 3 girls = 1716 − 84 = 1632."
  },
  {
    q : "If the different permutations of all the letters of the word EXAMINATION are listed as in a dictionary, how many words are there in this list before the first word starting with E?",
    o : ["907200", "1814400", "453600", "3628800"],
    a : 0,
    s : "EXAMINATION has 11 letters (two A's, two I's, two N's). Only words starting with A come before E. Fixing A at first position leaves 10 letters (two I's, two N's), giving 10! / (2! 2!) = 3628800 / 4 = 907200."
  },
  {
    q : "How many 6-digit numbers can be formed from the digits 0, 1, 3, 5, 7 and 9 which are divisible by 10 and no digit is repeated?",
    o : ["120", "600", "720", "24"],
    a : 0,
    s : "To be divisible by 10, the units digit must be 0 (1 choice). The remaining 5 digits (1, 3, 5, 7, 9) can fill the first 5 places in 5! = 120 ways."
  },
  {
    q : "The English alphabet has 5 vowels and 21 consonants. How many words with two different vowels and 2 different consonants can be formed from the alphabet?",
    o : ["50400", "2100", "12600", "25200"],
    a : 0,
    s : "Select 2 vowels (⁵C₂ = 10) and 2 consonants (²¹C₂ = 210), giving 2100 selections. Each group of 4 distinct letters can be arranged in 4! = 24 ways. Total words = 2100 × 24 = 50400."
  },


]
},


// Chapter 7 : Binomial Theorem  //


{
    title: "Chapter 7 : Binomial Theorem - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Binomial Theorem ",
    questions: [

{
    q : "The total number of terms in the expansion of (x + a)^n, where n is a positive integer, is:",
    o : ["n", "n + 1", "n − 1", "2n"],
    a : 1,
    s : "In the binomial expansion of (x + a)^n, the powers of a range from 0 to n, giving n + 1 terms."
  },
  {
    q : "The total number of terms in the expansion of (2x − 3y)^9 is:",
    o : ["8", "9", "10", "11"],
    a : 2,
    s : "For index n = 9, the number of terms is n + 1 = 9 + 1 = 10."
  },
  {
    q : "The sum of the indices of x and a in every term of the expansion of (x + a)^n is:",
    o : ["n − 1", "n", "n + 1", "2n"],
    a : 1,
    s : "Each term is of the form nCr x^(n−r) a^r, and the sum of exponents is (n − r) + r = n."
  },
  {
    q : "In Pascal's triangle, each row begins and ends with:",
    o : ["0", "1", "n", "2"],
    a : 1,
    s : "Since nC0 = 1 and nCn = 1, every row in Pascal's triangle starts and ends with 1."
  },
  {
    q : "Using the binomial theorem, the expansion of (1 − 2x)^5 is:",
    o : ["1 − 10x + 40x² − 80x³ + 80x⁴ − 32x⁵", "1 + 10x + 40x² + 80x³ + 80x⁴ + 32x⁵", "1 − 10x + 20x² − 40x³ + 40x⁴ − 32x⁵", "1 − 5x + 10x² − 10x³ + 5x⁴ − x⁵"],
    a : 0,
    s : "(1 − 2x)^5 = 5C0 − 5C1(2x) + 5C2(2x)² − 5C3(2x)³ + 5C4(2x)⁴ − 5C5(2x)⁵ = 1 − 10x + 40x² − 80x³ + 80x⁴ − 32x⁵."
  },
  {
    q : "The expansion of (2/x − x/2)^5 has how many terms?",
    o : ["4", "5", "6", "10"],
    a : 2,
    s : "Since the exponent is 5, the binomial expansion has 5 + 1 = 6 terms."
  },
  {
    q : "Using the binomial theorem, the value of (99)^5 is:",
    o : ["9509900499", "9509900490", "9509904999", "9509900599"],
    a : 0,
    s : "(100 − 1)^5 = 10^10 − 5(10^8) + 10(10^6) − 10(10^4) + 5(10^2) − 1 = 10000000000 − 500000000 + 10000000 − 100000 + 500 − 1 = 9509900499."
  },
  {
    q : "Using the binomial theorem, the value of (101)^4 is:",
    o : ["104060401", "104060410", "10460401", "10406401"],
    a : 0,
    s : "(100 + 1)^4 = 100^4 + 4(100^3) + 6(100^2) + 4(100) + 1 = 100000000 + 4000000 + 60000 + 400 + 1 = 104060401."
  },
  {
    q : "Which number is larger: (1.1)^10000 or 1000?",
    o : ["1000", "(1.1)^10000", "Both are equal", "Cannot be determined"],
    a : 1,
    s : "(1 + 0.1)^10000 = 1 + 10000(0.1) + other positive terms = 1 + 1000 + positive terms > 1000."
  },
  {
    q : "The expression (a + b)^4 − (a − b)^4 simplifies to:",
    o : ["8ab(a² + b²)", "4ab(a² + b²)", "2(a⁴ + 6a²b² + b⁴)", "8ab(a² − b²)"],
    a : 0,
    s : "(a + b)^4 − (a − b)^4 = 2[4C1 a³b + 4C3 ab³] = 2(4a³b + 4ab³) = 8ab(a² + b²)."
  },

]
},


{
    title: "Chapter 7 : Binomial Theorem - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Binomial Theorem ",
    questions: [
  {
    q : "The value of (√3 + √2)^6 − (√3 − √2)^6 is:",
    o : ["396√6", "198√6", "99√6", "792√6"],
    a : 0,
    s : "(x + y)^6 − (x − y)^6 = 2[6C1 x⁵y + 6C3 x³y³ + 6C5 xy⁵] = 2[6(9√3)(√2) + 20(3√3)(2√2) + 6(√3)(4√2)] = 2(54 + 120 + 24)√6 = 396√6."
  },
  {
    q : "The value of (x + 1)^6 + (x − 1)^6 is:",
    o : ["2(x⁶ + 15x⁴ + 15x² + 1)", "2(6x⁵ + 20x³ + 6x)", "x⁶ + 15x⁴ + 15x² + 1", "2(x⁶ + 6x⁴ + 15x² + 1)"],
    a : 0,
    s : "(x + 1)^6 + (x − 1)^6 = 2[6C0 x⁶ + 6C2 x⁴ + 6C4 x² + 6C6] = 2(x⁶ + 15x⁴ + 15x² + 1)."
  },
  {
    q : "The general term T_(r+1) in the expansion of (x + a)^n is:",
    o : ["nCr x^r a^(n−r)", "nCr x^(n−r) a^r", "nC(r+1) x^(n−r) a^r", "nC(r−1) x^(n−r+1) a^(r−1)"],
    a : 1,
    s : "In the expansion of (x + a)^n, the (r + 1)th term is given by T_(r+1) = nCr x^(n−r) a^r."
  },
  {
    q : "The general term T_(r+1) in the expansion of (x − a)^n is:",
    o : ["(−1)^r nCr x^(n−r) a^r", "(−1)^(r+1) nCr x^(n−r) a^r", "nCr x^(n−r) a^r", "(−1)^n nCr x^(n−r) a^r"],
    a : 0,
    s : "Replacing a by −a in T_(r+1) gives nCr x^(n−r) (−a)^r = (−1)^r nCr x^(n−r) a^r."
  },
  {
    q : "Find the 4th term in the expansion of (x − 2y)^12.",
    o : ["−1760 x⁹ y³", "1760 x⁹ y³", "−220 x⁹ y³", "−1760 x³ y⁹"],
    a : 0,
    s : "T_4 = T_(3+1) = 12C3 x^(12−3) (−2y)^3 = 220 × x⁹ × (−8y³) = −1760 x⁹ y³."
  },
  {
    q : "Find the 13th term in the expansion of (9x − 1/(3√x))^18, x > 0.",
    o : ["18564", "−18564", "18564 x", "18564 / x"],
    a : 0,
    s : "T_13 = T_(12+1) = 18C12 (9x)^6 (−1/(3√x))^12 = 18C6 × 3^12 x^6 × (1/(3^12 x^6)) = 18C6 = 18564."
  },
  {
    q : "The coefficient of x⁵ in the expansion of (x + 3)^8 is:",
    o : ["1512", "56", "168", "4536"],
    a : 0,
    s : "T_(r+1) = 8Cr x^(8−r) 3^r. For x⁵, 8 − r = 5 ⇒ r = 3. Coefficient = 8C3 × 3^3 = 56 × 27 = 1512."
  },
  {
    q : "The coefficient of a⁵ b⁷ in the expansion of (a − 2b)^12 is:",
    o : ["−101376", "101376", "−792", "792"],
    a : 0,
    s : "For a⁵ b⁷, r = 7. Term = 12C7 a^5 (−2b)^7 = 792 × (−128) a⁵ b⁷ = −101376 a⁵ b⁷."
  },
  {
    q : "The coefficient of x⁶ y³ in the expansion of (x + 2y)^9 is:",
    o : ["672", "84", "5376", "336"],
    a : 0,
    s : "T_(r+1) = 9Cr x^(9−r) (2y)^r. Setting r = 3 gives 9C3 × 2^3 = 84 × 8 = 672."
  },
  {
    q : "If n is even, the middle term in the expansion of (x + a)^n is:",
    o : ["(n/2)th term", "(n/2 + 1)th term", "((n + 1)/2)th term", "(n + 1)th term"],
    a : 1,
    s : "When n is even, there are n + 1 (odd) terms, so the single middle term is the (n/2 + 1)th term."
  },

]
},


{
    title: "Chapter 7 : Binomial Theorem - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Binomial Theorem ",
    questions: [

  {
    q : "If n is odd, how many middle terms are there in the expansion of (x + a)^n?",
    o : ["1", "2", "3", "None"],
    a : 1,
    s : "When n is odd, n + 1 is even, so there are two middle terms: ((n + 1)/2)th and ((n + 3)/2)th terms."
  },
  {
    q : "Find the middle term in the expansion of (3 − x³/6)^7.",
    o : ["−105/8 x⁹ and 35/48 x¹²", "105/8 x⁹ and −35/48 x¹²", "−105/8 x⁹ only", "35/48 x¹² only"],
    a : 0,
    s : "Since n = 7 is odd, middle terms are T_4 and T_5. T_4 = 7C3 (3)^4 (−x³/6)^3 = 35 × 81 × (−x⁹/216) = −105/8 x⁹. T_5 = 7C4 (3)^3 (−x³/6)^4 = 35 × 27 × (x¹²/1296) = 35/48 x¹²."
  },
  {
    q : "Find the middle term in the expansion of (x/3 + 9y)^10.",
    o : ["61236 x⁵ y⁵", "252 x⁵ y⁵", "61236 x⁴ y⁶", "20412 x⁵ y⁵"],
    a : 0,
    s : "Since n = 10 is even, the middle term is T_(10/2 + 1) = T_6 = 10C5 (x/3)^5 (9y)^5 = 252 × (1/3^5) × 3^10 x⁵ y⁵ = 252 × 243 x⁵ y⁵ = 61236 x⁵ y⁵."
  },
  {
    q : "The term independent of x in the expansion of (x² − 1/x)^9 is:",
    o : ["84", "−84", "126", "−126"],
    a : 0,
    s : "T_(r+1) = 9Cr (x²)^(9−r) (−1/x)^r = (−1)^r 9Cr x^(18−3r). Set 18 − 3r = 0 ⇒ r = 6. Term = (−1)^6 9C6 = 84."
  },
  {
    q : "The term independent of x in the expansion of (3x²/2 − 1/(3x))^6 is:",
    o : ["5/12", "−5/12", "15/4", "5/4"],
    a : 0,
    s : "T_(r+1) = 6Cr (3/2)^(6−r) (−1/3)^r x^(12−3r). Set 12 − 3r = 0 ⇒ r = 4. Term = 6C4 (3/2)^2 (1/3)^4 = 15 × (9/4) × (1/81) = 5/12."
  },
  {
    q : "The term independent of x in the expansion of (√x + 1/(3x²))^10 is:",
    o : ["5", "10", "45", "15"],
    a : 0,
    s : "T_(r+1) = 10Cr x^((10−r)/2) (1/3)^r x^(−2r). Exponent of x: (10 − r)/2 − 2r = 0 ⇒ 10 − 5r = 0 ⇒ r = 2. Term = 10C2 (1/3)^2 = 45/9 = 5."
  },
  {
    q : "The rth term from the end in the expansion of (x + a)^n is equal to which term from the beginning?",
    o : ["(n − r + 1)th term", "(n − r + 2)th term", "(n − r)th term", "(r + 1)th term"],
    a : 1,
    s : "There are n + 1 terms in total. The rth term from the end is the ((n + 1) − r + 1) = (n − r + 2)th term from the beginning."
  },
  {
    q : "The 4th term from the end in the expansion of (x/2 − 2/x²)^9 is:",
    o : ["672 / x⁹", "−672 / x⁹", "672 x⁹", "−672 x⁹"],
    a : 0,
    s : "4th term from the end = (9 − 4 + 2) = 7th term from the beginning. T_7 = 9C6 (x/2)^3 (−2/x²)^6 = 84 × (x³/8) × (64/x¹²) = 672 / x⁹."
  },
  {
    q : "The sum of all binomial coefficients nC0 + nC1 + nC2 + ... + nCn is equal to:",
    o : ["2^(n−1)", "2^n", "2^(n+1)", "n × 2^n"],
    a : 1,
    s : "Putting x = 1 and a = 1 in (x + a)^n = ∑ nCr x^(n−r) a^r gives 2^n = nC0 + nC1 + ... + nCn."
  },
  {
    q : "The alternating sum of binomial coefficients nC0 − nC1 + nC2 − ... + (−1)^n nCn (for n ≥ 1) is:",
    o : ["1", "−1", "0", "2^(n−1)"],
    a : 2,
    s : "Putting x = 1 and a = −1 in (x + a)^n gives (1 − 1)^n = 0 = nC0 − nC1 + nC2 − ... + (−1)^n nCn."
  },

]
},


{
    title: "Chapter 7 : Binomial Theorem - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Binomial Theorem ",
    questions: [


  {
    q : "The sum of the coefficients of odd-positioned terms nC0 + nC2 + nC4 + ... is equal to:",
    o : ["2^n", "2^(n−1)", "2^(n−2)", "n"],
    a : 1,
    s : "The sum of even-indexed binomial coefficients equals the sum of odd-indexed binomial coefficients, each equal to 2^n / 2 = 2^(n−1)."
  },
  {
    q : "What is the value of 10C0 + 10C1 + 10C2 + ... + 10C10?",
    o : ["512", "1024", "2048", "100"],
    a : 1,
    s : "The sum of all binomial coefficients for n = 10 is 2^10 = 1024."
  },
  {
    q : "What is the sum of all coefficients in the expansion of (1 + 2x)^6?",
    o : ["64", "729", "243", "128"],
    a : 1,
    s : "To find the sum of coefficients, substitute x = 1: (1 + 2(1))^6 = 3^6 = 729."
  },
  {
    q : "What is the sum of all coefficients in the expansion of (2x − 3y)^8?",
    o : ["1", "−1", "0", "256"],
    a : 0,
    s : "Substitute x = 1 and y = 1: (2(1) − 3(1))^8 = (−1)^8 = 1."
  },
  {
    q : "If the coefficients of x⁷ and x⁸ in the expansion of (2 + x/3)^n are equal, then n is:",
    o : ["55", "56", "45", "48"],
    a : 0,
    s : "Coeff of x⁷ = nC7 2^(n−7) (1/3)^7; coeff of x⁸ = nC8 2^(n−8) (1/3)^8. Equating gives nC7 × 2 = nC8 × (1/3) ⇒ 6 = (n − 7)/8 ⇒ n − 7 = 48 ⇒ n = 55."
  },
  {
    q : "If the coefficients of (r − 5)th and (2r − 1)th terms in the expansion of (1 + x)^34 are equal, find r.",
    o : ["14", "15", "16", "13"],
    a : 0,
    s : "Coefficients are 34C(r−6) and 34C(2r−2). Either r − 6 = 2r − 2 (gives r = −4, invalid) or (r − 6) + (2r − 2) = 34 ⇒ 3r − 8 = 34 ⇒ 3r = 42 ⇒ r = 14."
  },
  {
    q : "If the coefficients of a^(r−1), a^r, and a^(r+1) in the expansion of (1 + a)^n are in arithmetic progression, then:",
    o : ["n² − n(4r + 1) + 4r² − 2 = 0", "n² + n(4r + 1) + 4r² − 2 = 0", "n² − n(4r − 1) + 4r² + 2 = 0", "n² − 4nr + 4r² = 0"],
    a : 0,
    s : "2(nCr) = nC(r−1) + nC(r+1). Dividing by nCr gives 2 = r/(n − r + 1) + (n − r)/(r + 1), which simplifies to n² − n(4r + 1) + 4r² − 2 = 0."
  },
  {
    q : "For every natural number n, 9^(n+1) − 8n − 9 is divisible by:",
    o : ["8", "16", "64", "72"],
    a : 2,
    s : "9^(n+1) = (1 + 8)^(n+1) = 1 + 8(n + 1) + 64 × integer = 8n + 9 + 64k. Hence 9^(n+1) − 8n − 9 = 64k, which is divisible by 64."
  },
  {
    q : "For every positive integer n, 3^(2n+2) − 8n − 9 is divisible by:",
    o : ["8", "32", "64", "16"],
    a : 2,
    s : "3^(2n+2) = 9^(n+1) = (1 + 8)^(n+1) = 1 + 8(n + 1) + 64k = 8n + 9 + 64k. Thus it is divisible by 64."
  },
  {
    q : "What is the remainder when 5^99 is divided by 13?",
    o : ["1", "5", "8", "12"],
    a : 2,
    s : "5^99 = 5 × (25)^49 = 5 × (26 − 1)^49 = 5(26k − 1) = 130k − 5 = 13(10k − 1) + 8. So the remainder is 8."
  },

]
},


{
    title: "Chapter 7 : Binomial Theorem - Practice Set", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Binomial Theorem ",
    questions: [


  {
    q : "The total number of terms in the expansion of (x + a)^100 + (x − a)^100 after simplification is:",
    o : ["50", "51", "100", "101"],
    a : 1,
    s : "In (x + a)^n + (x − a)^n when n is even, there are (n/2 + 1) terms. For n = 100, 100/2 + 1 = 51 terms."
  },
  {
    q : "The total number of terms in the expansion of (x + a)^51 − (x − a)^51 after simplification is:",
    o : ["25", "26", "51", "52"],
    a : 1,
    s : "When n is odd, (x + a)^n − (x − a)^n has (n + 1)/2 terms. For n = 51, (51 + 1)/2 = 26 terms."
  },
  {
    q : "The coefficient of x^n in the expansion of (1 + x)^(2n) is:",
    o : ["(2n)! / (n!)²", "(2n)! / n!", "n! / (2n)!", "2^n"],
    a : 0,
    s : "The coefficient of x^n in (1 + x)^(2n) is 2nCn = (2n)! / (n! n!) = (2n)! / (n!)²."
  },
  {
    q : "The ratio of the coefficient of x^n in (1 + x)^(2n) to the coefficient of x^n in (1 + x)^(2n−1) is:",
    o : ["1 : 2", "2 : 1", "1 : 1", "4 : 1"],
    a : 1,
    s : "2nCn / (2n−1)Cn = [(2n)! / (n! n!)] / [(2n − 1)! / (n! (n − 1)!)] = 2n / n = 2 : 1."
  },
  {
    q : "If the first three terms in the expansion of (1 + ax)^n are 1, 6x, and 16x², then the values of a and n are:",
    o : ["a = 2/3, n = 9", "a = 3/2, n = 4", "a = 2, n = 3", "a = 1/3, n = 18"],
    a : 0,
    s : "nC1 a = na = 6 and nC2 a² = n(n − 1)a² / 2 = 16. Substituting na = 6 gives 6(6 − a)/2 = 16 ⇒ 18 − 3a = 16 ⇒ a = 2/3, so n = 9."
  },
  {
    q : "Find a positive value of m for which the coefficient of x² in the expansion of (1 + x)^m is 6.",
    o : ["3", "4", "5", "6"],
    a : 1,
    s : "Coefficient of x² is mC2 = m(m − 1)/2 = 6 ⇒ m² − m − 12 = 0 ⇒ (m − 4)(m + 3) = 0. Since m > 0, m = 4."
  },
  {
    q : "Find the coefficient of x⁵ in the product (1 + 2x)^6 (1 − x)^7.",
    o : ["171", "−171", "210", "−210"],
    a : 0,
    s : "(1 + 2x)^6 = 1 + 12x + 60x² + 160x³ + 240x⁴ + 192x⁵ + ... and (1 − x)^7 = 1 − 7x + 21x² − 35x³ + 35x⁴ − 21x⁵ + ... Coeff of x⁵ = 1(−21) + 12(35) + 60(−35) + 160(21) + 240(−7) + 192(1) = −21 + 420 − 2100 + 3360 − 1680 + 192 = 171."
  },
  {
    q : "The value of ∑_(r=0)^n 3^r nCr is equal to:",
    o : ["3^n", "4^n", "2^n", "3^(n+1)"],
    a : 1,
    s : "By binomial theorem, ∑_(r=0)^n nCr 1^(n−r) 3^r = (1 + 3)^n = 4^n."
  },
  {
    q : "The number of terms in the expansion of (1 + 2x + x²)^10 is:",
    o : ["11", "20", "21", "10"],
    a : 2,
    s : "(1 + 2x + x²)^10 = ((1 + x)²)^10 = (1 + x)^20, which has 20 + 1 = 21 terms."
  },
  {
    q : "If the 2nd, 3rd, and 4th terms in the expansion of (x + a)^n are 240, 720, and 1080 respectively, then n is:",
    o : ["4", "5", "6", "7"],
    a : 1,
    s : "T_2 = n x^(n−1) a = 240, T_3 = n(n−1)/2 x^(n−2) a² = 720, T_4 = n(n−1)(n−2)/6 x^(n−3) a³ = 1080. T_3/T_2 = (n−1)a/(2x) = 3 and T_4/T_3 = (n−2)a/(3x) = 3/2. Dividing gives 3(n−1)/(2(n−2)) = 2 ⇒ 3n − 3 = 4n − 8 ⇒ n = 5."
  },

]
},


// Chapter 8 :Sequences and Series //

{
    title: "Chapter 8 : Sequences and Series ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Sequences and Series ",
    questions: [

{
    q : "What is the 5th term of the sequence defined by a_n = 2n + 5?",
    o : ["10", "13", "15", "17"],
    a : 2,
    s : "Substituting n = 5 into a_n = 2n + 5 gives a_5 = 2(5) + 5 = 15."
  },
  {
    q : "Find the 4th term of the sequence defined by a_n = (n − 3) / 4.",
    o : ["1/4", "1/2", "3/4", "1"],
    a : 0,
    s : "For n = 4, a_4 = (4 − 3) / 4 = 1/4."
  },
  {
    q : "What is the 6th term of the sequence given by a_n = (−1)^(n − 1) · 5^(n + 1)?",
    o : ["5^7", "−5^7", "5^6", "−5^6"],
    a : 1,
    s : "For n = 6, a_6 = (−1)^(6 − 1) · 5^(6 + 1) = (−1)^5 · 5^7 = −5^7."
  },
  {
    q : "In a sequence defined recursively by a_1 = 3 and a_n = 3a_(n − 1) + 2 for n > 1, what is the value of a_3?",
    o : ["11", "35", "107", "323"],
    a : 1,
    s : "a_2 = 3(3) + 2 = 11, and a_3 = 3(11) + 2 = 35."
  },
  {
    q : "The Fibonacci sequence is defined by a_1 = a_2 = 1 and a_n = a_(n − 1) + a_(n − 2) for n > 2. What is the value of a_6 / a_5?",
    o : ["5/3", "8/5", "13/8", "3/2"],
    a : 1,
    s : "The terms are a_1 = 1, a_2 = 1, a_3 = 2, a_4 = 3, a_5 = 5, a_6 = 8. Thus a_6 / a_5 = 8/5."
  },
  {
    q : "What is the 20th term of the sequence defined by a_n = n(n − 2) / (n + 3)?",
    o : ["360/23", "380/23", "340/23", "400/23"],
    a : 0,
    s : "For n = 20, a_20 = 20(20 − 2) / (20 + 3) = (20 × 18) / 23 = 360/23."
  },
  {
    q : "In an Arithmetic Progression (A.P.), if the first term is a and the common difference is d, the n-th term a_n is:",
    o : ["a + nd", "a + (n − 1)d", "a + (n + 1)d", "2a + (n − 1)d"],
    a : 1,
    s : "By definition, the general term of an A.P. is a_n = a + (n − 1)d."
  },
  {
    q : "Find the sum of all odd integers from 1 to 2001.",
    o : ["1002001", "1000000", "1004004", "1001001"],
    a : 0,
    s : "The odd integers are 1, 3, 5, ..., 2001. Number of terms n = (2001 − 1)/2 + 1 = 1001. Sum = n² = 1001² = 1002001."
  },
  {
    q : "Find the sum of all natural numbers lying between 100 and 1000 which are multiples of 5.",
    o : ["98450", "99550", "98550", "97450"],
    a : 0,
    s : "The numbers are 105, 110, ..., 995. Number of terms n = (995 − 105)/5 + 1 = 179. Sum = (179/2)(105 + 995) = 179 × 550 = 98450."
  },
  {
    q : "In an A.P., the first term is 2 and the sum of the first five terms is one-fourth of the next five terms. What is the 20th term?",
    o : ["−112", "−114", "−116", "−118"],
    a : 0,
    s : "S_5 = (5/2)(4 + 4d) = 10 + 10d. S_10 = 5(4 + 9d) = 20 + 45d. Given S_5 = (1/4)(S_10 − S_5) ⇒ 5S_5 = S_10 ⇒ 50 + 50d = 20 + 45d ⇒ d = −6. Thus a_20 = 2 + 19(−6) = −112."
  },

]
},

{
    title: "Chapter 8 : Sequences and Series ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Sequences and Series ",
    questions: [


  {
    q : "How many terms of the A.P. −6, −11/2, −5, ... are needed to give the sum −25?",
    o : ["5 or 20", "4 or 25", "5 or 15", "10 or 20"],
    a : 0,
    s : "Here a = −6, d = 1/2. Using (n/2)[2(−6) + (n − 1)(1/2)] = −25 gives n² − 25n + 100 = 0, so (n − 5)(n − 20) = 0, yielding n = 5 or 20."
  },
  {
    q : "In an A.P., if the p-th term is 1/q and the q-th term is 1/p (where p ≠ q), what is the sum of the first pq terms?",
    o : ["(pq − 1)/2", "(pq + 1)/2", "pq/2", "pq + 1"],
    a : 1,
    s : "Solving a + (p − 1)d = 1/q and a + (q − 1)d = 1/p gives a = d = 1/(pq). Then S_(pq) = (pq/2)[2/(pq) + (pq − 1)/(pq)] = (pq + 1)/2."
  },
  {
    q : "If the sum of a certain number of terms of the A.P. 25, 22, 19, ... is 116, what is the last term?",
    o : ["1", "4", "7", "10"],
    a : 1,
    s : "a = 25, d = −3. (n/2)[50 + (n − 1)(−3)] = 116 ⇒ 3n² − 53n + 232 = 0 ⇒ (n − 8)(3n − 29) = 0 ⇒ n = 8. Last term a_8 = 25 + 7(−3) = 4."
  },
  {
    q : "Find the sum to n terms of the A.P. whose k-th term is a_k = 5k + 1.",
    o : ["n(5n + 7)/2", "n(5n + 5)/2", "n(5n + 3)/2", "n(5n + 9)/2"],
    a : 0,
    s : "First term a_1 = 6 and n-th term a_n = 5n + 1. Sum S_n = (n/2)(a_1 + a_n) = n(5n + 7)/2."
  },
  {
    q : "If the sum of n terms of an A.P. is pn + qn², where p and q are constants, what is the common difference?",
    o : ["p", "q", "2q", "p + q"],
    a : 2,
    s : "S_1 = a_1 = p + q; S_2 = 2p + 4q ⇒ a_2 = S_2 − S_1 = p + 3q. Hence common difference d = a_2 − a_1 = 2q."
  },
  {
    q : "The sums of n terms of two arithmetic progressions are in the ratio (5n + 4) : (9n + 6). Find the ratio of their 18th terms.",
    o : ["179 : 321", "175 : 315", "184 : 326", "94 : 168"],
    a : 0,
    s : "Ratio of 18th terms = [2a_1 + 34d_1] / [2a_2 + 34d_2], which corresponds to S_35 / S'_35. Substituting n = 35 gives (5(35) + 4) : (9(35) + 6) = 179 : 321."
  },
  {
    q : "If the sum of first p terms of an A.P. is equal to the sum of the first q terms (p ≠ q), then the sum of the first (p + q) terms is:",
    o : ["0", "1", "p + q", "−(p + q)"],
    a : 0,
    s : "S_p = S_q ⇒ (p/2)[2a + (p − 1)d] = (q/2)[2a + (q − 1)d] ⇒ 2a(p − q) + (p² − q² − p + q)d = 0. Dividing by (p − q) gives 2a + (p + q − 1)d = 0, so S_(p + q) = 0."
  },
  {
    q : "What is the arithmetic mean (A.M.) between the numbers 7 and 19?",
    o : ["12", "13", "14", "15"],
    a : 1,
    s : "The arithmetic mean of two numbers a and b is (a + b)/2 = (7 + 19)/2 = 13."
  },
  {
    q : "If 5 arithmetic means are inserted between 8 and 26, what is the 3rd arithmetic mean?",
    o : ["14", "17", "20", "23"],
    a : 1,
    s : "Here a = 8, b = 26, n = 5, so d = (26 − 8)/(5 + 1) = 3. The 3rd A.M. is A_3 = a + 3d = 8 + 9 = 17."
  },
  {
    q : "Between 1 and 31, m numbers have been inserted in such a way that the resulting sequence is an A.P. and the ratio of 7th and (m − 1)-th numbers is 5 : 9. Find the value of m.",
    o : ["12", "13", "14", "15"],
    a : 2,
    s : "Common difference d = 30/(m + 1). Given (1 + 7d)/(1 + (m − 1)d) = 5/9. Substituting d = 30/(m + 1) yields (m + 211)/(31m − 29) = 5/9 ⇒ 9m + 1899 = 155m − 145 ⇒ 146m = 2044 ⇒ m = 14."
  },

]
},

{
    title: "Chapter 8 : Sequences and Series ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Sequences and Series ",
    questions: [


  {
    q : "A man starts repaying a loan as first instalment of Rs. 100. If he increases the instalment by Rs. 5 every month, what amount will he pay in the 30th instalment?",
    o : ["Rs. 240", "Rs. 245", "Rs. 250", "Rs. 255"],
    a : 1,
    s : "This forms an A.P. with a = 100, d = 5. The 30th term is a_30 = 100 + (30 − 1)(5) = 100 + 145 = Rs. 245."
  },
  {
    q : "The difference between any two consecutive interior angles of a polygon is 5°. If the smallest angle is 120°, find the number of sides of the polygon.",
    o : ["9", "16", "9 or 16", "12"],
    a : 0,
    s : "Sum of interior angles = (n − 2)180° = (n/2)[240 + (n − 1)5] ⇒ n² − 25n + 144 = 0 ⇒ n = 9 or 16. For n = 16, largest angle = 120 + 75 = 195° > 180° (impossible for convex polygon), so n = 9."
  },
  {
    q : "Find the 20th term of the Geometric Progression (G.P.) 5/2, 5/4, 5/8, ...",
    o : ["5 / 2^19", "5 / 2^20", "5 / 2^21", "1 / 2^20"],
    a : 1,
    s : "First term a = 5/2 and common ratio r = 1/2. Thus a_20 = a r^19 = (5/2)(1/2)^19 = 5 / 2^20."
  },
  {
    q : "Find the 12th term of a G.P. whose 8th term is 192 and the common ratio is 2.",
    o : ["1536", "3072", "6144", "768"],
    a : 1,
    s : "a_8 = a(2)^7 = 192 ⇒ a = 192/128 = 3/2. Then a_12 = a(2)^11 = (3/2)(2048) = 3072."
  },
  {
    q : "The 5th, 8th, and 11th terms of a G.P. are p, q, and s respectively. Which relation holds true?",
    o : ["q² = ps", "p² = qs", "s² = pq", "2q = p + s"],
    a : 0,
    s : "p = ar^4, q = ar^7, s = ar^10. Notice that ps = (ar^4)(ar^10) = a²r^14 = (ar^7)² = q²."
  },
  {
    q : "The 4th term of a G.P. is the square of its second term, and the first term is −3. Determine its 7th term.",
    o : ["−729", "729", "−2187", "2187"],
    a : 2,
    s : "a_4 = (a_2)² ⇒ ar^3 = (ar)² ⇒ r = a = −3. Thus a_7 = a r^6 = (−3)(−3)^6 = (−3)^7 = −2187."
  },
  {
    q : "Which term of the G.P. √3, 3, 3√3, ... is 729?",
    o : ["10th", "11th", "12th", "13th"],
    a : 2,
    s : "a = √3, r = √3. Set a_n = (√3)^n = 729 = 3^6 = (√3)^12, which gives n = 12."
  },
  {
    q : "For what values of x are the numbers −2/7, x, −7/2 in G.P.?",
    o : ["1", "−1", "±1", "±7/2"],
    a : 2,
    s : "In a G.P., x² = (−2/7)(−7/2) = 1, so x = ±1."
  },
  {
    q : "Find the sum to 20 terms of the G.P. 0.15, 0.015, 0.0015, ...",
    o : ["(1/6)(1 − 0.1^20)", "(1/6)(1 − 0.1^19)", "(1/3)(1 − 0.1^20)", "(5/6)(1 − 0.1^20)"],
    a : 0,
    s : "a = 0.15, r = 0.1. S_20 = 0.15(1 − 0.1^20) / (1 − 0.1) = (0.15 / 0.9)(1 − 0.1^20) = (1/6)(1 − 0.1^20)."
  },
  {
    q : "How many terms of the G.P. 3, 3², 3³, ... are needed to give the sum 120?",
    o : ["3", "4", "5", "6"],
    a : 1,
    s : "S_n = 3(3^n − 1)/(3 − 1) = 120 ⇒ 3^n − 1 = 80 ⇒ 3^n = 81 = 3^4 ⇒ n = 4."
  },

]
},


{
    title: "Chapter 8 : Sequences and Series ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Sequences and Series ",
    questions: [

  {
    q : "The sum of first three terms of a G.P. is 16 and the sum of the next three terms is 128. Determine the common ratio of the G.P.",
    o : ["2", "1/2", "4", "−2"],
    a : 0,
    s : "a + ar + ar² = 16 and ar³ + ar^4 + ar^5 = r³(a + ar + ar²) = 128 ⇒ 16r³ = 128 ⇒ r³ = 8 ⇒ r = 2."
  },
  {
    q : "Given a G.P. with a = 729 and 7th term 64, determine S_7.",
    o : ["2059", "2058", "2187", "1995"],
    a : 0,
    s : "729 r^6 = 64 ⇒ r^6 = 64/729 ⇒ r = ±2/3. For r = 2/3, S_7 = 729(1 − (2/3)^7)/(1 − 2/3) = 3(729 − 128/3) = 2187 − 128 = 2059."
  },
  {
    q : "Find the sum of the sequence 8, 88, 888, 8888, ... to n terms.",
    o : ["(80/81)(10^n − 1) − 8n/9", "(8/81)(10^n − 1) − 8n/9", "(80/9)(10^n − 1) − 8n", "(80/81)(10^n − 1) + 8n/9"],
    a : 0,
    s : "S_n = (8/9)(9 + 99 + 999 + ... to n terms) = (8/9)[(10 − 1) + (10² − 1) + ... + (10^n − 1)] = (8/9)[10(10^n − 1)/9 − n] = (80/81)(10^n − 1) − 8n/9."
  },
  {
    q : "What is the geometric mean (G.M.) of the positive numbers 4 and 16?",
    o : ["6", "8", "10", "12"],
    a : 1,
    s : "The geometric mean of two positive numbers a and b is √(ab) = √(4 × 16) = √64 = 8."
  },
  {
    q : "If two geometric means are inserted between 3 and 81, what are those two numbers?",
    o : ["9 and 27", "6 and 18", "12 and 36", "9 and 36"],
    a : 0,
    s : "Here a = 3, b = 81, n = 2. Common ratio r = (81/3)^(1/3) = 27^(1/3) = 3. The two G.M.s are 3 × 3 = 9 and 9 × 3 = 27."
  },
  {
    q : "Find the value of n so that (a^(n + 1) + b^(n + 1)) / (a^n + b^n) may be the geometric mean between a and b (a ≠ b, a, b > 0).",
    o : ["0", "1/2", "−1/2", "1"],
    a : 2,
    s : "Setting (a^(n + 1) + b^(n + 1))/(a^n + b^n) = a^(1/2) b^(1/2) gives a^(n + 1) − a^(n + 1/2)b^(1/2) = a^(1/2)b^(n + 1/2) − b^(n + 1) ⇒ a^(n + 1/2)(√a − √b) = b^(n + 1/2)(√a − √b) ⇒ (a/b)^(n + 1/2) = 1 ⇒ n = −1/2."
  },
  {
    q : "The sum of two numbers is 6 times their geometric mean. The numbers are in the ratio:",
    o : ["(3 + 2√2) : (3 − 2√2)", "(3 + √2) : (3 − √2)", "(2 + √3) : (2 − √3)", "(6 + √2) : (6 − √2)"],
    a : 0,
    s : "a + b = 6√(ab) ⇒ (a + b)/(2√(ab)) = 3/1. By componendo and dividendo, (√a + √b)² / (√a − √b)² = 4/2 = 2 ⇒ (√a + √b)/(√a − √b) = √2/1. Applying componendo and dividendo again gives √a/√b = (√2 + 1)/(√2 − 1), so a/b = (3 + 2√2)/(3 − 2√2)."
  },
  {
    q : "If A and G be A.M. and G.M., respectively between two positive numbers, which relation is always true?",
    o : ["A ≥ G", "A ≤ G", "A < G", "A = 2G"],
    a : 0,
    s : "Since A − G = (a + b)/2 − √(ab) = (√a − √b)² / 2 ≥ 0, it follows that A ≥ G."
  },
  {
    q : "If A.M. and G.M. of two positive numbers a and b are 10 and 8, respectively, find the numbers.",
    o : ["16 and 4", "12 and 8", "14 and 6", "18 and 2"],
    a : 0,
    s : "a + b = 2(10) = 20 and ab = 8² = 64. The quadratic equation x² − 20x + 64 = 0 gives (x − 16)(x − 4) = 0, so the numbers are 16 and 4."
  },
  {
    q : "What is the sum of the infinite G.P. 1, 1/3, 1/9, 1/27, ...?",
    o : ["3/2", "2/3", "3", "4/3"],
    a : 0,
    s : "Here a = 1 and |r| = 1/3 < 1. The sum to infinity is S_∞ = a / (1 − r) = 1 / (1 − 1/3) = 3/2."
  },

]
},


{
    title: "Chapter 8 : Sequences and Series ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Sequences and Series ",
    questions: [

  {
    q : "Find the sum to infinity of the G.P. 6, 1.2, 0.24, ...",
    o : ["7.2", "7.5", "8.0", "6.5"],
    a : 1,
    s : "Here a = 6 and r = 1.2 / 6 = 0.2. Thus S_∞ = 6 / (1 − 0.2) = 6 / 0.8 = 7.5."
  },
  {
    q : "The sum of an infinite G.P. is 57 and the sum of their cubes is 9747. Find the common ratio.",
    o : ["1/3", "2/3", "1/2", "3/4"],
    a : 1,
    s : "a/(1 − r) = 57 and a³/(1 − r³) = 9747. Cubing the first and dividing by the second gives (1 − r³)/(1 − r)³ = 57³ / 9747 = 19 ⇒ (1 + r + r²)/(1 − r)² = 19 ⇒ 6r² − 13r + 6 = 0 ⇒ r = 2/3 (since |r| < 1)."
  },
  {
    q : "If the p-th, q-th, and r-th terms of a G.P. are a, b, and c respectively, then a^(q − r) · b^(r − p) · c^(p − q) is equal to:",
    o : ["0", "1", "abc", "−1"],
    a : 1,
    s : "Let first term be A and common ratio be R. Then a = A R^(p − 1), b = A R^(q − 1), c = A R^(r − 1). Substituting into the product makes the exponents of both A and R equal to 0, yielding A^0 R^0 = 1."
  },
  {
    q : "If a, b, c, d are in G.P., then (a² + b² + c²)(b² + c² + d²) is equal to:",
    o : ["(ab + bc + cd)²", "(ac + bd)²", "(ab + cd)²", "(a + b + c + d)²"],
    a : 0,
    s : "Since b = ar, c = ar², d = ar³, LHS = a²(1 + r² + r^4) · a²r²(1 + r² + r^4) = a^4 r²(1 + r² + r^4)² = [a²r(1 + r² + r^4)]² = (ab + bc + cd)²."
  },
  {
    q : "A person writes a letter to four of his friends. He asks each one of them to copy the letter and mail to four different persons with instruction that they move the chain similarly. Assuming the chain is not broken and it costs 50 paise to mail one letter, find the amount spent on postage when 8th set of letters is mailed.",
    o : ["Rs. 43690", "Rs. 43690.50", "Rs. 21845", "Rs. 87380"],
    a : 0,
    s : "Number of letters = 4 + 4² + ... + 4^8 = 4(4^8 − 1)/(4 − 1) = 4(65535)/3 = 87380. Cost = 87380 × Rs. 0.50 = Rs. 43690."
  },
  {
    q : "A farmer buys a used tractor for Rs. 12000. He pays Rs. 6000 cash and agrees to pay the balance in annual instalments of Rs. 500 plus 12% interest on the unpaid amount. How much will the tractor cost him?",
    o : ["Rs. 16680", "Rs. 16000", "Rs. 15680", "Rs. 17200"],
    a : 0,
    s : "Unpaid balance = Rs. 6000, paid in 12 instalments of Rs. 500. Total interest = 12% of (6000 + 5500 + ... + 500) = 0.12 × (12/2)(6500) = 0.12 × 39000 = Rs. 4680. Total cost = 12000 + 4680 = Rs. 16680."
  },
  {
    q : "Shamshad Ali buys a scooter for Rs. 22000. He pays Rs. 4000 cash and agrees to pay the balance in annual instalment of Rs. 1000 plus 10% interest on the unpaid amount. How much will the scooter cost him?",
    o : ["Rs. 39100", "Rs. 38100", "Rs. 37100", "Rs. 40100"],
    a : 0,
    s : "Balance = Rs. 18000 in 18 instalments of Rs. 1000. Interest = 10% of (18000 + 17000 + ... + 1000) = 0.10 × (18/2)(19000) = Rs. 17100. Total cost = 22000 + 17100 = Rs. 39100."
  },
  {
    q : "The number of bacteria in a certain culture doubles every hour. If there were 30 bacteria present in the culture originally, how many bacteria will be present at the end of 4th hour?",
    o : ["240", "480", "960", "120"],
    a : 1,
    s : "Original count a = 30, common ratio r = 2. At the end of the 4th hour (5th term of the G.P.), count = 30 × 2^4 = 30 × 16 = 480."
  },
  {
    q : "What will Rs. 500 amounts to in 10 years after its deposit in a bank which pays annual interest rate of 10% compounded annually?",
    o : ["Rs. 500(1.1)^10", "Rs. 500(1.1)^9", "Rs. 500(1.01)^10", "Rs. 5000(1.1)^10"],
    a : 0,
    s : "At the end of 1st year: 500(1.1); 2nd year: 500(1.1)²; ...; at the end of 10th year: Rs. 500(1.1)^10."
  },
  {
    q : "If A.M. and G.M. of roots of a quadratic equation are 8 and 5, respectively, then obtain the quadratic equation.",
    o : ["x² − 16x + 25 = 0", "x² + 16x + 25 = 0", "x² − 8x + 25 = 0", "x² − 16x + 5 = 0"],
    a : 0,
    s : "Let roots be α and β. (α + β)/2 = 8 ⇒ α + β = 16, and √(αβ) = 5 ⇒ αβ = 25. The quadratic equation is x² − (α + β)x + αβ = 0, i.e., x² − 16x + 25 = 0."
  },


]
},


// Chapter 9 : Straight Lines //


{
    title: "Chapter 9 : Straight Lines ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Straight Lines ",
    questions: [

 {
    q : "The distance between the points A(−3, 4) and B(5, −2) is:",
    o : ["6", "8", "10", "14"],
    a : 2,
    s : "Using the distance formula √((x₂ − x₁)² + (y₂ − y₁)²), AB = √((5 − (−3))² + (−2 − 4)²) = √(8² + (−6)²) = √(64 + 36) = √100 = 10."
  },
  {
    q : "The coordinates of the point which divides the line segment joining (1, −3) and (−3, 9) internally in the ratio 1 : 3 are:",
    o : ["(0, 0)", "(−1, 3)", "(1, 0)", "(−2, 6)"],
    a : 0,
    s : "By section formula, x = (1(−3) + 3(1))/(1 + 3) = 0/4 = 0, and y = (1(9) + 3(−3))/(1 + 3) = 0/4 = 0. Thus the point is (0, 0)."
  },
  {
    q : "The area of the triangle whose vertices are (4, 4), (3, −2) and (−3, 16) is:",
    o : ["24 sq. units", "27 sq. units", "36 sq. units", "54 sq. units"],
    a : 1,
    s : "Area = (1/2)|4(−2 − 16) + 3(16 − 4) + (−3)(4 − (−2))| = (1/2)|4(−18) + 3(12) − 3(6)| = (1/2)|−72 + 36 − 18| = (1/2)|−54| = 27 sq. units."
  },
  {
    q : "The centroid of a triangle with vertices (2, 3), (−4, 7) and (5, −1) is:",
    o : ["(1, 3)", "(3, 9)", "(1, 4)", "(2, 3)"],
    a : 0,
    s : "Centroid = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3) = ((2 − 4 + 5)/3, (3 + 7 − 1)/3) = (3/3, 9/3) = (1, 3)."
  },
  {
    q : "If the points (k, 2 − 2k), (−k + 1, 2k) and (−4 − k, 6 − 2k) are collinear for k ≠ 1/2, then the value of k is:",
    o : ["−1", "1", "2", "−2"],
    a : 0,
    s : "Equating slopes between the first two and last two points: (4k − 2)/(1 − 2k) = (6 − 4k)/(−5). Since 1 − 2k ≠ 0, −2 = (6 − 4k)/(−5) ⇒ 10 = 6 − 4k ⇒ 4k = −4 ⇒ k = −1."
  },
  {
    q : "What is the slope of a line whose inclination with the positive direction of the x-axis is 120°?",
    o : ["√3", "−√3", "1/√3", "−1/√3"],
    a : 1,
    s : "Slope m = tan θ = tan 120° = tan(180° − 60°) = −tan 60° = −√3."
  },
  {
    q : "The slope of a line parallel to the y-axis is:",
    o : ["0", "1", "−1", "Not defined"],
    a : 3,
    s : "A line parallel to the y-axis has an inclination θ = 90° with the positive x-axis, and tan 90° is not defined."
  },
  {
    q : "The slope of the line passing through the points (3, −2) and (−1, 4) is:",
    o : ["−3/2", "3/2", "−2/3", "2/3"],
    a : 0,
    s : "Slope m = (y₂ − y₁)/(x₂ − x₁) = (4 − (−2))/(−1 − 3) = 6/(−4) = −3/2."
  },
  {
    q : "Two non-vertical lines with slopes m₁ and m₂ are perpendicular to each other if and only if:",
    o : ["m₁ = m₂", "m₁ + m₂ = 0", "m₁m₂ = −1", "m₁m₂ = 1"],
    a : 2,
    s : "Two non-vertical lines are perpendicular if and only if the product of their slopes is −1, i.e., m₁m₂ = −1."
  },
  {
    q : "If a line passing through (2, 5) and (x, 3) has slope 2, then the value of x is:",
    o : ["1", "2", "3", "−1"],
    a : 0,
    s : "m = (3 − 5)/(x − 2) = 2 ⇒ −2 = 2(x − 2) ⇒ x − 2 = −1 ⇒ x = 1."
  },

]
},


{
    title: "Chapter 9 : Straight Lines ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Straight Lines ",
    questions: [


  {
    q : "The acute angle between the lines having slopes √3 and 1/√3 is:",
    o : ["15°", "30°", "45°", "60°"],
    a : 1,
    s : "tan θ = |(√3 − 1/√3)/(1 + √3 · (1/√3))| = |(2/√3)/2| = 1/√3, which gives θ = 30°."
  },
  {
    q : "If the angle between two lines is π/4 and the slope of one of the lines is 1/2, then the possible slopes of the other line are:",
    o : ["3 or −1/3", "−3 or 1/3", "2 or −1/2", "1 or −1"],
    a : 0,
    s : "tan(π/4) = |(m − 1/2)/(1 + m/2)| = 1 ⇒ |(2m − 1)/(m + 2)| = 1. Solving 2m − 1 = m + 2 gives m = 3, and 2m − 1 = −m − 2 gives m = −1/3."
  },
  {
    q : "The line through (−2, 6) and (4, 8) is perpendicular to the line through (8, 12) and (x, 24). The value of x is:",
    o : ["2", "4", "6", "8"],
    a : 1,
    s : "m₁ = (8 − 6)/(4 − (−2)) = 2/6 = 1/3. Since lines are perpendicular, m₂ = −3. Thus (24 − 12)/(x − 8) = −3 ⇒ 12 = −3x + 24 ⇒ x = 4."
  },
  {
    q : "Without using the distance formula, how can you show that A(−2, −1), B(4, 0), C(3, 3) and D(−3, 2) are vertices of a parallelogram?",
    o : ["Slope of AB = Slope of CD and Slope of BC = Slope of DA", "Slope of AB × Slope of BC = −1", "All four slopes are equal", "Slope of AC = Slope of BD"],
    a : 0,
    s : "m(AB) = (0 + 1)/(4 + 2) = 1/6 and m(CD) = (2 − 3)/(−3 − 3) = 1/6; m(BC) = (3 − 0)/(3 − 4) = −3 and m(DA) = (−1 − 2)/(−2 + 3) = −3. Opposite sides are parallel."
  },
  {
    q : "The angle between the x-axis and the line joining the points (3, −1) and (4, −2) is:",
    o : ["45°", "135°", "60°", "120°"],
    a : 1,
    s : "Slope m = (−2 − (−1))/(4 − 3) = −1/1 = −1. Since tan θ = −1, the inclination θ = 135°."
  },
  {
    q : "The slope of a line is double the slope of another line. If the tangent of the angle between them is 1/3, the slopes of the lines can be:",
    o : ["1 and 2", "1/3 and 2/3", "2 and 4", "−1 and −2"],
    a : 0,
    s : "Let slopes be m and 2m. Then |(2m − m)/(1 + 2m²)| = 1/3 ⇒ 3|m| = 1 + 2m². For m > 0, 2m² − 3m + 1 = 0 ⇒ m = 1 or 1/2. Taking m = 1 gives slopes 1 and 2."
  },
  {
    q : "The equation of the horizontal line passing through the point (−2, 3) is:",
    o : ["x = −2", "y = 3", "x + y = 1", "y = −2"],
    a : 1,
    s : "A horizontal line is parallel to the x-axis and has the form y = k. Since it passes through (−2, 3), its equation is y = 3."
  },
  {
    q : "The equation of the vertical line passing through the point (4, −7) is:",
    o : ["y = −7", "x = 4", "x = −7", "y = 4"],
    a : 1,
    s : "A vertical line is parallel to the y-axis and has the form x = h. Since it passes through (4, −7), its equation is x = 4."
  },
  {
    q : "The equation of the line passing through (−4, 3) with slope 1/2 is:",
    o : ["x − 2y + 10 = 0", "x − 2y − 10 = 0", "2x − y + 11 = 0", "x + 2y − 2 = 0"],
    a : 0,
    s : "Using point-slope form y − y₀ = m(x − x₀): y − 3 = (1/2)(x + 4) ⇒ 2y − 6 = x + 4 ⇒ x − 2y + 10 = 0."
  },
  {
    q : "The equation of the line passing through (0, 0) with slope m is:",
    o : ["y = mx + c", "y = mx", "x = my", "x + y = m"],
    a : 1,
    s : "Using y − 0 = m(x − 0), the equation is y = mx."
  },

]
},


{
    title: "Chapter 9 : Straight Lines ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Straight Lines ",
    questions: [

  {
    q : "The equation of the line passing through (2, 2√3) and inclined with the x-axis at an angle of 75° is:",
    o : ["(2 + √3)x − y = 4", "(2 + √3)x + y = 4", "(2 − √3)x − y = 4", "√3 x − y = 4"],
    a : 0,
    s : "m = tan 75° = 2 + √3. Equation: y − 2√3 = (2 + √3)(x − 2) ⇒ y − 2√3 = (2 + √3)x − 4 − 2√3 ⇒ (2 + √3)x − y = 4."
  },
  {
    q : "The equation of the line intersecting the x-axis at a distance of 3 units to the left of origin with slope −2 is:",
    o : ["2x + y + 6 = 0", "2x + y − 6 = 0", "2x − y + 6 = 0", "x + 2y + 3 = 0"],
    a : 0,
    s : "The line passes through (−3, 0) with slope m = −2. Equation: y − 0 = −2(x + 3) ⇒ 2x + y + 6 = 0."
  },
  {
    q : "The equation of the line intersecting the y-axis at a distance of 2 units above the origin and making an angle of 30° with the positive direction of the x-axis is:",
    o : ["x − √3 y + 2√3 = 0", "√3 x − y + 2 = 0", "x + √3 y − 2√3 = 0", "x − √3 y − 2√3 = 0"],
    a : 0,
    s : "Here c = 2 and m = tan 30° = 1/√3. Using y = mx + c: y = (1/√3)x + 2 ⇒ x − √3 y + 2√3 = 0."
  },
  {
    q : "The equation of the line passing through the points (−1, 1) and (2, −4) is:",
    o : ["5x + 3y + 2 = 0", "5x − 3y + 8 = 0", "3x + 5y − 2 = 0", "5x + 3y − 2 = 0"],
    a : 0,
    s : "Using two-point form: y − 1 = ((−4 − 1)/(2 − (−1)))(x + 1) ⇒ y − 1 = (−5/3)(x + 1) ⇒ 3y − 3 = −5x − 5 ⇒ 5x + 3y + 2 = 0."
  },
  {
    q : "The equation of the line whose perpendicular distance from the origin is 5 units and the angle made by the perpendicular with the positive x-axis is 30° is:",
    o : ["√3 x + y = 10", "x + √3 y = 10", "√3 x − y = 10", "x − √3 y = 10"],
    a : 0,
    s : "Normal form is x cos ω + y sin ω = p. With p = 5 and ω = 30°, x(√3/2) + y(1/2) = 5 ⇒ √3 x + y = 10."
  },
  {
    q : "In ΔPQR with vertices P(2, 1), Q(−2, 3) and R(4, 5), the equation of the median through the vertex R is:",
    o : ["3x − 4y + 8 = 0", "3x + 4y − 32 = 0", "4x − 3y − 1 = 0", "x − 2y + 6 = 0"],
    a : 0,
    s : "Midpoint of PQ is M((2 − 2)/2, (1 + 3)/2) = (0, 2). Line through R(4, 5) and M(0, 2): y − 2 = ((5 − 2)/(4 − 0))(x − 0) ⇒ 4y − 8 = 3x ⇒ 3x − 4y + 8 = 0."
  },
  {
    q : "The equation of the line passing through (−3, 5) and perpendicular to the line through the points (2, 5) and (−3, 6) is:",
    o : ["5x − y + 20 = 0", "x + 5y − 22 = 0", "5x + y + 10 = 0", "x − 5y + 28 = 0"],
    a : 0,
    s : "Slope of given line = (6 − 5)/(−3 − 2) = −1/5. Perpendicular slope = 5. Line through (−3, 5): y − 5 = 5(x + 3) ⇒ 5x − y + 20 = 0."
  },
  {
    q : "A line perpendicular to the line segment joining the points (1, 0) and (2, 3) divides it in the ratio 1 : n. Its equation is:",
    o : ["(n + 1)x + 3(n + 1)y = n + 11", "(n + 1)x + 3(n + 1)y = n + 9", "3(n + 1)x − (n + 1)y = 3", "(n + 1)x − 3(n + 1)y = n − 7"],
    a : 0,
    s : "Dividing point is ((n + 2)/(n + 1), 3/(n + 1)). Slope of segment = 3, so perpendicular slope = −1/3. Equation: y − 3/(n + 1) = (−1/3)(x − (n + 2)/(n + 1)) ⇒ (n + 1)x + 3(n + 1)y = n + 11."
  },
  {
    q : "The equation of the line that cuts off equal intercepts on the coordinate axes and passes through the point (2, 3) is:",
    o : ["x + y = 5", "x − y = −1", "x + y = 6", "2x + 3y = 13"],
    a : 0,
    s : "Intercept form with equal intercepts a = b is x/a + y/a = 1 ⇒ x + y = a. Passing through (2, 3) gives a = 2 + 3 = 5, so x + y = 5."
  },
  {
    q : "The equation of the line passing through the point (2, 2) and cutting off intercepts on the axes whose sum is 9 is:",
    o : ["x + 2y = 6 or 2x + y = 6", "x + 3y = 8 or 3x + y = 8", "x + 4y = 10 or 4x + y = 10", "x − 2y = −2 or 2x − y = 2"],
    a : 0,
    s : "Let intercepts be a and 9 − a. Then 2/a + 2/(9 − a) = 1 ⇒ 18 = a(9 − a) ⇒ a² − 9a + 18 = 0 ⇒ a = 3 or 6. Thus x/3 + y/6 = 1 (2x + y = 6) or x/6 + y/3 = 1 (x + 2y = 6)."
  },


]
},


{
    title: "Chapter 9 : Straight Lines ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Straight Lines ",
    questions: [


  {
    q : "The point R(h, k) divides a line segment between the axes in the ratio 1 : 2 (from x-axis to y-axis). The equation of the line is:",
    o : ["2kx + hy = 3hk", "kx + 2hy = 3hk", "hx + 2ky = 3hk", "2hx + ky = 3hk"],
    a : 0,
    s : "Let intercepts be (a, 0) and (0, b). Using section formula with ratio 1 : 2: h = 2a/3 ⇒ a = 3h/2, and k = b/3 ⇒ b = 3k. Intercept form: x/(3h/2) + y/(3k) = 1 ⇒ 2kx + hy = 3hk."
  },
  {
    q : "By using the concept of equation of a line, if three points (3, 0), (−2, −2) and (8, 2) lie on a line, what is the equation of that line?",
    o : ["2x − 5y − 6 = 0", "2x + 5y − 6 = 0", "5x − 2y − 15 = 0", "2x − 5y + 6 = 0"],
    a : 0,
    s : "Line through (3, 0) and (−2, −2): y − 0 = ((−2 − 0)/(−2 − 3))(x − 3) ⇒ y = (2/5)(x − 3) ⇒ 2x − 5y − 6 = 0. Substituting (8, 2) gives 16 − 10 − 6 = 0, confirming collinearity."
  },
  {
    q : "The slope and y-intercept of the line 3x + 2y − 12 = 0 respectively are:",
    o : ["−3/2 and 6", "3/2 and 6", "−3/2 and −6", "−2/3 and 4"],
    a : 0,
    s : "Rewriting in slope-intercept form y = mx + c: 2y = −3x + 12 ⇒ y = (−3/2)x + 6. Hence m = −3/2 and c = 6."
  },
  {
    q : "The x-intercept and y-intercept of the line 4x − 3y = 6 respectively are:",
    o : ["3/2 and −2", "−3/2 and 2", "2 and −3/2", "3/2 and 2"],
    a : 0,
    s : "Dividing by 6 gives x/(6/4) + y/(6/(−3)) = 1 ⇒ x/(3/2) + y/(−2) = 1. Thus x-intercept = 3/2 and y-intercept = −2."
  },
  {
    q : "When the equation x − √3 y + 8 = 0 is reduced to normal form x cos ω + y sin ω = p, the values of ω and p are:",
    o : ["ω = 120°, p = 4", "ω = 60°, p = 4", "ω = 150°, p = 4", "ω = 30°, p = 8"],
    a : 0,
    s : "−x + √3 y = 8. Dividing by √((−1)² + (√3)²) = 2 gives (−1/2)x + (√3/2)y = 4. Comparing with x cos ω + y sin ω = p gives cos ω = −1/2, sin ω = √3/2 ⇒ ω = 120° and p = 4."
  },
  {
    q : "The perpendicular distance of the point (−1, 1) from the line 12(x + 6) = 5(y − 2) is:",
    o : ["3 units", "4 units", "5 units", "6 units"],
    a : 2,
    s : "Line equation: 12x − 5y + 82 = 0. Distance d = |12(−1) − 5(1) + 82| / √(12² + (−5)²) = |−12 − 5 + 82| / 13 = 65/13 = 5 units."
  },
  {
    q : "Which of the following points on the x-axis has a perpendicular distance of 4 units from the line x/3 + y/4 = 1?",
    o : ["(8, 0)", "(−2, 0)", "Both (8, 0) and (−2, 0)", "(4, 0)"],
    a : 2,
    s : "Line is 4x + 3y − 12 = 0. Let point be (a, 0). Then |4a − 12|/5 = 4 ⇒ |4a − 12| = 20 ⇒ 4a − 12 = 20 (a = 8) or 4a − 12 = −20 (a = −2)."
  },
  {
    q : "The distance between the parallel lines 15x + 8y − 34 = 0 and 15x + 8y + 31 = 0 is:",
    o : ["65/17", "3/17", "65/23", "5"],
    a : 0,
    s : "Distance between parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0 is |C₁ − C₂|/√(A² + B²) = |−34 − 31|/√(15² + 8²) = 65/17."
  },
  {
    q : "The distance between the parallel lines l(x + y) + p = 0 and l(x + y) − r = 0 (where l > 0) is:",
    o : ["|p + r| / (l√2)", "|p − r| / (l√2)", "|p + r| / √2", "|p − r| / 2l"],
    a : 0,
    s : "Rewrite lines as lx + ly + p = 0 and lx + ly − r = 0. Distance = |p − (−r)| / √(l² + l²) = |p + r| / (l√2)."
  },
  {
    q : "The equation of the line parallel to the line 3x − 4y + 2 = 0 and passing through the point (−2, 3) is:",
    o : ["3x − 4y + 18 = 0", "3x − 4y − 18 = 0", "4x + 3y − 1 = 0", "3x + 4y − 6 = 0"],
    a : 0,
    s : "A line parallel to 3x − 4y + 2 = 0 has the form 3x − 4y + k = 0. Substituting (−2, 3): 3(−2) − 4(3) + k = 0 ⇒ k = 18. Hence 3x − 4y + 18 = 0."
  },

]
},


{
    title: "Chapter 9 : Straight Lines ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Straight Lines ",
    questions: [

  {
    q : "The equation of the line perpendicular to the line x − 7y + 5 = 0 and having x-intercept 3 is:",
    o : ["7x + y − 21 = 0", "7x − y − 21 = 0", "x + 7y − 3 = 0", "7x + y + 21 = 0"],
    a : 0,
    s : "A line perpendicular to x − 7y + 5 = 0 has the form 7x + y = k. Since it passes through (3, 0), k = 7(3) + 0 = 21. Thus 7x + y − 21 = 0."
  },
  {
    q : "The acute angle between the lines y − √3 x − 5 = 0 and √3 y − x + 6 = 0 is:",
    o : ["30°", "45°", "60°", "90°"],
    a : 0,
    s : "Slopes are m₁ = √3 and m₂ = 1/√3. tan θ = |(√3 − 1/√3)/(1 + 1)| = (2/√3)/2 = 1/√3 ⇒ θ = 30°."
  },
  {
    q : "The line through the points (h, 3) and (4, 1) intersects the line 7x − 9y − 19 = 0 at a right angle. The value of h is:",
    o : ["22/9", "14/9", "−22/9", "2"],
    a : 0,
    s : "Slope of second line = 7/9, so slope of first line = −9/7. Thus (1 − 3)/(4 − h) = −9/7 ⇒ −14 = −36 + 9h ⇒ 9h = 22 ⇒ h = 22/9."
  },
  {
    q : "The equation of the line through the point (x₁, y₁) and parallel to the line Ax + By + C = 0 is:",
    o : ["A(x − x₁) + B(y − y₁) = 0", "B(x − x₁) − A(y − y₁) = 0", "A(x + x₁) + B(y + y₁) = 0", "Ax + By = 0"],
    a : 0,
    s : "Since the slope is −A/B and the line passes through (x₁, y₁), y − y₁ = (−A/B)(x − x₁), which simplifies to A(x − x₁) + B(y − y₁) = 0."
  },
  {
    q : "The coordinates of the foot of the perpendicular from the point (−1, 3) to the line 3x − 4y − 16 = 0 are:",
    o : ["(68/25, −49/25)", "(−68/25, 49/25)", "(4, −1)", "(3, −4)"],
    a : 0,
    s : "Using (x − x₁)/A = (y − y₁)/B = −(Ax₁ + By₁ + C)/(A² + B²): (x + 1)/3 = (y − 3)/(−4) = −(−3 − 12 − 16)/25 = 31/25. Thus x = 93/25 − 1 = 68/25 and y = 3 − 124/25 = −49/25."
  },
  {
    q : "The perpendicular from the origin to the line y = mx + c meets it at the point (−1, 2). The values of m and c are:",
    o : ["m = 1/2, c = 5/2", "m = −1/2, c = 3/2", "m = 2, c = 4", "m = −2, c = 0"],
    a : 0,
    s : "Slope of perpendicular from (0, 0) to (−1, 2) is (2 − 0)/(−1 − 0) = −2. Hence slope of line m = 1/2. Since (−1, 2) lies on y = (1/2)x + c, 2 = −1/2 + c ⇒ c = 5/2."
  },
  {
    q : "If p and q are the lengths of perpendiculars from the origin to the lines x cos θ − y sin θ = k cos 2θ and x sec θ + y cosec θ = k respectively, then p² + 4q² is equal to:",
    o : ["k²", "2k²", "4k²", "k²/2"],
    a : 0,
    s : "p = |k cos 2θ| and q = |k|/√(sec²θ + cosec²θ) = |k sin θ cos θ| = |(k/2) sin 2θ|. Therefore, p² + 4q² = k² cos²2θ + 4(k²/4) sin²2θ = k²(cos²2θ + sin²2θ) = k²."
  },
  {
    q : "In ΔABC with vertices A(2, 3), B(4, −1) and C(1, 2), the length of the altitude from vertex A to side BC is:",
    o : ["√2", "2√2", "3√2", "4√2"],
    a : 0,
    s : "Equation of BC: y + 1 = ((2 + 1)/(1 − 4))(x − 4) ⇒ x + y − 3 = 0. Altitude from A(2, 3) = |2 + 3 − 3|/√(1² + 1²) = 2/√2 = √2."
  },
  {
    q : "If p is the length of the perpendicular from the origin to the line whose intercepts on the axes are a and b, then:",
    o : ["1/p² = 1/a² + 1/b²", "p² = a² + b²", "1/p = 1/a + 1/b", "p² = 1/a² + 1/b²"],
    a : 0,
    s : "Line is x/a + y/b − 1 = 0. Distance from (0, 0) is p = |−1|/√(1/a² + 1/b²). Squaring and taking reciprocals gives 1/p² = 1/a² + 1/b²."
  },
  {
    q : "What are the points on the y-axis whose perpendicular distance from the line x/3 + y/4 = 1 is 4 units?",
    o : ["(0, 32/3) and (0, −8/3)", "(0, 8) and (0, −2)", "(0, 16/3) and (0, −4/3)", "(0, 12) and (0, −4)"],
    a : 0,
    s : "Line is 4x + 3y − 12 = 0. Let point be (0, b). Then |3b − 12|/5 = 4 ⇒ |3b − 12| = 20 ⇒ 3b − 12 = 20 (b = 32/3) or 3b − 12 = −20 (b = −8/3)."
  },

]
},


// Chapter 10 : Conic Sections //


{
    title: "Chapter 10 : Conic Sections ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Conic Sections ",
    questions: [

{
    q : "When a plane cuts a double-napped right circular cone at an angle α with the axis such that α = 90° (without passing through the vertex), the section obtained is a:",
    o : ["Circle", "Ellipse", "Parabola", "Hyperbola"],
    a : 0,
    s : "When the cutting plane is perpendicular to the axis of the cone (α = 90°) and does not pass through the vertex, the conic section is a circle."
  },
  {
    q : "If β is the semi-vertical angle of a cone and α is the angle made by the cutting plane with the axis (not passing through the vertex), a parabola is obtained when:",
    o : ["α = 90°", "β < α < 90°", "α = β", "0 ≤ α < β"],
    a : 2,
    s : "When the plane is parallel to a generator of the cone, i.e., α = β, the section formed is a parabola."
  },
  {
    q : "When the cutting plane makes an angle α with the axis of the cone such that 0 ≤ α < β (where β is the semi-vertical angle) and does not pass through the vertex, the section is a:",
    o : ["Circle", "Ellipse", "Parabola", "Hyperbola"],
    a : 3,
    s : "For 0 ≤ α < β, the plane cuts both nappes of the cone, yielding a hyperbola."
  },
  {
    q : "If a plane passes through the vertex of a double-napped cone with α = β, the degenerate conic obtained is:",
    o : ["A single point", "A single straight line", "A pair of intersecting straight lines", "A circle"],
    a : 1,
    s : "When the plane passes through the vertex with α = β, it touches the cone along one generator, forming a single straight line."
  },
  {
    q : "The equation of the circle with centre (−2, 3) and radius 4 is:",
    o : ["x² + y² + 4x − 6y − 3 = 0", "x² + y² − 4x + 6y − 3 = 0", "x² + y² + 4x − 6y + 3 = 0", "x² + y² + 4x − 6y − 16 = 0"],
    a : 0,
    s : "(x + 2)² + (y − 3)² = 4² ⇒ x² + 4x + 4 + y² − 6y + 9 = 16 ⇒ x² + y² + 4x − 6y − 3 = 0."
  },
  {
    q : "The centre and radius of the circle x² + y² − 4x − 8y − 45 = 0 are respectively:",
    o : ["(2, 4) and 8", "(−2, −4) and √65", "(2, 4) and √65", "(4, 8) and √65"],
    a : 2,
    s : "Comparing with x² + y² + 2gx + 2fy + c = 0, g = −2, f = −4, c = −45. Centre = (−g, −f) = (2, 4) and radius = √(4 + 16 − (−45)) = √65."
  },
  {
    q : "The radius of the circle 2x² + 2y² − x = 0 is:",
    o : ["1/2", "1/4", "1", "1/8"],
    a : 1,
    s : "Dividing by 2 gives x² + y² − (1/2)x = 0. Here g = −1/4, f = 0, c = 0, so radius = √((−1/4)² + 0 − 0) = 1/4."
  },
  {
    q : "Does the point (−2.5, 3.5) lie inside, outside, or on the circle x² + y² = 25?",
    o : ["Inside the circle", "Outside the circle", "On the circle", "At the centre of the circle"],
    a : 0,
    s : "Distance squared from origin (0, 0) is (−2.5)² + (3.5)² = 6.25 + 12.25 = 18.5 < 25. Hence the point lies inside the circle."
  },
  {
    q : "The equation of the circle with centre (2, 2) and passing through the point (4, 5) is:",
    o : ["x² + y² − 4x − 4y − 5 = 0", "x² + y² − 4x − 4y + 5 = 0", "x² + y² + 4x + 4y − 5 = 0", "x² + y² − 4x − 4y − 13 = 0"],
    a : 0,
    s : "Radius squared r² = (4 − 2)² + (5 − 2)² = 4 + 9 = 13. Equation: (x − 2)² + (y − 2)² = 13 ⇒ x² + y² − 4x − 4y − 5 = 0."
  },
  {
    q : "The equation of the circle passing through (0, 0) and making intercepts a and b on the coordinate axes is:",
    o : ["x² + y² − ax − by = 0", "x² + y² + ax + by = 0", "x² + y² − 2ax − 2by = 0", "x² + y² + 2ax + 2by = 0"],
    a : 0,
    s : "The circle passes through (0, 0), (a, 0), and (0, b). The join of (a, 0) and (0, b) is a diameter, so (x − a)(x − 0) + (y − 0)(y − b) = 0 ⇒ x² + y² − ax − by = 0."
  },

]
},

{
    title: "Chapter 10 : Conic Sections ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Conic Sections ",
    questions: [

  {
    q : "The equation of the circle whose diameter has endpoints (−1, 2) and (3, −4) is:",
    o : ["x² + y² − 2x + 2y − 11 = 0", "x² + y² + 2x − 2y − 11 = 0", "x² + y² − 2x + 2y + 11 = 0", "x² + y² − 4x + 6y − 11 = 0"],
    a : 0,
    s : "Using diameter form (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0: (x + 1)(x − 3) + (y − 2)(y + 4) = 0 ⇒ x² − 2x − 3 + y² + 2y − 8 = 0 ⇒ x² + y² − 2x + 2y − 11 = 0."
  },
  {
    q : "The eccentricity of a parabola is always equal to:",
    o : ["0", "1", "Less than 1", "Greater than 1"],
    a : 1,
    s : "A parabola is the locus of a point equidistant from the focus and the directrix, so its eccentricity e = 1."
  },
  {
    q : "For the parabola y² = 12x, the coordinates of the focus and the equation of the directrix are respectively:",
    o : ["(3, 0) and x = −3", "(−3, 0) and x = 3", "(0, 3) and y = −3", "(3, 0) and x = 3"],
    a : 0,
    s : "Comparing y² = 12x with y² = 4ax gives 4a = 12 ⇒ a = 3. Focus is (a, 0) = (3, 0) and directrix is x = −a, i.e., x = −3."
  },
  {
    q : "The length of the latus rectum of the parabola x² = −16y is:",
    o : ["4", "8", "16", "32"],
    a : 2,
    s : "Comparing x² = −16y with x² = −4ay gives 4a = 16. The length of the latus rectum is 4a = 16."
  },
  {
    q : "The focus of the parabola y² = −8x is:",
    o : ["(2, 0)", "(−2, 0)", "(0, 2)", "(0, −2)"],
    a : 1,
    s : "Comparing y² = −8x with y² = −4ax gives 4a = 8 ⇒ a = 2. Since it opens leftward, the focus is (−a, 0) = (−2, 0)."
  },
  {
    q : "The equation of the directrix of the parabola x² = 6y is:",
    o : ["y = 3/2", "y = −3/2", "x = −3/2", "y = −6"],
    a : 1,
    s : "Comparing x² = 6y with x² = 4ay gives 4a = 6 ⇒ a = 3/2. Since it opens upward, the directrix is y = −a = −3/2."
  },
  {
    q : "The equation of the parabola with focus (6, 0) and directrix x = −6 is:",
    o : ["y² = 6x", "y² = 12x", "y² = 24x", "x² = 24y"],
    a : 2,
    s : "Here a = 6 and the parabola opens rightward (y² = 4ax). Hence y² = 4(6)x = 24x."
  },
  {
    q : "The equation of the parabola with vertex (0, 0) and focus (0, −2) is:",
    o : ["x² = 8y", "x² = −8y", "y² = −8x", "y² = 8x"],
    a : 1,
    s : "Focus (0, −2) lies on the negative y-axis, so the parabola opens downward: x² = −4ay with a = 2, giving x² = −8y."
  },
  {
    q : "The equation of the parabola with vertex (0, 0), passing through (2, 3), and having its axis along the x-axis is:",
    o : ["y² = (9/2)x", "y² = (2/9)x", "x² = (4/3)y", "y² = 9x"],
    a : 0,
    s : "Since the axis is the x-axis and it passes through (2, 3) in the first quadrant, its equation is y² = 4ax. Substituting (2, 3): 9 = 4a(2) ⇒ 4a = 9/2, so y² = (9/2)x."
  },
  {
    q : "The equation of the parabola with vertex (0, 0), passing through (5, 2), and symmetric with respect to the y-axis is:",
    o : ["2x² = 25y", "25x² = 2y", "5x² = 2y", "2y² = 5x"],
    a : 0,
    s : "Symmetry about the y-axis with vertex (0, 0) and passing through (5, 2) gives x² = 4ay. Substituting (5, 2): 25 = 4a(2) ⇒ 4a = 25/2, so x² = (25/2)y ⇒ 2x² = 25y."
  },

]
},

{
    title: "Chapter 10 : Conic Sections ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Conic Sections ",
    questions: [

  {
    q : "An equilateral triangle is inscribed in the parabola y² = 4ax where one vertex is at the vertex of the parabola. The length of the side of the triangle is:",
    o : ["4a√3", "8a√3", "2a√3", "a√3"],
    a : 1,
    s : "Let the side be l. By symmetry, the other two vertices are (l cos 30°, ±l sin 30°) = (l√3/2, ±l/2). Substituting into y² = 4ax gives l²/4 = 4a(l√3/2) ⇒ l = 8a√3."
  },
  {
    q : "In a standard ellipse x²/a² + y²/b² = 1 (a > b), the relationship between a, b, and c (where c is the distance of a focus from the centre) is:",
    o : ["c² = a² + b²", "c² = a² − b²", "a² = b² − c²", "b² = a² + c²"],
    a : 1,
    s : "For an ellipse with semi-major axis a and semi-minor axis b, the focal distance c satisfies c = √(a² − b²), so c² = a² − b²."
  },
  {
    q : "For the ellipse x²/36 + y²/16 = 1, the coordinates of the foci are:",
    o : ["(±2√5, 0)", "(0, ±2√5)", "(±6, 0)", "(±4, 0)"],
    a : 0,
    s : "Here a² = 36, b² = 16 (major axis along x-axis). c = √(36 − 16) = √20 = 2√5. Foci are (±c, 0) = (±2√5, 0)."
  },
  {
    q : "For the ellipse x²/4 + y²/25 = 1, the length of the major axis and minor axis are respectively:",
    o : ["10 and 4", "4 and 10", "25 and 4", "5 and 2"],
    a : 0,
    s : "Since 25 > 4, the major axis is along the y-axis with a = 5 and b = 2. Length of major axis = 2a = 10 and minor axis = 2b = 4."
  },
  {
    q : "The eccentricity of the ellipse 9x² + 4y² = 36 is:",
    o : ["√5/3", "√5/2", "2/3", "5/9"],
    a : 0,
    s : "Dividing by 36 gives x²/4 + y²/9 = 1. Here a² = 9, b² = 4, so c = √(9 − 4) = √5. Eccentricity e = c/a = √5/3."
  },
  {
    q : "The length of the latus rectum of the ellipse x²/100 + y²/400 = 1 is:",
    o : ["5", "10", "20", "40"],
    a : 1,
    s : "Here a² = 400 (a = 20) and b² = 100 (b = 10). Length of latus rectum = 2b²/a = (2 × 100)/20 = 10."
  },
  {
    q : "The equation of the ellipse with vertices (±5, 0) and foci (±4, 0) is:",
    o : ["x²/25 + y²/9 = 1", "x²/9 + y²/25 = 1", "x²/25 + y²/16 = 1", "x²/16 + y²/25 = 1"],
    a : 0,
    s : "Vertices (±5, 0) ⇒ a = 5, major axis along x-axis. Foci (±4, 0) ⇒ c = 4. b² = a² − c² = 25 − 16 = 9. Equation: x²/25 + y²/9 = 1."
  },
  {
    q : "The equation of the ellipse with ends of major axis (0, ±√5) and ends of minor axis (±1, 0) is:",
    o : ["x²/5 + y²/1 = 1", "x²/1 + y²/5 = 1", "x²/25 + y²/1 = 1", "x²/1 + y²/25 = 1"],
    a : 1,
    s : "Major axis is along the y-axis with a = √5 and b = 1. Thus the equation is x²/b² + y²/a² = 1 ⇒ x²/1 + y²/5 = 1."
  },
  {
    q : "The equation of the ellipse with foci (±3, 0) and length of semi-major axis 4 is:",
    o : ["x²/16 + y²/7 = 1", "x²/7 + y²/16 = 1", "x²/16 + y²/9 = 1", "x²/25 + y²/16 = 1"],
    a : 0,
    s : "Here c = 3 and a = 4, with major axis along x-axis. b² = a² − c² = 16 − 9 = 7. Equation: x²/16 + y²/7 = 1."
  },
  {
    q : "The equation of the ellipse with centre at (0, 0), major axis on the y-axis, and passing through the points (3, 2) and (1, 6) is:",
    o : ["x²/10 + y²/40 = 1", "x²/40 + y²/10 = 1", "x²/9 + y²/36 = 1", "x²/16 + y²/36 = 1"],
    a : 0,
    s : "Equation is x²/b² + y²/a² = 1. Substituting (3, 2) and (1, 6): 9/b² + 4/a² = 1 and 1/b² + 36/a² = 1. Solving gives b² = 10 and a² = 40, so x²/10 + y²/40 = 1."
  },

]
},

{
    title: "Chapter 10 : Conic Sections ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Conic Sections ",
    questions: [


  {
    q : "A rod AB of length 15 cm rests in between two coordinate axes in such a way that the end point A lies on the x-axis and end point B lies on the y-axis. A point P(x, y) is taken on the rod in such a way that AP = 6 cm. The locus of P is:",
    o : ["x²/81 + y²/36 = 1", "x²/36 + y²/81 = 1", "x²/225 + y²/36 = 1", "x²/81 + y²/225 = 1"],
    a : 0,
    s : "PB = 15 − 6 = 9 cm. If the rod makes angle θ with the x-axis, x = PB cos θ = 9 cos θ and y = AP sin θ = 6 sin θ. Eliminating θ gives x²/81 + y²/36 = 1."
  },
  {
    q : "The sum of the focal distances of any point on the ellipse x²/25 + y²/9 = 1 is:",
    o : ["5", "6", "8", "10"],
    a : 3,
    s : "By definition of an ellipse, the sum of distances of any point on it from the two foci is equal to the length of the major axis 2a = 2(5) = 10."
  },
  {
    q : "In a standard hyperbola x²/a² − y²/b² = 1, the relationship between a, b, and c (focal distance from the centre) is:",
    o : ["c² = a² − b²", "c² = a² + b²", "a² = b² + c²", "b² = a² − c²"],
    a : 1,
    s : "For a hyperbola, the distance from the centre to either focus satisfies c = √(a² + b²), so c² = a² + b²."
  },
  {
    q : "For the hyperbola x²/16 − y²/9 = 1, the coordinates of the foci are:",
    o : ["(±5, 0)", "(0, ±5)", "(±4, 0)", "(±√7, 0)"],
    a : 0,
    s : "Here a² = 16, b² = 9, transverse axis along x-axis. c = √(16 + 9) = 5. Foci are (±5, 0)."
  },
  {
    q : "For the hyperbola y²/9 − x²/27 = 1, the coordinates of the vertices are:",
    o : ["(±3, 0)", "(0, ±3)", "(0, ±3√3)", "(±3√3, 0)"],
    a : 1,
    s : "Since the y² term is positive, the transverse axis is along the y-axis with a² = 9 ⇒ a = 3. Vertices are (0, ±a) = (0, ±3)."
  },
  {
    q : "The eccentricity of the hyperbola 9y² − 4x² = 36 is:",
    o : ["√13/2", "√13/3", "√5/2", "3/2"],
    a : 0,
    s : "Dividing by 36 gives y²/4 − x²/9 = 1. Here a² = 4, b² = 9, so c = √(4 + 9) = √13. Eccentricity e = c/a = √13/2."
  },
  {
    q : "The length of the latus rectum of the hyperbola 16x² − 9y² = 576 is:",
    o : ["32/3", "64/3", "16/3", "8/3"],
    a : 1,
    s : "Dividing by 576 gives x²/36 − y²/64 = 1. Here a² = 36 (a = 6) and b² = 64. Length of latus rectum = 2b²/a = (2 × 64)/6 = 64/3."
  },
  {
    q : "The length of the transverse axis and conjugate axis of the hyperbola 49y² − 16x² = 784 are respectively:",
    o : ["8 and 14", "14 and 8", "4 and 7", "7 and 4"],
    a : 0,
    s : "Dividing by 784 gives y²/16 − x²/49 = 1. Here a² = 16 (a = 4) and b² = 49 (b = 7). Transverse axis = 2a = 8, conjugate axis = 2b = 14."
  },
  {
    q : "The equation of the hyperbola with vertices (±2, 0) and foci (±3, 0) is:",
    o : ["x²/4 − y²/5 = 1", "x²/5 − y²/4 = 1", "x²/4 − y²/9 = 1", "y²/4 − x²/5 = 1"],
    a : 0,
    s : "Vertices (±2, 0) ⇒ a = 2, transverse axis along x-axis. Foci (±3, 0) ⇒ c = 3. b² = c² − a² = 9 − 4 = 5. Equation: x²/4 − y²/5 = 1."
  },
  {
    q : "The equation of the hyperbola with vertices (0, ±5) and foci (0, ±8) is:",
    o : ["y²/25 − x²/39 = 1", "y²/39 − x²/25 = 1", "x²/25 − y²/39 = 1", "y²/25 − x²/64 = 1"],
    a : 0,
    s : "Transverse axis is along the y-axis with a = 5 and c = 8. b² = c² − a² = 64 − 25 = 39. Equation: y²/25 − x²/39 = 1."
  },

]
},


{
    title: "Chapter 10 : Conic Sections ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Conic Sections ",
    questions: [

  {
    q : "The equation of the hyperbola with foci (0, ±13) and conjugate axis of length 24 is:",
    o : ["y²/25 − x²/144 = 1", "y²/144 − x²/25 = 1", "x²/25 − y²/144 = 1", "y²/169 − x²/144 = 1"],
    a : 0,
    s : "Foci (0, ±13) ⇒ transverse axis along y-axis, c = 13. Conjugate axis 2b = 24 ⇒ b = 12. a² = c² − b² = 169 − 144 = 25. Equation: y²/25 − x²/144 = 1."
  },
  {
    q : "The equation of the hyperbola with foci (±3√5, 0) and length of the latus rectum 8 is:",
    o : ["x²/25 − y²/20 = 1", "x²/20 − y²/25 = 1", "x²/25 − y²/16 = 1", "x²/9 − y²/36 = 1"],
    a : 0,
    s : "c = 3√5 ⇒ a² + b² = 45. Latus rectum 2b²/a = 8 ⇒ b² = 4a. Thus a² + 4a − 45 = 0 ⇒ (a + 9)(a − 5) = 0 ⇒ a = 5 (since a > 0), and b² = 20. Equation: x²/25 − y²/20 = 1."
  },
  {
    q : "The equation of the hyperbola with vertices (±7, 0) and eccentricity e = 4/3 is:",
    o : ["x²/49 − 9y²/343 = 1", "x²/49 − y²/343 = 1", "9x²/49 − y²/343 = 1", "x²/343 − 9y²/49 = 1"],
    a : 0,
    s : "a = 7 and e = c/a = 4/3 ⇒ c = 28/3. b² = c² − a² = 784/9 − 49 = 343/9. Equation: x²/49 − y²/(343/9) = 1 ⇒ x²/49 − 9y²/343 = 1."
  },
  {
    q : "The equation of the hyperbola with foci (0, ±√10) and passing through (2, 3) is:",
    o : ["y²/5 − x²/5 = 1", "y²/4 − x²/6 = 1", "y²/6 − x²/4 = 1", "y²/8 − x²/2 = 1"],
    a : 0,
    s : "Transverse axis is along y-axis with c = √10 ⇒ a² + b² = 10. Substituting (2, 3) into y²/a² − x²/b² = 1 gives 9/a² − 4/(10 − a²) = 1. Solving gives a² = 5 (since a² < 10) and b² = 5, so y²/5 − x²/5 = 1."
  },
  {
    q : "If a parabolic reflector is 20 cm in diameter and 5 cm deep, the distance of the focus from the vertex is:",
    o : ["2.5 cm", "5 cm", "10 cm", "15 cm"],
    a : 1,
    s : "Let the parabola be y² = 4ax with vertex at (0, 0). The rim passes through (5, 10). Substituting gives 10² = 4a(5) ⇒ 100 = 20a ⇒ a = 5 cm."
  },
  {
    q : "An arch is in the form of a parabola with its axis vertical. The arch is 10 m high and 5 m wide at the base. How wide is it 2 m from the vertex of the parabola?",
    o : ["√5 m", "2√5 m", "5/√5 m", "√10 m"],
    a : 0,
    s : "Take vertex at (0, 0) opening downward: x² = −4ay. Base passes through (5/2, −10), so 25/4 = 40a ⇒ 4a = 5/8. At y = −2, x² = (5/8)(2) = 5/4 ⇒ x = √5/2. Total width = 2x = √5 m."
  },
  {
    q : "The cable of a uniformly loaded suspension bridge hangs in the form of a parabola. The roadway which is horizontal and 100 m long is supported by vertical wires attached to the cable, the longest wire being 30 m and the shortest being 6 m. What is the length of a supporting wire attached to the roadway 18 m from the middle?",
    o : ["9.11 m", "10.5 m", "12.4 m", "15.2 m"],
    a : 0,
    s : "Take the lowest point of the cable as vertex (0, 0), so x² = 4ay. The tower top is at (50, 30 − 6) = (50, 24), giving 2500 = 4a(24) ⇒ 4a = 625/6. At x = 18, y = 324 / (625/6) = 1944/625 ≈ 3.11 m. Wire length = 6 + 3.11 = 9.11 m."
  },
  {
    q : "An arch is in the form of a semi-ellipse. It is 8 m wide and 2 m high at the centre. What is the height of the arch at a point 1.5 m from one end?",
    o : ["√39/4 m", "√39/2 m", "3/2 m", "√15/2 m"],
    a : 0,
    s : "Here 2a = 8 ⇒ a = 4 and b = 2, so x²/16 + y²/4 = 1. A point 1.5 m from one end has x = 4 − 1.5 = 2.5 = 5/2. Then (25/4)/16 + y²/4 = 1 ⇒ y²/4 = 39/64 ⇒ y = √39/4 m."
  },
  {
    q : "A man running a racecourse notes that the sum of the distances from the two flag posts from him is always 10 m and the distance between the flag posts is 8 m. The equation of the posts traced by the man (taking origin at midpoint of posts) is:",
    o : ["x²/25 + y²/9 = 1", "x²/9 + y²/25 = 1", "x²/100 + y²/64 = 1", "x²/25 + y²/16 = 1"],
    a : 0,
    s : "Sum of focal distances 2a = 10 ⇒ a = 5. Distance between foci 2c = 8 ⇒ c = 4. Thus b² = a² − c² = 25 − 16 = 9, giving x²/25 + y²/9 = 1."
  },
  {
    q : "The difference of the focal distances of any point on the hyperbola x²/9 − y²/16 = 1 is:",
    o : ["3", "4", "6", "8"],
    a : 2,
    s : "By definition of a hyperbola, the absolute difference of distances of any point on it from the two foci is equal to the length of the transverse axis 2a = 2(3) = 6."
  }


]
},



// Chapter 11 : Introduction to Three Dimensional Geometry //


{
    title: "Chapter 11 : Introduction to Three Dimensional Geometry ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

{
    q : "In three-dimensional space, the three coordinate planes divide the space into how many octants?",
    o : ["4", "6", "8", "12"],
    a : 2,
    s : "The XY-plane, YZ-plane, and ZX-plane intersect mutually perpendicularly at the origin, dividing 3D space into 8 parts called octants."
  },
  {
    q : "What are the coordinates of any point lying on the X-axis in 3D space?",
    o : ["(x, y, 0)", "(x, 0, 0)", "(0, y, 0)", "(0, 0, z)"],
    a : 1,
    s : "Every point on the X-axis has both its y-coordinate and z-coordinate equal to zero, so its coordinates are of the form (x, 0, 0)."
  },
  {
    q : "What are the coordinates of any point lying on the Z-axis in 3D space?",
    o : ["(0, 0, z)", "(0, y, 0)", "(x, 0, 0)", "(x, y, 0)"],
    a : 0,
    s : "On the Z-axis, both the x-coordinate and y-coordinate are zero, so any point has coordinates (0, 0, z)."
  },
  {
    q : "A point lies in the XZ-plane. What can be said about its coordinates?",
    o : ["Its x-coordinate is zero", "Its y-coordinate is zero", "Its z-coordinate is zero", "Both x and z coordinates are zero"],
    a : 1,
    s : "For every point in the XZ-plane, the perpendicular distance from the XZ-plane is zero, meaning its y-coordinate is 0."
  },
  {
    q : "If a point lies in the YZ-plane, its coordinates are of the form:",
    o : ["(x, y, 0)", "(x, 0, z)", "(0, y, z)", "(0, 0, z)"],
    a : 2,
    s : "In the YZ-plane, the x-coordinate of every point is 0, so the coordinates take the form (0, y, z)."
  },
  {
    q : "In which octant does the point (−3, 1, 2) lie?",
    o : ["First octant", "Second octant", "Third octant", "Fourth octant"],
    a : 1,
    s : "Here x < 0, y > 0, and z > 0. According to standard NCERT convention, the sign triplet (−, +, +) corresponds to the second octant (X′OYZ)."
  },
  {
    q : "In which octant does the point (−3, −1, 2) lie?",
    o : ["Second octant", "Third octant", "Fourth octant", "Seventh octant"],
    a : 1,
    s : "Here x < 0, y < 0, and z > 0. The sign triplet (−, −, +) lies in the third octant (X′OY′Z)."
  },
  {
    q : "In which octant does the point (4, −2, 3) lie?",
    o : ["First octant", "Second octant", "Third octant", "Fourth octant"],
    a : 3,
    s : "Here x > 0, y < 0, and z > 0. The sign triplet (+, −, +) belongs to the fourth octant (XOY′Z)."
  },
  {
    q : "In which octant does the point (4, −2, −5) lie?",
    o : ["Fourth octant", "Sixth octant", "Seventh octant", "Eighth octant"],
    a : 3,
    s : "Here x > 0, y < 0, and z < 0. The sign triplet (+, −, −) corresponds to the eighth octant (XOY′Z′)."
  },
  {
    q : "In which octant does the point (−4, −2, −5) lie?",
    o : ["Fifth octant", "Sixth octant", "Seventh octant", "Eighth octant"],
    a : 2,
    s : "Here x < 0, y < 0, and z < 0. The sign triplet (−, −, −) belongs to the seventh octant (X′OY′Z′)."
  },

]
},


{
    title: "Chapter 11 : Introduction to Three Dimensional Geometry ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

  {
    q : "In which octant does the point (−4, 2, −5) lie?",
    o : ["Second octant", "Fifth octant", "Sixth octant", "Seventh octant"],
    a : 2,
    s : "Here x < 0, y > 0, and z < 0. The sign triplet (−, +, −) lies in the sixth octant (X′OYZ′)."
  },
  {
    q : "In which octant does the point (4, 2, −5) lie?",
    o : ["First octant", "Fourth octant", "Fifth octant", "Eighth octant"],
    a : 2,
    s : "Here x > 0, y > 0, and z < 0. The sign triplet (+, +, −) lies in the fifth octant (XOYZ′)."
  },
  {
    q : "The perpendicular distance of the point P(3, −4, 5) from the XY-plane is:",
    o : ["3", "4", "5", "√50"],
    a : 2,
    s : "The perpendicular distance of a point (x, y, z) from the XY-plane is |z|. For (3, −4, 5), |z| = |5| = 5."
  },
  {
    q : "The perpendicular distance of the point P(−2, 6, −7) from the XZ-plane is:",
    o : ["2", "6", "7", "√53"],
    a : 1,
    s : "The perpendicular distance of (x, y, z) from the XZ-plane is |y|. Here |y| = |6| = 6."
  },
  {
    q : "The perpendicular distance of the point P(−5, 4, −3) from the YZ-plane is:",
    o : ["5", "4", "3", "−5"],
    a : 0,
    s : "The perpendicular distance of (x, y, z) from the YZ-plane is |x|. Here |x| = |−5| = 5."
  },
  {
    q : "The perpendicular distance of the point P(3, 4, 12) from the Z-axis is:",
    o : ["3", "4", "5", "12"],
    a : 2,
    s : "The foot of the perpendicular from P(3, 4, 12) to the Z-axis is (0, 0, 12). The distance is √((3 − 0)² + (4 − 0)² + (12 − 12)²) = √(9 + 16) = 5."
  },
  {
    q : "The perpendicular distance of the point P(6, 8, 15) from the X-axis is:",
    o : ["10", "17", "15", "√289"],
    a : 1,
    s : "The distance of (x, y, z) from the X-axis is √(y² + z²). Here √(8² + 15²) = √(64 + 225) = √289 = 17."
  },
  {
    q : "The coordinates of the foot of the perpendicular drawn from the point P(2, −3, 4) on the Y-axis are:",
    o : ["(2, 0, 0)", "(0, −3, 0)", "(0, 0, 4)", "(2, −3, 0)"],
    a : 1,
    s : "Any point on the Y-axis has x = 0 and z = 0, while its y-coordinate matches P. Thus the foot of the perpendicular is (0, −3, 0)."
  },
  {
    q : "The coordinates of the foot of the perpendicular drawn from the point P(−1, 5, 7) on the XZ-plane are:",
    o : ["(−1, 0, 7)", "(0, 5, 0)", "(−1, 5, 0)", "(0, 5, 7)"],
    a : 0,
    s : "Projecting onto the XZ-plane sets the y-coordinate to 0 while keeping x and z unchanged, giving (−1, 0, 7)."
  },
  {
    q : "What is the image of the point P(3, −2, 4) in the XY-plane?",
    o : ["(−3, −2, 4)", "(3, 2, 4)", "(3, −2, −4)", "(−3, 2, −4)"],
    a : 2,
    s : "Reflection across the XY-plane negates the z-coordinate while keeping x and y the same, resulting in (3, −2, −4)."
  },

]
},


{
    title: "Chapter 11 : Introduction to Three Dimensional Geometry ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [


  {
    q : "What is the image of the point P(−4, 5, −6) in the YZ-plane?",
    o : ["(4, 5, −6)", "(−4, −5, −6)", "(−4, 5, 6)", "(4, −5, 6)"],
    a : 0,
    s : "Reflection across the YZ-plane changes the sign of the x-coordinate, giving (4, 5, −6)."
  },
  {
    q : "The distance of the point P(2, 3, 6) from the origin is:",
    o : ["5", "6", "7", "11"],
    a : 2,
    s : "Distance from the origin = √(x² + y² + z²) = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7."
  },
  {
    q : "The distance between the points P(2, 3, 5) and Q(4, 3, 1) is:",
    o : ["2√5", "√20", "Both A and B", "2√3"],
    a : 2,
    s : "PQ = √((4 − 2)² + (3 − 3)² + (1 − 5)²) = √(4 + 0 + 16) = √20 = 2√5. Both A and B represent the same value."
  },
  {
    q : "Find the distance between the points A(−3, 7, 2) and B(2, 4, −1).",
    o : ["√34", "√43", "√35", "√53"],
    a : 1,
    s : "AB = √((2 − (−3))² + (4 − 7)² + (−1 − 2)²) = √(5² + (−3)² + (−3)²) = √(25 + 9 + 9) = √43."
  },
  {
    q : "If the distance between the points P(a, 2, 1) and Q(1, −1, 1) is 5, then the possible values of a are:",
    o : ["5, −3", "4, −2", "6, −4", "3, −1"],
    a : 0,
    s : "√((a − 1)² + (−1 − 2)² + (1 − 1)²) = 5 ⇒ (a − 1)² + 9 = 25 ⇒ (a − 1)² = 16 ⇒ a − 1 = ±4 ⇒ a = 5 or a = −3."
  },
  {
    q : "The points A(−2, 3, 5), B(1, 2, 3), and C(7, 0, −1) are:",
    o : ["Vertices of an equilateral triangle", "Vertices of a right-angled triangle", "Collinear", "Vertices of an isosceles triangle"],
    a : 2,
    s : "AB = √(9 + 1 + 4) = √14; BC = √(36 + 4 + 16) = √56 = 2√14; AC = √(81 + 9 + 36) = √126 = 3√14. Since AB + BC = AC, the points are collinear."
  },
  {
    q : "The triangle with vertices A(0, 7, −10), B(1, 6, −6), and C(4, 9, −6) is:",
    o : ["Equilateral", "Isosceles", "Scalene", "Collinear"],
    a : 1,
    s : "AB = √(1 + 1 + 16) = √18; BC = √(9 + 9 + 0) = √18; AC = √(16 + 4 + 16) = 6. Since AB = BC = √18, the triangle is isosceles."
  },
  {
    q : "The triangle with vertices A(0, 7, 10), B(−1, 6, 6), and C(−4, 9, 6) is:",
    o : ["Equilateral", "Right-angled isosceles", "Obtuse-angled", "Collinear"],
    a : 1,
    s : "AB² = 1 + 1 + 16 = 18; BC² = 9 + 9 + 0 = 18; AC² = 16 + 4 + 16 = 36. Since AB = BC and AB² + BC² = AC², it is a right-angled isosceles triangle."
  },
  {
    q : "The points A(−1, 2, 1), B(1, −2, 5), C(4, −7, 8), and D(2, −3, 4) are the vertices of a:",
    o : ["Square", "Rhombus", "Parallelogram", "Trapezium only"],
    a : 2,
    s : "Midpoint of AC = ((−1 + 4)/2, (2 − 7)/2, (1 + 8)/2) = (3/2, −5/2, 9/2). Midpoint of BD = ((1 + 2)/2, (−2 − 3)/2, (5 + 4)/2) = (3/2, −5/2, 9/2). Since diagonals bisect each other and adjacent sides are unequal (AB = √36 = 6, BC = √43), ABCD is a parallelogram."
  },
  {
    q : "Find the coordinates of a point on the Y-axis which is at a distance of 5√2 from the point P(3, −2, 5).",
    o : ["(0, 2, 0) or (0, −6, 0)", "(0, 4, 0) or (0, −8, 0)", "(0, 6, 0) or (0, −2, 0)", "(0, 3, 0) or (0, −7, 0)"],
    a : 0,
    s : "Let the point be (0, y, 0). Then (0 − 3)² + (y + 2)² + (0 − 5)² = (5√2)² ⇒ 9 + (y + 2)² + 25 = 50 ⇒ (y + 2)² = 16 ⇒ y + 2 = ±4 ⇒ y = 2 or y = −6."
  },

]
},


{
    title: "Chapter 11 : Introduction to Three Dimensional Geometry ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [


  {
    q : "The locus of a point P(x, y, z) which moves such that it is equidistant from A(1, 2, 3) and B(3, 2, −1) is given by:",
    o : ["x − 2z = 0", "x + 2z = 0", "2x − z = 0", "x − y + 2z = 0"],
    a : 0,
    s : "PA² = PB² ⇒ (x − 1)² + (y − 2)² + (z − 3)² = (x − 3)² + (y − 2)² + (z + 1)² ⇒ −2x + 1 − 6z + 9 = −6x + 9 + 2z + 1 ⇒ 4x − 8z = 0 ⇒ x − 2z = 0."
  },
  {
    q : "The equation of the set of points P such that PA² + PB² = 2k², where A is (3, 4, 5) and B is (−1, 3, −7), is:",
    o : ["x² + y² + z² − 2x − 7y + 2z = k² − 54.5", "2x² + 2y² + 2z² − 4x − 14y + 4z = 2k² − 109", "x² + y² + z² + 2x + 7y − 2z = k²", "2x² + 2y² + 2z² + 4x + 14y − 4z = 2k² − 109"],
    a : 1,
    s : "PA² + PB² = (x − 3)² + (y − 4)² + (z − 5)² + (x + 1)² + (y − 3)² + (z + 7)² = 2x² + 2y² + 2z² − 4x − 14y + 4z + (9 + 16 + 25 + 1 + 9 + 49) = 2x² + 2y² + 2z² − 4x − 14y + 4z + 109 = 2k²."
  },
  {
    q : "What are the coordinates of the midpoint of the line segment joining P(2, −3, 4) and Q(−4, 5, 8)?",
    o : ["(−1, 1, 6)", "(1, −1, 6)", "(−2, 2, 12)", "(3, −4, −2)"],
    a : 0,
    s : "Midpoint = ((2 + (−4))/2, (−3 + 5)/2, (4 + 8)/2) = (−2/2, 2/2, 12/2) = (−1, 1, 6)."
  },
  {
    q : "The coordinates of the point which divides the line segment joining P(−2, 3, 5) and Q(1, −4, 6) in the ratio 2 : 3 internally are:",
    o : ["(−4/5, 1/5, 27/5)", "(4/5, −1/5, 27/5)", "(−1/5, −1/5, 11/5)", "(−8, 17, 3)"],
    a : 0,
    s : "Using internal section formula ((2(1) + 3(−2))/5, (2(−4) + 3(3))/5, (2(6) + 3(5))/5) = ((2 − 6)/5, (−8 + 9)/5, (12 + 15)/5) = (−4/5, 1/5, 27/5)."
  },
  {
    q : "The coordinates of the point which divides the line segment joining P(−2, 3, 5) and Q(1, −4, 6) in the ratio 2 : 3 externally are:",
    o : ["(8, −17, 3)", "(−8, 17, 3)", "(−8, −17, 3)", "(8, 17, −3)"],
    a : 1,
    s : "Using external section formula ((2(1) − 3(−2))/(2 − 3), (2(−4) − 3(3))/(2 − 3), (2(6) − 3(5))/(2 − 3)) = (8/(−1), −17/(−1), −3/(−1)) = (−8, 17, 3)."
  },
  {
    q : "In what ratio does the YZ-plane divide the line segment joining A(4, 8, 10) and B(6, 10, −8)?",
    o : ["2 : 3 internally", "2 : 3 externally", "3 : 2 internally", "3 : 2 externally"],
    a : 1,
    s : "Let the ratio be k : 1. On the YZ-plane, x = 0 ⇒ (6k + 4)/(k + 1) = 0 ⇒ k = −4/6 = −2/3. The negative sign indicates external division in the ratio 2 : 3."
  },
  {
    q : "In what ratio does the XY-plane divide the line segment joining A(−1, 3, 4) and B(2, −5, −6)?",
    o : ["2 : 3 internally", "3 : 2 internally", "2 : 3 externally", "3 : 2 externally"],
    a : 0,
    s : "On the XY-plane, z = 0. If the ratio is k : 1, (−6k + 4)/(k + 1) = 0 ⇒ k = 4/6 = 2/3. Positive k means internal division in the ratio 2 : 3."
  },
  {
    q : "In what ratio does the XZ-plane divide the line segment joining A(2, −4, 7) and B(−3, 6, 9)?",
    o : ["2 : 3 internally", "3 : 2 internally", "2 : 3 externally", "4 : 6 externally"],
    a : 0,
    s : "On the XZ-plane, y = 0. Setting (6k − 4)/(k + 1) = 0 gives k = 4/6 = 2/3, so it divides internally in the ratio 2 : 3."
  },
  {
    q : "Find the ratio in which the line segment joining the points (4, 8, 10) and (6, 10, −8) is divided by the point (5, 9, 1).",
    o : ["1 : 1", "1 : 2", "2 : 1", "2 : 3"],
    a : 0,
    s : "Comparing the x-coordinates: (6k + 4)/(k + 1) = 5 ⇒ 6k + 4 = 5k + 5 ⇒ k = 1. Thus the ratio is 1 : 1 (midpoint)."
  },
  {
    q : "The centroid of a triangle ABC with vertices A(x₁, y₁, z₁), B(x₂, y₂, z₂), and C(x₃, y₃, z₃) is:",
    o : ["((x₁+x₂+x₃)/2, (y₁+y₂+y₃)/2, (z₁+z₂+z₃)/2)", "((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)", "(x₁+x₂+x₃, y₁+y₂+y₃, z₁+z₂+z₃)", "((x₁−x₂+x₃)/3, (y₁−y₂+y₃)/3, (z₁−z₂+z₃)/3)"],
    a : 1,
    s : "The centroid divides each median in the ratio 2 : 1, yielding the average of the three vertices' coordinates: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)."
  },

]
},


{
    title: "Chapter 11 : Introduction to Three Dimensional Geometry ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [


  {
    q : "Find the centroid of the triangle whose vertices are A(2, −4, 3), B(4, 2, −5), and C(3, 5, 8).",
    o : ["(3, 1, 2)", "(9, 3, 6)", "(3, −1, 2)", "(2, 1, 3)"],
    a : 0,
    s : "Centroid = ((2 + 4 + 3)/3, (−4 + 2 + 5)/3, (3 − 5 + 8)/3) = (9/3, 3/3, 6/3) = (3, 1, 2)."
  },
  {
    q : "If the origin is the centroid of the triangle PQR with vertices P(2a, 2, 6), Q(−4, 3b, −10), and R(8, 14, 2c), then the values of a, b, and c are:",
    o : ["a = −2, b = −16/3, c = 2", "a = 2, b = 16/3, c = −2", "a = −2, b = 16/3, c = 2", "a = −4, b = −16, c = 4"],
    a : 0,
    s : "Setting centroid equal to (0, 0, 0): (2a − 4 + 8)/3 = 0 ⇒ a = −2; (2 + 3b + 14)/3 = 0 ⇒ b = −16/3; (6 − 10 + 2c)/3 = 0 ⇒ c = 2."
  },
  {
    q : "Three vertices of a parallelogram ABCD are A(3, −1, 2), B(1, 2, −4), and C(−1, 1, 2). What are the coordinates of the fourth vertex D?",
    o : ["(1, −2, 8)", "(−1, −2, 8)", "(1, 2, −8)", "(5, 0, −4)"],
    a : 0,
    s : "In a parallelogram, A + C = B + D ⇒ D = A + C − B = (3 − 1 − 1, −1 + 1 − 2, 2 + 2 − (−4)) = (1, −2, 8)."
  },
  {
    q : "Find the coordinates of the points which trisect the line segment joining the points P(4, 2, −6) and Q(10, −16, 6).",
    o : ["(6, −4, −2) and (8, −10, 2)", "(5, −1, −4) and (7, −7, 0)", "(6, −4, 2) and (8, −10, −2)", "(7, −7, 0) and (8, −10, 2)"],
    a : 0,
    s : "The first point divides PQ in 1 : 2: ((10 + 8)/3, (−16 + 4)/3, (6 − 12)/3) = (6, −4, −2). The second divides PQ in 2 : 1: ((20 + 4)/3, (−32 + 2)/3, (12 − 6)/3) = (8, −10, 2)."
  },
  {
    q : "If A(3, 2, 0), B(5, 3, 2), and C(−9, 6, −3) are three points forming a triangle, and AD is the internal bisector of ∠BAC meeting BC at D, then D divides BC in the ratio:",
    o : ["3 : 13", "13 : 3", "3 : 7", "7 : 3"],
    a : 0,
    s : "By the angle bisector theorem, BD : DC = AB : AC. AB = √((5−3)² + (3−2)² + (2−0)²) = √(4 + 1 + 4) = 3. AC = √((−9−3)² + (6−2)² + (−3−0)²) = √(144 + 16 + 9) = 13. Thus the ratio is 3 : 13."
  },
  {
    q : "The lengths of the medians of a triangle with vertices A(0, 0, 6), B(0, 4, 0), and C(6, 0, 0) are:",
    o : ["7, √34, 7", "5, √34, 5", "7, 7, 7", "√34, √34, 7"],
    a : 0,
    s : "Midpoint of BC is D(3, 2, 0) ⇒ AD = √(9 + 4 + 36) = 7. Midpoint of AC is E(3, 0, 3) ⇒ BE = √(9 + 16 + 9) = √34. Midpoint of AB is F(0, 2, 3) ⇒ CF = √(36 + 4 + 9) = 7."
  },
  {
    q : "What is the length of the foot of the perpendicular drawn from the point P(3, 4, 5) on the Y-axis to the origin?",
    o : ["3", "4", "5", "√41"],
    a : 1,
    s : "The foot of the perpendicular from P(3, 4, 5) to the Y-axis is Q(0, 4, 0). The distance from Q(0, 4, 0) to the origin (0, 0, 0) is 4."
  },
  {
    q : "If a parallelepiped is formed by planes drawn through the points (2, 3, 5) and (5, 9, 7) parallel to the coordinate planes, then the length of its diagonal is:",
    o : ["5", "6", "7", "√49"],
    a : 2,
    s : "The edge lengths are |5 − 2| = 3, |9 − 3| = 6, and |7 − 5| = 2. The length of the main diagonal is √(3² + 6² + 2²) = √(9 + 36 + 4) = √49 = 7."
  },
  {
    q : "Which of the following points lies on the positive Z-axis?",
    o : ["(0, 0, 5)", "(0, 5, 0)", "(5, 0, 0)", "(0, 0, −5)"],
    a : 0,
    s : "A point on the positive Z-axis has x = 0, y = 0, and z > 0, which is satisfied by (0, 0, 5)."
  },
  {
    q : "If the sum of the squares of the distances of a point P(x, y, z) from the three coordinate axes is 36, then the distance of P from the origin is:",
    o : ["6", "3√2", "6√2", "18"],
    a : 1,
    s : "Sum of squares of distances from X, Y, Z axes = (y² + z²) + (x² + z²) + (x² + y²) = 2(x² + y² + z²) = 36 ⇒ x² + y² + z² = 18. Distance from origin = √18 = 3√2."
  }

]
},


// Chapter 12 : Limits and Derivatives //


{
    title: "Chapter 12 : Limits and Derivatives ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

{
    q : "The value of lim(x→3) (x + 3) is:",
    o : ["0", "3", "6", "9"],
    a : 2,
    s : "Since f(x) = x + 3 is a polynomial, substitute x = 3 directly: 3 + 3 = 6."
  },
  {
    q : "The value of lim(x→π) (x − 22/7) is:",
    o : ["0", "π − 22/7", "22/7 − π", "1"],
    a : 1,
    s : "Substituting x = π directly gives π − 22/7 (note that π ≠ 22/7)."
  },
  {
    q : "The value of lim(r→1) πr² is:",
    o : ["0", "1", "π", "2π"],
    a : 2,
    s : "Substituting r = 1 directly into the polynomial πr² yields π(1)² = π."
  },
  {
    q : "The value of lim(x→4) (4x + 3)/(x − 2) is:",
    o : ["19/2", "13/2", "19/4", "7/2"],
    a : 0,
    s : "Since the denominator is non-zero at x = 4, substitute x = 4: (4(4) + 3)/(4 − 2) = 19/2."
  },
  {
    q : "The value of lim(x→−1) (x¹⁰ + x⁵ + 1)/(x − 1) is:",
    o : ["1/2", "−1/2", "3/2", "−3/2"],
    a : 1,
    s : "At x = −1, the numerator is (−1)¹⁰ + (−1)⁵ + 1 = 1 − 1 + 1 = 1, and the denominator is −1 − 1 = −2. Thus the limit is −1/2."
  },
  {
    q : "The value of lim(x→0) ((x + 1)⁵ − 1)/x is:",
    o : ["1", "4", "5", "0"],
    a : 2,
    s : "Put y = x + 1; as x → 0, y → 1. The limit becomes lim(y→1) (y⁵ − 1⁵)/(y − 1) = 5(1)⁴ = 5."
  },
  {
    q : "The value of lim(x→2) (3x² − x − 10)/(x² − 4) is:",
    o : ["11/4", "13/4", "7/4", "9/4"],
    a : 0,
    s : "Factoring gives (3x + 5)(x − 2)/((x − 2)(x + 2)) = (3x + 5)/(x + 2) for x ≠ 2. Substituting x = 2 gives (6 + 5)/(2 + 2) = 11/4."
  },
  {
    q : "The value of lim(x→3) (x⁴ − 81)/(2x² − 5x − 3) is:",
    o : ["108/7", "54/7", "27/7", "81/7"],
    a : 0,
    s : "Numerator = (x − 3)(x + 3)(x² + 9) and denominator = (x − 3)(2x + 1). Cancelling (x − 3) and putting x = 3 gives (6 × 18)/7 = 108/7."
  },
  {
    q : "The value of lim(x→0) (ax + b)/(cx + 1) is:",
    o : ["a/c", "b", "a + b", "b/c"],
    a : 1,
    s : "Substituting x = 0 directly gives (a(0) + b)/(c(0) + 1) = b/1 = b."
  },
  {
    q : "The value of lim(z→1) (z^(1/3) − 1)/(z^(1/6) − 1) is:",
    o : ["1/2", "2", "1/3", "3"],
    a : 1,
    s : "Using lim(z→a) (z^n − a^n)/(z − a) = n a^(n−1) in both numerator and denominator: (1/3)/(1/6) = 2."
  },

]
},


{
    title: "Chapter 12 : Limits and Derivatives ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

  {
    q : "The value of lim(x→1) (ax² + bx + c)/(cx² + bx + a), where a + b + c ≠ 0, is:",
    o : ["0", "1", "a/c", "c/a"],
    a : 1,
    s : "Substituting x = 1 gives (a + b + c)/(c + b + a) = 1 since a + b + c ≠ 0."
  },
  {
    q : "The value of lim(x→−2) (1/x + 1/2)/(x + 2) is:",
    o : ["1/4", "−1/4", "1/2", "−1/2"],
    a : 1,
    s : "Simplify numerator: (2 + x)/(2x). Dividing by (x + 2) for x ≠ −2 gives 1/(2x). At x = −2, this equals −1/4."
  },
  {
    q : "The value of lim(x→a) (x^n − a^n)/(x − a) is:",
    o : ["n a^n", "n a^(n−1)", "(n − 1)a^n", "n a^(n+1)"],
    a : 1,
    s : "By the standard algebraic limit theorem in NCERT, lim(x→a) (x^n − a^n)/(x − a) = n a^(n−1)."
  },
  {
    q : "The value of lim(x→0) (sin ax)/(bx), where a, b ≠ 0, is:",
    o : ["a/b", "b/a", "ab", "1"],
    a : 0,
    s : "Rewrite as (a/b) · lim(x→0) (sin ax)/(ax) = (a/b) · 1 = a/b."
  },
  {
    q : "The value of lim(x→0) (sin ax)/(sin bx), where a, b ≠ 0, is:",
    o : ["1", "a/b", "b/a", "a − b"],
    a : 1,
    s : "Divide numerator and denominator by x: [a · (sin ax)/(ax)] / [b · (sin bx)/(bx)] → a/b as x → 0."
  },
  {
    q : "The value of lim(x→π) sin(π − x)/(π(π − x)) is:",
    o : ["1", "π", "1/π", "0"],
    a : 2,
    s : "Let t = π − x; as x → π, t → 0. The limit becomes (1/π) · lim(t→0) (sin t)/t = 1/π."
  },
  {
    q : "The value of lim(x→0) (cos x)/(π − x) is:",
    o : ["0", "1/π", "−1/π", "1"],
    a : 1,
    s : "Substituting x = 0 directly gives cos(0)/(π − 0) = 1/π."
  },
  {
    q : "The value of lim(x→0) (cos 2x − 1)/(cos x − 1) is:",
    o : ["1", "2", "4", "1/2"],
    a : 2,
    s : "Using 1 − cos θ = 2sin²(θ/2), the ratio is (2sin²x)/(2sin²(x/2)) = 4 · [(sin x)/x]² / [(sin(x/2))/(x/2)]² → 4."
  },
  {
    q : "The value of lim(x→0) (ax + x cos x)/(b sin x), where b ≠ 0, is:",
    o : ["(a + 1)/b", "a/b", "(a − 1)/b", "b/(a + 1)"],
    a : 0,
    s : "Divide numerator and denominator by x: (a + cos x) / [b · (sin x)/x] → (a + 1)/b as x → 0."
  },
  {
    q : "The value of lim(x→0) x sec x is:",
    o : ["1", "0", "∞", "−1"],
    a : 1,
    s : "At x = 0, sec 0 = 1, so lim(x→0) x sec x = 0 × 1 = 0."
  },

]
},


{
    title: "Chapter 12 : Limits and Derivatives ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

  {
    q : "The value of lim(x→0) (sin ax + bx)/(ax + sin bx), where a, b, a + b ≠ 0, is:",
    o : ["0", "1", "a/b", "b/a"],
    a : 1,
    s : "Divide numerator and denominator by x: [a(sin ax)/(ax) + b] / [a + b(sin bx)/(bx)] → (a + b)/(a + b) = 1."
  },
  {
    q : "The value of lim(x→0) (cosec x − cot x) is:",
    o : ["1", "0", "−1", "1/2"],
    a : 1,
    s : "cosec x − cot x = (1 − cos x)/sin x = (2sin²(x/2))/(2sin(x/2)cos(x/2)) = tan(x/2) → 0 as x → 0."
  },
  {
    q : "The value of lim(x→π/2) (tan 2x)/(x − π/2) is:",
    o : ["1", "2", "−2", "0"],
    a : 1,
    s : "Put x − π/2 = t so x = π/2 + t. Then tan(2x) = tan(π + 2t) = tan 2t. Thus lim(t→0) (tan 2t)/t = 2."
  },
  {
    q : "Let f(x) = { 2x + 3, x ≤ 0 ; 3(x + 1), x > 0 }. What is lim(x→0) f(x)?",
    o : ["0", "2", "3", "Does not exist"],
    a : 2,
    s : "LHL = lim(x→0⁻) (2x + 3) = 3 and RHL = lim(x→0⁺) 3(x + 1) = 3. Since LHL = RHL, lim(x→0) f(x) = 3."
  },
  {
    q : "For f(x) = { 2x + 3, x ≤ 0 ; 3(x + 1), x > 0 }, what is lim(x→1) f(x)?",
    o : ["3", "5", "6", "Does not exist"],
    a : 2,
    s : "Near x = 1 (which is > 0), f(x) = 3(x + 1). Substituting x = 1 gives 3(1 + 1) = 6."
  },
  {
    q : "What is lim(x→0) |x|/x?",
    o : ["1", "−1", "0", "Does not exist"],
    a : 3,
    s : "For x < 0, |x|/x = −1 (LHL = −1); for x > 0, |x|/x = 1 (RHL = 1). Since LHL ≠ RHL, the limit does not exist."
  },
  {
    q : "Let f(x) = { x − 1, x < 0 ; 0, x = 0 ; x + 1, x > 0 }. What is lim(x→0) f(x)?",
    o : ["−1", "0", "1", "Does not exist"],
    a : 3,
    s : "LHL = lim(x→0⁻) (x − 1) = −1, while RHL = lim(x→0⁺) (x + 1) = 1. Since LHL ≠ RHL, the limit does not exist."
  },
  {
    q : "If f(x) = { a + bx, x < 1 ; 4, x = 1 ; b − ax, x > 1 } and lim(x→1) f(x) = f(1), what are the values of a and b?",
    o : ["a = 0, b = 4", "a = 4, b = 0", "a = 2, b = 2", "a = 1, b = 3"],
    a : 0,
    s : "LHL = a + b = 4 and RHL = b − a = 4. Adding both equations gives 2b = 8 ⇒ b = 4, so a = 0."
  },
  {
    q : "If f(x) = |x| − 5, then lim(x→5) f(x) is:",
    o : ["5", "−5", "0", "10"],
    a : 2,
    s : "Since |x| − 5 is continuous everywhere, lim(x→5) (|x| − 5) = |5| − 5 = 0."
  },
  {
    q : "The derivative of f(x) = x² − 2 at x = 10 is:",
    o : ["10", "20", "98", "18"],
    a : 1,
    s : "f′(x) = 2x, so f′(10) = 2(10) = 20."
  },


]
},



{
    title: "Chapter 12 : Limits and Derivatives ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [


  {
    q : "The derivative of f(x) = 99x at x = 100 is:",
    o : ["9900", "99", "100", "0"],
    a : 1,
    s : "The derivative of a linear function kx is k everywhere. Thus f′(100) = 99."
  },
  {
    q : "The derivative of f(x) = x at x = 1 is:",
    o : ["0", "1", "x", "−1"],
    a : 1,
    s : "Since d/dx(x) = 1 for all x, f′(1) = 1."
  },
  {
    q : "Using the first principle, the derivative of f(x) = 1/x² (for x ≠ 0) is:",
    o : ["−1/x³", "−2/x³", "2/x³", "−2/x"],
    a : 1,
    s : "d/dx(x⁻²) = −2x⁻³ = −2/x³."
  },
  {
    q : "The derivative of f(x) = (x + 1)/(x − 1) (for x ≠ 1) is:",
    o : ["2/(x − 1)²", "−2/(x − 1)²", "2x/(x − 1)²", "−2x/(x − 1)²"],
    a : 1,
    s : "By the quotient rule: [(x − 1)(1) − (x + 1)(1)] / (x − 1)² = −2/(x − 1)²."
  },
  {
    q : "For f(x) = x¹⁰⁰/100 + x⁹⁹/99 + ... + x²/2 + x + 1, what is f′(1)?",
    o : ["99", "100", "101", "5050"],
    a : 1,
    s : "f′(x) = x⁹⁹ + x⁹⁸ + ... + x + 1 (100 terms). At x = 1, f′(1) = 1 + 1 + ... + 1 (100 times) = 100."
  },
  {
    q : "The derivative of xⁿ + a xⁿ⁻¹ + a² xⁿ⁻² + ... + aⁿ⁻¹ x + aⁿ (where a is a fixed real number) with respect to x is:",
    o : ["n xⁿ⁻¹ + (n−1)a xⁿ⁻² + ... + aⁿ⁻¹", "n xⁿ⁻¹ + (n−1)a xⁿ⁻² + ... + aⁿ⁻¹ + n aⁿ⁻¹", "n xⁿ⁻¹ + a xⁿ⁻² + ... + aⁿ⁻¹", "0"],
    a : 0,
    s : "Differentiating term-by-term with respect to x (treating a as constant, so d/dx(aⁿ) = 0) gives n xⁿ⁻¹ + (n−1)a xⁿ⁻² + ... + aⁿ⁻¹."
  },
  {
    q : "The derivative of (x − a)(x − b) with respect to x is:",
    o : ["2x − a − b", "2x + a + b", "x − a − b", "2x − ab"],
    a : 0,
    s : "(x − a)(x − b) = x² − (a + b)x + ab. Differentiating gives 2x − (a + b) = 2x − a − b."
  },
  {
    q : "The derivative of (ax² + b)² with respect to x is:",
    o : ["2(ax² + b)", "4ax(ax² + b)", "2ax(ax² + b)", "4a(ax² + b)"],
    a : 1,
    s : "Expanding gives a²x⁴ + 2abx² + b². Differentiating gives 4a²x³ + 4abx = 4ax(ax² + b)."
  },
  {
    q : "The derivative of (x − a)/(x − b) (where x ≠ b) with respect to x is:",
    o : ["(a − b)/(x − b)²", "(b − a)/(x − b)²", "(a + b)/(x − b)²", "1/(x − b)²"],
    a : 0,
    s : "By the quotient rule: [(x − b)(1) − (x − a)(1)] / (x − b)² = (a − b)/(x − b)²."
  },
  {
    q : "The derivative of sin x cos x with respect to x is:",
    o : ["cos 2x", "sin 2x", "−cos 2x", "2cos 2x"],
    a : 0,
    s : "By the product rule: sin x(−sin x) + cos x(cos x) = cos²x − sin²x = cos 2x."
  },

]
},


{
    title: "Chapter 12 : Limits and Derivatives ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Introduction to Three Dimensional Geometry ",
    questions: [

  {
    q : "The derivative of sec x with respect to x is:",
    o : ["sec x tan x", "−sec x tan x", "sec²x", "tan²x"],
    a : 0,
    s : "d/dx(1/cos x) = −(−sin x)/cos²x = (1/cos x)(sin x/cos x) = sec x tan x."
  },
  {
    q : "The derivative of 5 sec x + 4 cos x with respect to x is:",
    o : ["5 sec x tan x − 4 sin x", "5 sec x tan x + 4 sin x", "5 tan²x − 4 sin x", "−5 sec x tan x − 4 sin x"],
    a : 0,
    s : "Differentiating term-by-term: 5(sec x tan x) + 4(−sin x) = 5 sec x tan x − 4 sin x."
  },
  {
    q : "The derivative of cosec x with respect to x is:",
    o : ["cosec x cot x", "−cosec x cot x", "−cosec²x", "cot²x"],
    a : 1,
    s : "d/dx(1/sin x) = −cos x / sin²x = −cosec x cot x."
  },
  {
    q : "The derivative of 3 cot x + 5 cosec x with respect to x is:",
    o : ["−3 cosec²x − 5 cosec x cot x", "3 cosec²x + 5 cosec x cot x", "−3 cosec²x + 5 cosec x cot x", "−3 cot²x − 5 cosec x cot x"],
    a : 0,
    s : "Since d/dx(cot x) = −cosec²x and d/dx(cosec x) = −cosec x cot x, the derivative is −3 cosec²x − 5 cosec x cot x."
  },
  {
    q : "The derivative of 5 sin x − 6 cos x + 7 with respect to x is:",
    o : ["5 cos x + 6 sin x", "5 cos x − 6 sin x", "−5 cos x + 6 sin x", "5 cos x + 6 sin x + 7"],
    a : 0,
    s : "d/dx(5 sin x − 6 cos x + 7) = 5 cos x − 6(−sin x) + 0 = 5 cos x + 6 sin x."
  },
  {
    q : "The derivative of 2 tan x − 7 sec x with respect to x is:",
    o : ["2 sec²x − 7 sec x tan x", "2 sec²x + 7 sec x tan x", "2 tan²x − 7 sec x tan x", "2 sec x tan x − 7 sec²x"],
    a : 0,
    s : "Since d/dx(tan x) = sec²x and d/dx(sec x) = sec x tan x, the derivative is 2 sec²x − 7 sec x tan x."
  },
  {
    q : "The derivative of cos(x − π/8) with respect to x is:",
    o : ["sin(x − π/8)", "−sin(x − π/8)", "cos(x − π/8)", "−cos(x − π/8)"],
    a : 1,
    s : "Using cos(x − π/8) = cos x cos(π/8) + sin x sin(π/8) and differentiating gives −sin x cos(π/8) + cos x sin(π/8) = −sin(x − π/8)."
  },
  {
    q : "The derivative of (x + cos x)/(tan x) with respect to x is:",
    o : ["[tan x(1 − sin x) − (x + cos x)sec²x] / tan²x", "[tan x(1 + sin x) − (x + cos x)sec²x] / tan²x", "[tan x(1 − sin x) + (x + cos x)sec²x] / tan²x", "(1 − sin x) / sec²x"],
    a : 0,
    s : "By the quotient rule: [tan x · d/dx(x + cos x) − (x + cos x) · d/dx(tan x)] / tan²x = [tan x(1 − sin x) − (x + cos x)sec²x] / tan²x."
  },
  {
    q : "The derivative of (sin x + cos x)/(sin x − cos x) with respect to x is:",
    o : ["2/(sin x − cos x)²", "−2/(sin x − cos x)²", "2/(sin x + cos x)²", "−2/(sin x + cos x)²"],
    a : 1,
    s : "By quotient rule: [(sin x − cos x)(cos x − sin x) − (sin x + cos x)(cos x + sin x)] / (sin x − cos x)² = [−(sin x − cos x)² − (sin x + cos x)²] / (sin x − cos x)² = −2/(sin x − cos x)²."
  },
  {
    q : "The derivative of x/(1 + tan x) with respect to x is:",
    o : ["(1 + tan x − x sec²x)/(1 + tan x)²", "(1 + tan x + x sec²x)/(1 + tan x)²", "(1 − x sec²x)/(1 + tan x)²", "1/sec²x"],
    a : 0,
    s : "By the quotient rule: [(1 + tan x)(1) − x(sec²x)] / (1 + tan x)² = (1 + tan x − x sec²x)/(1 + tan x)²."
  },

]
},



// Chapter 13 : Statistics // 

{
    title: "Chapter 13 : Statistics ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Statistics ",
    questions: [

{
    q : "Which of the following is NOT a measure of central tendency?",
    o : ["Mean", "Median", "Mode", "Standard deviation"],
    a : 3,
    s : "Mean, median, and mode are measures of central tendency, whereas standard deviation is a measure of dispersion."
  },
  {
    q : "Which of the following is NOT a measure of dispersion?",
    o : ["Range", "Quartile deviation", "Mean deviation", "Median"],
    a : 3,
    s : "Range, quartile deviation, mean deviation, and standard deviation measure dispersion; median measures central tendency."
  },
  {
    q : "The range of the data set 6, 7, 10, 12, 13, 4, 8, 12 is:",
    o : ["6", "8", "9", "10"],
    a : 2,
    s : "Range = Maximum value − Minimum value = 13 − 4 = 9."
  },
  {
    q : "The mean deviation about the mean for the data 4, 7, 8, 9, 10, 12, 13, 17 is:",
    o : ["2.5", "3", "3.5", "4"],
    a : 1,
    s : "Mean = (4 + 7 + 8 + 9 + 10 + 12 + 13 + 17)/8 = 80/8 = 10. Sum of absolute deviations = 6 + 3 + 2 + 1 + 0 + 2 + 3 + 7 = 24. Mean deviation = 24/8 = 3."
  },
  {
    q : "The mean deviation about the mean for the data 38, 70, 48, 40, 42, 55, 63, 46, 54, 44 is:",
    o : ["8.2", "8.4", "8.6", "9.0"],
    a : 1,
    s : "Mean = 500/10 = 50. Absolute deviations from 50 are 12, 20, 2, 10, 8, 5, 13, 4, 4, 6, whose sum is 84. Mean deviation = 84/10 = 8.4."
  },
  {
    q : "The mean deviation about the median for the data 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17 is:",
    o : ["2.25", "2.33", "2.50", "2.75"],
    a : 1,
    s : "Sorted data (n = 12): 10, 11, 11, 12, 13, 13, 14, 16, 16, 17, 17, 18. Median = (13 + 14)/2 = 13.5. Sum of |x_i − 13.5| = 28. Mean deviation = 28/12 = 7/3 ≈ 2.33."
  },
  {
    q : "The mean deviation about the median for the data 36, 72, 46, 42, 60, 45, 53, 46, 51, 49 is:",
    o : ["6.5", "7.0", "7.5", "8.0"],
    a : 1,
    s : "Sorted data (n = 10): 36, 42, 45, 46, 46, 49, 51, 53, 60, 72. Median = (46 + 49)/2 = 47.5. Sum of |x_i − 47.5| = 70. Mean deviation = 70/10 = 7.0."
  },
  {
    q : "The sum of absolute deviations of a set of observations is minimum when measured from the:",
    o : ["Mean", "Median", "Mode", "Smallest observation"],
    a : 1,
    s : "A fundamental property of the median is that ∑|x_i − a| is minimized when a equals the median."
  },
  {
    q : "The algebraic sum of deviations of a set of observations from their arithmetic mean is always:",
    o : ["1", "0", "−1", "Equal to the variance"],
    a : 1,
    s : "∑(x_i − x̄) = ∑x_i − n x̄ = n x̄ − n x̄ = 0."
  },
  {
    q : "The mean deviation of the numbers 3, 4, 5, 6, 7 about the mean is:",
    o : ["1", "1.2", "1.5", "2"],
    a : 1,
    s : "Mean = 5. Absolute deviations are 2, 1, 0, 1, 2 (sum = 6). Mean deviation = 6/5 = 1.2."
  },

]
},


{
    title: "Chapter 13 : Statistics ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Statistics ",
    questions: [


  {
    q : "If each observation of a data set is increased by 5, then the mean deviation about the mean:",
    o : ["Increases by 5", "Decreases by 5", "Remains unchanged", "Becomes 5 times"],
    a : 2,
    s : "Adding a constant c shifts both x_i and x̄ by c, so |x_i + c − (x̄ + c)| = |x_i − x̄|. Thus mean deviation is independent of change of origin."
  },
  {
    q : "If each observation of a data set is multiplied by 3, then the mean deviation about the mean:",
    o : ["Remains unchanged", "Increases by 3", "Becomes 3 times", "Becomes 9 times"],
    a : 2,
    s : "Multiplying every observation by k > 0 multiplies each |x_i − x̄| by k, so the mean deviation becomes 3 times."
  },
  {
    q : "For a discrete frequency distribution with observations x_1, x_2, ..., x_n and frequencies f_1, f_2, ..., f_n (N = ∑f_i), the mean deviation about the mean x̄ is:",
    o : ["(1/N) ∑ f_i (x_i − x̄)", "(1/N) ∑ f_i |x_i − x̄|", "(1/n) ∑ |x_i − x̄|", "(1/N) ∑ f_i (x_i − x̄)²"],
    a : 1,
    s : "Mean deviation about x̄ for a frequency distribution is MD(x̄) = (1/N) ∑ f_i |x_i − x̄|."
  },
  {
    q : "Find the mean deviation about the mean for the distribution: x_i = 5, 10, 15, 20, 25 and f_i = 7, 4, 6, 3, 5.",
    o : ["6.12", "6.32", "6.52", "6.72"],
    a : 1,
    s : "N = 25, ∑f_i x_i = 35 + 40 + 90 + 60 + 125 = 350, so x̄ = 350/25 = 14. ∑f_i |x_i − 14| = 7(9) + 4(4) + 6(1) + 3(6) + 5(11) = 63 + 16 + 6 + 18 + 55 = 158. MD = 158/25 = 6.32."
  },
  {
    q : "Find the mean deviation about the median for the distribution: x_i = 3, 6, 9, 12, 13, 15, 21, 22 and f_i = 3, 4, 5, 2, 4, 5, 4, 3.",
    o : ["4.57", "4.77", "4.97", "5.17"],
    a : 2,
    s : "N = 30. Cumulative frequencies show the 15th and 16th observations are both 13, so Median = 13. ∑f_i |x_i − 13| = 3(10) + 4(7) + 5(4) + 2(1) + 4(0) + 5(2) + 4(8) + 3(9) = 149. MD = 149/30 ≈ 4.97."
  },
  {
    q : "In a continuous frequency distribution, while computing mean deviation about the mean, x_i represents the:",
    o : ["Lower limit of the class", "Upper limit of the class", "Mid-point of the class", "Frequency of the class"],
    a : 2,
    s : "For grouped continuous data, each class is represented by its mid-point x_i = (Lower limit + Upper limit)/2."
  },
  {
    q : "The variance of n observations x_1, x_2, ..., x_n with mean x̄ is defined as:",
    o : ["(1/n) ∑ |x_i − x̄|", "(1/n) ∑ (x_i − x̄)²", "√[(1/n) ∑ (x_i − x̄)²]", "(1/n) ∑ (x_i − x̄)"],
    a : 1,
    s : "Variance σ² is the arithmetic mean of the squares of deviations from the mean: σ² = (1/n) ∑ (x_i − x̄)²."
  },
  {
    q : "Standard deviation is defined as:",
    o : ["Square of variance", "Positive square root of variance", "Negative square root of variance", "Reciprocal of variance"],
    a : 1,
    s : "Standard deviation σ is the non-negative square root of variance: σ = √(σ²)."
  },
  {
    q : "Which alternative formula for variance σ² of n ungrouped observations is always true?",
    o : ["(1/n) ∑ x_i² − x̄²", "(1/n) ∑ x_i² + x̄²", "(1/n) (∑ x_i)² − x̄²", "∑ x_i² − n x̄²"],
    a : 0,
    s : "Expanding (1/n) ∑ (x_i − x̄)² gives (1/n) ∑ x_i² − x̄²."
  },
  {
    q : "The variance of the data 6, 7, 10, 12, 13, 4, 8, 12 is:",
    o : ["8.25", "9.25", "10.25", "11.25"],
    a : 1,
    s : "Mean x̄ = 72/8 = 9. Squared deviations from 9: 9 + 4 + 1 + 9 + 16 + 25 + 1 + 9 = 74. Variance = 74/8 = 9.25."
  },

]
},


{
    title: "Chapter 13 : Statistics ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Statistics ",
    questions: [

  {
    q : "The standard deviation of the data 6, 8, 10, 12, 14 is:",
    o : ["2", "2√2", "4", "8"],
    a : 1,
    s : "Mean = 10. Squared deviations: 16 + 4 + 0 + 4 + 16 = 40. Variance = 40/5 = 8, so SD = √8 = 2√2."
  },
  {
    q : "The variance of the first n natural numbers 1, 2, 3, ..., n is:",
    o : ["(n² − 1)/12", "(n² + 1)/12", "(n − 1)/12", "(n² − 1)/6"],
    a : 0,
    s : "Mean = (n + 1)/2 and (1/n) ∑ i² = (n + 1)(2n + 1)/6. Variance = (n + 1)(2n + 1)/6 − (n + 1)²/4 = (n² − 1)/12."
  },
  {
    q : "The standard deviation of the first 10 natural numbers is:",
    o : ["√(33/4)", "√(55/12)", "√(99/4)", "33/4"],
    a : 0,
    s : "Using σ² = (n² − 1)/12 with n = 10: σ² = (100 − 1)/12 = 99/12 = 33/4. Thus σ = √(33/4)."
  },
  {
    q : "The variance of the first 10 multiples of 3 (i.e., 3, 6, 9, ..., 30) is:",
    o : ["24.75", "74.25", "8.25", "99"],
    a : 1,
    s : "The variance of 1, 2, ..., 10 is 99/12 = 8.25. Multiplying each observation by 3 multiplies variance by 3² = 9: 9 × 8.25 = 74.25."
  },
  {
    q : "If the variance of a data set is 121, then the standard deviation of the data is:",
    o : ["11", "−11", "±11", "14641"],
    a : 0,
    s : "Standard deviation is always non-negative: σ = √121 = 11."
  },
  {
    q : "If each observation of a raw data set is increased by a constant k, its variance:",
    o : ["Increases by k", "Increases by k²", "Remains unchanged", "Decreases by k"],
    a : 2,
    s : "Variance is independent of change of origin, so adding k leaves variance unchanged."
  },
  {
    q : "If each observation of a data set with variance σ² is multiplied by a non-zero constant k, the new variance is:",
    o : ["k σ²", "k² σ²", "|k| σ²", "σ² / k²"],
    a : 1,
    s : "If y_i = k x_i, then ȳ = k x̄ and (1/n) ∑(y_i − ȳ)² = k² (1/n) ∑(x_i − x̄)² = k² σ²."
  },
  {
    q : "If the standard deviation of x_1, x_2, ..., x_n is 4, then the standard deviation of 2x_1 + 3, 2x_2 + 3, ..., 2x_n + 3 is:",
    o : ["8", "11", "5", "16"],
    a : 0,
    s : "For y_i = a x_i + b, σ_y = |a| σ_x. Here |2| × 4 = 8 (adding 3 does not affect standard deviation)."
  },
  {
    q : "If the variance of 20 observations is 5 and each observation is multiplied by 2, the new variance is:",
    o : ["10", "20", "40", "2.5"],
    a : 1,
    s : "New variance = 2² × 5 = 4 × 5 = 20."
  },
  {
    q : "The standard deviation of the observations 5, 5, 5, 5, 5 is:",
    o : ["5", "1", "0", "25"],
    a : 2,
    s : "All observations are equal to the mean 5, so every deviation is 0 and the standard deviation is 0."
  },

]
},



{
    title: "Chapter 13 : Statistics ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Statistics ",
    questions: [


  {
    q : "Which of the following is always true for standard deviation σ?",
    o : ["σ < 0", "σ ≥ 0", "σ > 1", "0 ≤ σ ≤ 1"],
    a : 1,
    s : "Since variance is a sum of squares divided by n, σ² ≥ 0, which implies σ ≥ 0."
  },
  {
    q : "Using step-deviation u_i = (x_i − A)/h, the variance σ_x² in terms of σ_u² is:",
    o : ["h σ_u²", "h² σ_u²", "σ_u² / h²", "h² σ_u² + A"],
    a : 1,
    s : "Since x_i = A + h u_i, changing origin A has no effect and scaling by h multiplies variance by h²: σ_x² = h² σ_u²."
  },
  {
    q : "The mean and variance of 7 observations are 8 and 16 respectively. If five of the observations are 2, 4, 10, 12, 14, find the remaining two observations.",
    o : ["6, 8", "5, 9", "4, 10", "7, 7"],
    a : 0,
    s : "Sum of 7 observations = 7 × 8 = 56. Sum of 5 given = 42, so x + y = 14. ∑x_i² = 7(16 + 64) = 560. Sum of squares of 5 given = 4 + 16 + 100 + 144 + 196 = 460, so x² + y² = 100. Solving x + y = 14 and x² + y² = 100 gives 6 and 8."
  },
  {
    q : "The mean and standard deviation of 6 observations are 8 and 4 respectively. If each observation is multiplied by 3, the new mean and new standard deviation are:",
    o : ["24, 12", "24, 36", "11, 7", "24, 4"],
    a : 0,
    s : "New mean = 3 × 8 = 24; new standard deviation = 3 × 4 = 12."
  },
  {
    q : "The mean and standard deviation of 20 observations are found to be 10 and 2 respectively. On rechecking, it was found that an observation 8 was incorrect. If the wrong observation is omitted, what is the correct mean?",
    o : ["10.11", "10.21", "9.89", "10.50"],
    a : 0,
    s : "Incorrect ∑x_i = 20 × 10 = 200. Correct ∑x_i = 200 − 8 = 192 for 19 observations. Correct mean = 192/19 ≈ 10.11."
  },
  {
    q : "In the previous problem (n = 20, incorrect mean = 10, incorrect SD = 2, omitted wrong observation = 8), what is the correct standard deviation?",
    o : ["2.00", "1.85", "2.15", "2.25"],
    a : 0,
    s : "Incorrect ∑x_i² = 20(2² + 10²) = 2080. Correct ∑x_i² = 2080 − 64 = 2016. Correct variance = 2016/19 − (192/19)² = 1440/361 ≈ 3.989, so SD = √(1440/361) ≈ 2.00."
  },
  {
    q : "For a distribution, ∑(x_i − 5) = 3 and ∑(x_i − 5)² = 43, where the total number of observations is 18. Find the mean and standard deviation.",
    o : ["5.17, 1.54", "5.17, 2.36", "4.83, 1.54", "5.00, 1.54"],
    a : 0,
    s : "Mean = 5 + 3/18 = 5 + 1/6 ≈ 5.17. Variance = 43/18 − (3/18)² = 43/18 − 1/36 = 85/36 ≈ 2.361, so SD = √(85/36) ≈ 1.54."
  },
  {
    q : "Coefficient of variation (C.V.) is defined as:",
    o : ["(Mean / SD) × 100", "(SD / Mean) × 100", "(Variance / Mean) × 100", "(SD / Variance) × 100"],
    a : 1,
    s : "Coefficient of variation is a relative measure of dispersion defined as C.V. = (σ / x̄) × 100 (for x̄ ≠ 0)."
  },
  {
    q : "If the coefficient of variation of a distribution is 60 and its standard deviation is 21, what is its arithmetic mean?",
    o : ["30", "35", "40", "45"],
    a : 1,
    s : "C.V. = (σ / x̄) × 100 ⇒ 60 = (21 / x̄) × 100 ⇒ x̄ = 2100 / 60 = 35."
  },
  {
    q : "If the arithmetic mean of a data set is 50 and its coefficient of variation is 20%, the standard deviation is:",
    o : ["5", "10", "15", "25"],
    a : 1,
    s : "20 = (σ / 50) × 100 ⇒ σ = (20 × 50) / 100 = 10."
  },

]
},


{
    title: "Chapter 13 : Statistics ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Statistics ",
    questions: [

  {
    q : "A series with a smaller coefficient of variation is said to be:",
    o : ["More variable", "More consistent", "Less stable", "Having a larger mean"],
    a : 1,
    s : "A smaller C.V. indicates less relative dispersion, meaning the data is more consistent, uniform, or stable."
  },
  {
    q : "Two distributions have coefficients of variation 50 and 60, and their standard deviations are 20 and 15 respectively. What are their arithmetic means?",
    o : ["40 and 25", "25 and 40", "30 and 20", "40 and 30"],
    a : 0,
    s : "Mean 1 = (20 / 50) × 100 = 40. Mean 2 = (15 / 60) × 100 = 25."
  },
  {
    q : "Find the variance for the discrete frequency distribution: x_i = 4, 8, 11, 17, 20, 24, 32 and f_i = 3, 5, 9, 5, 4, 3, 1.",
    o : ["42.8", "45.8", "48.8", "50.8"],
    a : 1,
    s : "N = 30, ∑f_i x_i = 12 + 40 + 99 + 85 + 80 + 72 + 32 = 420, so x̄ = 14. ∑f_i(x_i − 14)² = 3(100) + 5(36) + 9(9) + 5(9) + 4(36) + 3(100) + 1(324) = 1374. Variance = 1374/30 = 45.8."
  },
  {
    q : "If ∑f_i = 100, ∑f_i u_i = 0, ∑f_i u_i² = 116 where u_i = (x_i − 25)/10, find the variance of x_i.",
    o : ["1.16", "11.6", "116", "1160"],
    a : 2,
    s : "σ_u² = 116/100 − 0² = 1.16. Since h = 10, σ_x² = h² σ_u² = 100 × 1.16 = 116."
  },
  {
    q : "The mean and variance of 8 observations are 9 and 9.25 respectively. If six of the observations are 6, 7, 10, 12, 12, 13, find the remaining two observations.",
    o : ["4, 8", "5, 7", "3, 9", "6, 6"],
    a : 0,
    s : "Sum of 8 observations = 72; sum of 6 given = 60, so x + y = 12. ∑x_i² = 8(9.25 + 81) = 722; sum of squares of 6 given = 36 + 49 + 100 + 144 + 144 + 169 = 642, so x² + y² = 80. Solving gives x = 4, y = 8."
  },
  {
    q : "If two samples of sizes n_1 and n_2 have the same mean x̄ and variances σ_1² and σ_2², what is the combined variance σ²?",
    o : ["(n_1 σ_1² + n_2 σ_2²) / (n_1 + n_2)", "(σ_1² + σ_2²) / 2", "(n_1 σ_1 + n_2 σ_2) / (n_1 + n_2)", "σ_1² + σ_2²"],
    a : 0,
    s : "When the two group means are equal, d_1 = d_2 = 0, so combined variance is simply the weighted average (n_1 σ_1² + n_2 σ_2²) / (n_1 + n_2)."
  },
  {
    q : "Which measure of dispersion is most affected by extreme values in a data set?",
    o : ["Range", "Quartile deviation", "Mean deviation about median", "Interquartile range"],
    a : 0,
    s : "Range depends solely on the maximum and minimum observations, making it the most sensitive to extreme outliers."
  },
  {
    q : "The mean deviation of a_1, a_2, ..., a_n from their mean is 0. Which of the following must be true?",
    o : ["All observations are equal", "All observations are zero", "n is even", "Mean is zero"],
    a : 0,
    s : "(1/n) ∑ |a_i − ā| = 0 implies |a_i − ā| = 0 for every i, so a_1 = a_2 = ... = a_n = ā."
  },
  {
    q : "If the standard deviation of a set of numbers is 0, then:",
    o : ["All numbers in the set are equal", "The mean of the numbers is 0", "Half the numbers are positive and half are negative", "The range of the numbers is 1"],
    a : 0,
    s : "σ = 0 implies ∑(x_i − x̄)² = 0, so every x_i equals x̄."
  },
  {
    q : "What is the unit of coefficient of variation?",
    o : ["Same as the unit of data", "Square of the unit of data", "Unitless (pure number / percentage)", "Reciprocal of the unit of data"],
    a : 2,
    s : "Since both standard deviation and mean share the same unit, their ratio (σ / x̄) × 100 is dimensionless."
  },

]
},




// Chapter 14  Probability //


{
    title: "Chapter 14 : Probability ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 01: 10 MCQs on Probability ",
    questions: [

{
    q : "A coin is tossed three times. The number of elements in the sample space is:",
    o : ["3", "6", "8", "9"],
    a : 2,
    s : "Each toss has 2 possible outcomes (H or T). For 3 tosses, the total number of outcomes is 2^3 = 8."
  },
  {
    q : "A die is thrown two times. The number of outcomes in the sample space is:",
    o : ["12", "18", "36", "64"],
    a : 2,
    s : "Each throw of a die has 6 outcomes. For two throws, the sample space has 6 × 6 = 36 elements."
  },
  {
    q : "A coin is tossed and a die is thrown. How many sample points are in the sample space?",
    o : ["8", "12", "16", "36"],
    a : 1,
    s : "The coin has 2 outcomes and the die has 6 outcomes. By the multiplication principle, there are 2 × 6 = 12 sample points."
  },
  {
    q : "A coin is tossed. If it shows head, we draw a ball from a bag containing 3 blue and 4 white balls; if it shows tail, we throw a die. The number of elements in the sample space is:",
    o : ["12", "13", "14", "42"],
    a : 1,
    s : "If head occurs, there are 3 + 4 = 7 possible ball outcomes. If tail occurs, there are 6 die outcomes. Total sample points = 7 + 6 = 13."
  },
  {
    q : "A coin is tossed repeatedly until a head comes up. The sample space of this experiment is:",
    o : ["{H, TH, TTH}", "{H, TH, TTH, TTTH}", "{H, TH, TTH, TTTH, ...}", "{H, T}"],
    a : 2,
    s : "Since a head could appear on the 1st, 2nd, 3rd, or any subsequent toss indefinitely, the sample space is infinite: {H, TH, TTH, TTTH, ...}."
  },
  {
    q : "An event that contains only one sample point of a sample space is called:",
    o : ["Impossible event", "Sure event", "Simple event", "Compound event"],
    a : 2,
    s : "By definition, an event having only one sample point of a sample space is called a simple (or elementary) event."
  },
  {
    q : "An event that has more than one sample point is called a:",
    o : ["Simple event", "Compound event", "Sure event", "Impossible event"],
    a : 1,
    s : "By definition, if an event has more than one sample point, it is called a compound event."
  },
  {
    q : "Two events A and B are said to be mutually exclusive if:",
    o : ["A ∪ B = S", "A ∩ B = ∅", "A ∩ B ≠ ∅", "A = B"],
    a : 1,
    s : "Events A and B are mutually exclusive (disjoint) if they cannot occur simultaneously, meaning A ∩ B = ∅."
  },
  {
    q : "Events E1, E2, ..., En are said to be exhaustive if:",
    o : ["E1 ∩ E2 ∩ ... ∩ En = ∅", "E1 ∪ E2 ∪ ... ∪ En = S", "P(E1) = P(E2) = ... = P(En)", "Each Ei is a simple event"],
    a : 1,
    s : "A collection of events is exhaustive if their union equals the entire sample space S, i.e., at least one of them must occur."
  },
  {
    q : "A die is thrown. Let A be the event 'an even number is obtained' and B be 'an odd number is obtained'. Then A and B are:",
    o : ["Mutually exclusive but not exhaustive", "Exhaustive but not mutually exclusive", "Both mutually exclusive and exhaustive", "Neither mutually exclusive nor exhaustive"],
    a : 2,
    s : "Here A = {2, 4, 6} and B = {1, 3, 5}. Since A ∩ B = ∅ and A ∪ B = {1, 2, 3, 4, 5, 6} = S, they are both mutually exclusive and exhaustive."
  },

]
},


{
    title: "Chapter 14 : Probability ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 02: 10 MCQs on Probability ",
    questions: [

  {
    q : "Two dice are thrown. Let A be the event 'sum is greater than 8' and B be '2 occurs on either die'. Then A ∩ B is:",
    o : ["{(2, 6), (6, 2)}", "{(2, 5), (5, 2)}", "∅", "{(2, 6), (6, 2), (2, 5), (5, 2)}"],
    a : 2,
    s : "If 2 occurs on one die, the maximum possible sum with the other die (at most 6) is 2 + 6 = 8, which is not greater than 8. Thus A ∩ B = ∅."
  },
  {
    q : "Which of the following cannot be a valid assignment of probabilities for outcomes ω1, ω2, ω3, ω4 of a sample space?",
    o : ["0.1, 0.2, 0.3, 0.4", "1/4, 1/4, 1/4, 1/4", "0.1, 0.2, 0.3, 0.5", "0, 0.3, 0.7, 0"],
    a : 2,
    s : "For a valid probability assignment, every probability must lie in [0, 1] and their sum must equal 1. For 0.1 + 0.2 + 0.3 + 0.5 = 1.1 ≠ 1, so it is invalid."
  },
  {
    q : "In a non-leap year, the probability that there are 53 Sundays is:",
    o : ["1/7", "2/7", "52/365", "53/365"],
    a : 0,
    s : "A non-leap year has 365 days = 52 weeks + 1 extra day. That 1 extra day can be any of the 7 days of the week, so P(53 Sundays) = 1/7."
  },
  {
    q : "In a leap year, the probability that there are 53 Sundays is:",
    o : ["1/7", "2/7", "3/7", "53/366"],
    a : 1,
    s : "A leap year has 366 days = 52 weeks + 2 consecutive extra days. Out of 7 possible pairs, 2 pairs (Sat-Sun, Sun-Mon) contain Sunday, giving 2/7."
  },
  {
    q : "A die is thrown once. What is the probability of getting a prime number?",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 2,
    s : "Prime numbers on a die are {2, 3, 5} (3 outcomes out of 6). Therefore, probability = 3/6 = 1/2."
  },
  {
    q : "A coin is tossed twice. What is the probability that at least one tail occurs?",
    o : ["1/4", "1/2", "3/4", "1"],
    a : 2,
    s : "Sample space = {HH, HT, TH, TT}. Outcomes with at least one tail are {HT, TH, TT}. Hence probability = 3/4."
  },
  {
    q : "Three coins are tossed once. What is the probability of getting at most 2 heads?",
    o : ["3/8", "1/2", "7/8", "1/8"],
    a : 2,
    s : "Out of 8 outcomes, only {HHH} has more than 2 heads. Thus 7 outcomes have at most 2 heads, so the probability is 7/8."
  },
  {
    q : "Three coins are tossed once. What is the probability of getting exactly 2 heads?",
    o : ["1/8", "1/4", "3/8", "1/2"],
    a : 2,
    s : "Outcomes with exactly 2 heads are {HHT, HTH, THH} (3 outcomes out of 8). Hence probability = 3/8."
  },
  {
    q : "Two dice are thrown simultaneously. What is the probability of getting a doublet?",
    o : ["1/36", "1/12", "1/6", "5/36"],
    a : 2,
    s : "Doublets are (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) — 6 favorable outcomes out of 36. Probability = 6/36 = 1/6."
  },
  {
    q : "Two dice are thrown simultaneously. What is the probability of getting a sum of 9?",
    o : ["1/12", "1/9", "5/36", "1/6"],
    a : 1,
    s : "Outcomes with sum 9 are (3,6), (4,5), (5,4), (6,3) — 4 outcomes out of 36. Probability = 4/36 = 1/9."
  },

]
},



{
    title: "Chapter 14 : Probability ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 03: 10 MCQs on Probability ",
    questions: [

  {
    q : "Two dice are thrown simultaneously. What is the probability of getting a sum of 10 or more?",
    o : ["1/12", "1/9", "1/6", "5/36"],
    a : 2,
    s : "Sums ≥ 10 occur for (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) — 6 outcomes out of 36. Probability = 6/36 = 1/6."
  },
  {
    q : "One card is drawn from a well-shuffled deck of 52 cards. What is the probability that the card is a diamond?",
    o : ["1/52", "1/13", "1/4", "3/4"],
    a : 2,
    s : "There are 13 diamond cards in a deck of 52 cards. Probability = 13/52 = 1/4."
  },
  {
    q : "One card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is a black face card?",
    o : ["3/26", "3/13", "1/26", "6/13"],
    a : 0,
    s : "There are 6 black face cards (King, Queen, Jack of Spades and Clubs). Probability = 6/52 = 3/26."
  },
  {
    q : "One card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is neither a heart nor a king?",
    o : ["9/13", "4/13", "17/52", "35/52"],
    a : 0,
    s : "Number of hearts or kings = 13 + 4 − 1 = 16. Cards that are neither = 52 − 16 = 36. Probability = 36/52 = 9/13."
  },
  {
    q : "If P(A) = 3/5 and P(B) = 1/5, and A and B are mutually exclusive events, find P(A or B).",
    o : ["2/5", "4/5", "3/25", "1/5"],
    a : 1,
    s : "Since A and B are mutually exclusive, P(A ∪ B) = P(A) + P(B) = 3/5 + 1/5 = 4/5."
  },
  {
    q : "If P(A) = 0.5, P(B) = 0.7 and P(A ∩ B) = 0.3, then P(A ∪ B) is:",
    o : ["0.9", "1.2", "0.8", "0.6"],
    a : 0,
    s : "By the addition rule, P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.5 + 0.7 − 0.3 = 0.9."
  },
  {
    q : "If P(A) = 0.42, P(B) = 0.48 and P(A and B) = 0.16, what is P(not A and not B)?",
    o : ["0.26", "0.74", "0.10", "0.84"],
    a : 0,
    s : "P(A ∪ B) = 0.42 + 0.48 − 0.16 = 0.74. By De Morgan's law, P(A' ∩ B') = 1 − P(A ∪ B) = 1 − 0.74 = 0.26."
  },
  {
    q : "If P(E) = 1/4, P(F) = 1/2 and P(E and F) = 1/8, find P(not E and not F).",
    o : ["3/8", "5/8", "1/8", "7/8"],
    a : 0,
    s : "P(E ∪ F) = 1/4 + 1/2 − 1/8 = 5/8. Therefore, P(E' ∩ F') = 1 − 5/8 = 3/8."
  },
  {
    q : "If 2/11 is the probability of an event A, what is the probability of the event 'not A'?",
    o : ["2/11", "9/11", "1/11", "11/2"],
    a : 1,
    s : "P(not A) = 1 − P(A) = 1 − 2/11 = 9/11."
  },
  {
    q : "Events E and F are such that P(not E or not F) = 0.25. What is P(E and F)?",
    o : ["0.25", "0.50", "0.75", "1.00"],
    a : 2,
    s : "By De Morgan's law, E' ∪ F' = (E ∩ F)'. Thus P(E ∩ F) = 1 − P(E' ∪ F') = 1 − 0.25 = 0.75."
  },

]
},


{
    title: "Chapter 14 : Probability ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 04: 10 MCQs on Probability ",
    questions: [

  {
    q : "A letter is chosen at random from the word 'ASSASSINATION'. Find the probability that the letter is a vowel.",
    o : ["5/13", "6/13", "7/13", "4/13"],
    a : 1,
    s : "The word 'ASSASSINATION' has 13 letters in total, of which 6 are vowels (A, A, I, A, I, O). Probability = 6/13."
  },
  {
    q : "A letter is chosen at random from the word 'ASSASSINATION'. Find the probability that the letter is a consonant.",
    o : ["6/13", "7/13", "8/13", "5/13"],
    a : 1,
    s : "Out of 13 letters, 6 are vowels and 7 are consonants (S, S, S, S, N, T, N). Probability = 7/13."
  },
  {
    q : "In a lottery, a person chooses six different natural numbers at random from 1 to 20, and if these six numbers match the six numbers already fixed by the lottery committee, he wins the prize. What is the probability of winning?",
    o : ["1 / 20C6", "6 / 20C6", "1 / 20P6", "1 / 20^6"],
    a : 0,
    s : "Total ways to choose 6 numbers out of 20 is 20C6. Only 1 combination wins, so the probability is 1 / 20C6."
  },
  {
    q : "A bag contains 9 discs of which 4 are red, 3 are blue and 2 are yellow. A disc is drawn at random. What is the probability that it is either red or blue?",
    o : ["4/9", "3/9", "7/9", "2/9"],
    a : 2,
    s : "Number of red or blue discs = 4 + 3 = 7 out of 9. Since the events are mutually exclusive, P(red or blue) = 7/9."
  },
  {
    q : "A bag contains 9 discs of which 4 are red, 3 are blue and 2 are yellow. A disc is drawn at random. What is the probability that it is NOT blue?",
    o : ["1/3", "2/3", "4/9", "5/9"],
    a : 1,
    s : "P(blue) = 3/9 = 1/3. Therefore, P(not blue) = 1 − 1/3 = 2/3."
  },
  {
    q : "Two students Anil and Ashima appeared in an examination. The probability that Anil will qualify is 0.05 and that Ashima will qualify is 0.10. The probability that both will qualify is 0.02. Find the probability that at least one of them will qualify.",
    o : ["0.13", "0.15", "0.17", "0.87"],
    a : 0,
    s : "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.05 + 0.10 − 0.02 = 0.13."
  },
  {
    q : "In the previous problem (P(Anil) = 0.05, P(Ashima) = 0.10, P(both) = 0.02), what is the probability that both will NOT qualify?",
    o : ["0.85", "0.87", "0.98", "0.13"],
    a : 1,
    s : "P(neither qualifies) = 1 − P(at least one qualifies) = 1 − 0.13 = 0.87."
  },
  {
    q : "In the same problem (P(A) = 0.05, P(B) = 0.10, P(A ∩ B) = 0.02), find the probability that only one of them will qualify.",
    o : ["0.11", "0.13", "0.15", "0.09"],
    a : 0,
    s : "P(only one) = P(A ∪ B) − P(A ∩ B) = 0.13 − 0.02 = 0.11."
  },
  {
    q : "A committee of two persons is selected from 2 men and 2 women. What is the probability that the committee will have no man?",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 0,
    s : "Total committees of 2 from 4 people = 4C2 = 6. Committees with no man (both women) = 2C2 = 1. Probability = 1/6."
  },
  {
    q : "A committee of two persons is selected from 2 men and 2 women. What is the probability that the committee will have one man and one woman?",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 3,
    s : "Ways to select 1 man and 1 woman = 2C1 × 2C1 = 2 × 2 = 4. Total ways = 4C2 = 6. Probability = 4/6 = 2/3."
  },

]
},

{
    title: "Chapter 14 : Probability ", levels: ["Class 11"], minutes: 0,
    desc: " SECTION 05: 10 MCQs on Probability ",
    questions: [

  {
    q : "A box contains 10 red marbles, 20 blue marbles and 30 green marbles. 5 marbles are drawn from the box. What is the probability that all will be blue?",
    o : ["$^{20}C_5/^{60}C_5$", "$20 / 60$", "$(1/3)^5$", "$^{10}C_5 / ^{60}C_5$"],
    a : 0,
    s : "Total marbles = 60. Ways to draw 5 marbles = $^{60}C_5$. Ways to draw 5 blue marbles = $^{20}C_5$. Probability = $^{20}C_5 / ^{60}C_5$."
  },
  {
    q : "A box contains 10 red, 20 blue and 30 green marbles. 5 marbles are drawn at random. What is the probability that at least one will be green?",
    o : ["30C5 / 60C5", "1 − (30C5 / 60C5)", "1 − (20C5 / 60C5)", "30 / 60"],
    a : 1,
    s : "Number of non-green marbles = 10 + 20 = 30. P(no green) = 30C5 / 60C5. Hence, P(at least one green) = 1 − (30C5 / 60C5)."
  },
  {
    q : "4 cards are drawn from a well-shuffled deck of 52 cards. What is the probability of obtaining 3 diamonds and one spade?",
    o : ["(13C3 × 13C1) / 52C4", "(13C3 + 13C1) / 52C4", "13C4 / 52C4", "(13 × 13) / 52C4"],
    a : 0,
    s : "Ways to choose 3 diamonds out of 13 is 13C3, and 1 spade out of 13 is 13C1. Dividing by total ways 52C4 gives (13C3 × 13C1) / 52C4."
  },
  {
    q : "A die has two faces each with number '1', three faces each with number '2' and one face with number '3'. If the die is rolled once, determine P(2).",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 2,
    s : "Out of 6 faces, 3 faces have the number '2'. Thus P(2) = 3/6 = 1/2."
  },
  {
    q : "Using the biased die from the previous question (two '1's, three '2's, one '3'), determine P(1 or 3).",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 2,
    s : "P(1) = 2/6 and P(3) = 1/6. Since getting 1 and getting 3 are mutually exclusive, P(1 or 3) = 2/6 + 1/6 = 3/6 = 1/2."
  },
  {
    q : "In a certain lottery, 10,000 tickets are sold and ten equal prizes are awarded. What is the probability of NOT getting a prize if you buy one ticket?",
    o : ["9 / 10000", "999 / 1000", "9999 / 10000", "1 / 1000"],
    a : 1,
    s : "Out of 10,000 tickets, 10 win and 9,990 do not win. For 1 ticket, P(not winning) = 9990 / 10000 = 999 / 1000."
  },
  {
    q : "Out of 100 students, two sections of 40 and 60 are formed. If you and your friend are among the 100 students, what is the probability that you both enter the same section?",
    o : ["(40C2 + 60C2) / 100C2", "40C2 / 100C2", "60C2 / 100C2", "1 / 2"],
    a : 0,
    s : "Total ways to select 2 students out of 100 is 100C2. Both enter the section of 40 in 40C2 ways, or both enter the section of 60 in 60C2 ways. Thus P = (40C2 + 60C2) / 100C2."
  },
  {
    q : "Three letters are dictated to three persons and an envelope is addressed to each of them, the letters are inserted into the envelopes at random so that each envelope contains exactly one letter. Find the probability that at least one letter is in its proper envelope.",
    o : ["1/6", "1/3", "1/2", "2/3"],
    a : 3,
    s : "Total arrangements = 3! = 6. Arrangements with 0 letters in proper envelope (derangements of 3) = 2. Thus 6 − 2 = 4 arrangements have at least one proper letter, giving 4/6 = 2/3."
  },
  {
    q : "A and B are two events such that P(A) = 0.54, P(B) = 0.69 and P(A ∩ B) = 0.35. Find P(A ∩ B').",
    o : ["0.19", "0.34", "0.88", "0.12"],
    a : 0,
    s : "P(A ∩ B') = P(A) − P(A ∩ B) = 0.54 − 0.35 = 0.19."
  },
  {
    q : "From the employees of a company, 5 persons are selected to represent them in the managing committee. The particulars are: Harish (30, M), Rohan (33, M), Sheetal (46, F), Alis (28, F), Salim (41, M). A person is selected at random from this group to act as a spokesperson. What is the probability that the spokesperson will be either male or over 35 years?",
    o : ["2/5", "3/5", "4/5", "1"],
    a : 2,
    s : "Males = {Harish, Rohan, Salim} (3). Over 35 = {Sheetal (46), Salim (41)} (2). Union = {Harish, Rohan, Salim, Sheetal} (4 out of 5). Probability = 4/5."
  },

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

);
