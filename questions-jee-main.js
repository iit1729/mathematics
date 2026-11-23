/* =====================================================================
   JEE Main TESTS.  Add or change JEE Main tests in this file only.
   Same rules as in questions-class11.js (title, desc, levels, minutes, questions). Keep every test inside window.TESTS.push( ... ).
   (The two Quadratic Equations tests already appear under JEE Main, because their levels include "JEE Main".)
   ===================================================================== */
window.TESTS = window.TESTS || [];
window.TESTS.push(
  /* Add your JEE Main tests here. Example (remove the comment marks to use it):



             /* ----- CHAPTER TESTS JEE MAIN ----- */
{
    title: "UNIT 01 : SETS, RELATIONS & FUNCTIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION A: SETS",
    questions: [
      
{ q: "If A has 3 elements, the number of elements in P(P(A)), where P denotes the power set, is",   o: ["64", "256", "128", "512"], a: 1,   s:  "n(P(A)) = 2³ = 8. Then n(P(P(A))) = 2⁸ = 256." },

{ q: "Let A = {1, 2, {3, 4}}. Which of the following statements is true?",   o: ["{3, 4} ⊂ A", "{{3, 4}} ⊂ A and {3, 4} ∈ A", "3 ∈ A", "{1, 2, 3} ⊂ A"], a: 1,
  s: "The elements of A are 1, 2 and the set {3, 4}. So {3, 4} ∈ A, and the set {{3, 4}} has its only element in A, so {{3, 4}} ⊂ A. But 3 ∉ A, so {3, 4} ⊄ A, 3 ∉ A and {1, 2, 3} ⊄ A." },

{ q: "The number of subsets of {1, 2, 3, ..., 10} that contain at least one odd number is",   o: ["1023", "1000", "1008", "992"], a: 3,
  s: "Total subsets = 2¹⁰ = 1024. Subsets with no odd number use only {2, 4, 6, 8, 10}, giving 2⁵ = 32. Required = 1024 − 32 = 992." },

{ q: "Set A has 960 more subsets than set B, and n(A) − n(B) = 4. Then n(A) + n(B) equals",   o: ["14", "12", "16", "18"], a: 2,
  s: "Let n(B) = m, so n(A) = m + 4. Then 2^(m+4) − 2^m = 960, so 15·2^m = 960 and 2^m = 64, giving m = 6. n(A) = 10, so n(A) + n(B) = 16." },

{ q: "Let A = {x ∈ ℝ : x² − 3|x| + 2 = 0}. The number of subsets of A containing at least two elements is",   o: ["11", "13", "12", "15"], a: 0,
  s: "Put |x| = t, so t² − 3t + 2 = 0 and t = 1 or 2. Then A = {−2, −1, 1, 2}, with 4 elements. Subsets with at least 2 elements = 2⁴ − 1 − 4 = 11." },

{ q: "Let A = {x ∈ ℝ : |x − 1| ≤ 3} and B = {x ∈ ℝ : |x| > 1}. Then A − B equals",   o: ["[−1, 1]", "[−2, 1]", "[−2, −1) ∪ (1, 4]", "(−1, 1)"], a: 0,
  s: "A = [−2, 4] and B = (−∞, −1) ∪ (1, ∞). A − B = A ∩ B′ = [−2, 4] ∩ [−1, 1] = [−1, 1]." },

{ q: "Let A = {n ∈ ℕ : n is a multiple of 3, n ≤ 100} and B = {n ∈ ℕ : n is a multiple of 5, n ≤ 100}. Then n(A ∪ B) equals",   o: ["53", "50", "47", "46"], a: 2,   s: "n(A) = ⌊100/3⌋ = 33 and n(B) = ⌊100/5⌋ = 20. A ∩ B is the set of multiples of 15, so n(A ∩ B) = ⌊100/15⌋ = 6. n(A ∪ B) = 33 + 20 − 6 = 47." },

{ q: "In a group of 60 people, 30 drink tea, 25 drink coffee and 20 drink milk. 10 drink tea and coffee, 8 drink coffee and milk, 7 drink tea and milk, and 3 drink all three. The number of people who drink exactly one of the three is",   o: ["36", "30", "38", "34"], a: 3,   s: "Exactly one = Σn(single) − 2Σn(pairs) + 3n(all three) = 75 − 2(25) + 3(3) = 34." },

{ q: "In a town of 10000 people, 40% read newspaper A, 20% read B and 10% read C. 5% read both A and B, 3% read both B and C, 4% read both A and C, and 2% read all three. The number of people who read none of the three newspapers is",   o: ["5000", "3000", "6000", "4000"], a: 3,
  s: "Percentage reading at least one = 40 + 20 + 10 − 5 − 3 − 4 + 2 = 60%. Percentage reading none = 40%, which is 40% of 10000 = 4000." },

{ q: "If n(A) = 25, n(B) = 30 and n(A ∪ B) ≤ 40, the minimum possible value of n(A ∩ B) is",   o: ["15", "10", "5", "25"], a: 0,
  s: "n(A ∩ B) = n(A) + n(B) − n(A ∪ B) ≥ 55 − 40 = 15. The minimum is attained when n(A ∪ B) = 40." }, 

{ q: "For any two sets A and B in a universal set U, the set (A ∪ B)′ ∪ (A′ ∩ B) equals",   o: ["A′ ∩ B′", "B′", "A′", "A ∩ B′"], a: 2,   s: "By De Morgan, (A ∪ B)′ = A′ ∩ B′. So the set is (A′ ∩ B′) ∪ (A′ ∩ B) = A′ ∩ (B′ ∪ B) = A′ ∩ U = A′." },

{ q: "A × B has 6 elements, and three of them are (1, 3), (2, 5) and (3, 3). The remaining three elements of A × B are",   o: ["(1, 2), (3, 5), (5, 3)", "(1, 5), (2, 3), (3, 5)", "(3, 1), (5, 2), (5, 3)", "(1, 5), (2, 3), (5, 3)"], a: 1,   s: "A contains 1, 2, 3 and B contains 3, 5. Since n(A)·n(B) = 6, A = {1, 2, 3} and B = {3, 5}. A × B = {(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)}. The remaining elements are (1,5), (2,3), (3,5)." },

{ q: "Which of the following is true for all sets A, B, C, D?",   o: ["(A × B) ∪ (C × D) = (A ∪ C) × (B ∪ D)", "(A × B) − (C × D) = (A − C) × (B − D)", "A × B = B × A", "(A × B) ∩ (C × D) = (A ∩ C) × (B ∩ D)"], a: 3,   s: "(x, y) is in both A × B and C × D iff x ∈ A ∩ C and y ∈ B ∩ D, so (A × B) ∩ (C × D) = (A ∩ C) × (B ∩ D) is an identity. The union statement fails for A = B = {1}, C = D = {2}: LHS has 2 elements, RHS has 4. The difference statement fails for A = B = {1, 2}, C = D = {1}: LHS has 3 elements, RHS has 1. A × B = B × A holds only if A = B or one of them is empty." },

{ q: "Let A = {(x, y) : x² + y² = 25} and B = {(x, y) : x² + 9y² = 144}, where x, y ∈ ℝ. Then n(A ∩ B) equals",   o: ["4", "2", "3", "0"], a: 0,
  s: "Subtracting the equations gives 8y² = 119, so y² = 119/8. Then x² = 25 − 119/8 = 81/8 > 0. Both y = ±√(119/8) and x = ±√(81/8) are real, so there are 2 × 2 = 4 points of intersection." },

]
},


{
title: "UNIT 01 : SETS, RELATIONS & FUNCTIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION B: RELATIONS",
    questions: [

{ q: "Let A = {1, 2, 3} and B = {a, b, c, d}. The number of relations from A to B that contain the ordered pair (1, a) is",   o: ["4096", "2048", "1024", "2047"], a: 1,   s: "A × B has 12 ordered pairs. (1, a) is fixed to be in the relation, and each of the other 11 pairs can be included or not. Count = 2¹¹ = 2048." }, 

{ q: "The number of reflexive relations on a set with 4 elements is",   o: ["16", "256", "4096", "65536"], a: 2,   s: "The 4 diagonal pairs (x, x) are forced. Each of the remaining 16 − 4 = 12 pairs may be present or absent. Count = 2¹² = 4096." },

{ q: "The number of symmetric relations on A = {1, 2, 3} that are NOT reflexive is",   o: ["64", "8", "56", "72"], a: 2,   s: "A symmetric relation chooses each of the 3 diagonal pairs freely (2³) and each of the 3 unordered off-diagonal pairs freely (2³). Total = 2⁶ = 64. A reflexive symmetric relation must contain all 3 diagonal pairs, giving 2³ = 8. Required = 64 − 8 = 56." },

{ q: "The number of relations on A = {1, 2, 3, 4} that are both reflexive and symmetric is",   o: ["16", "64", "32", "1024"], a: 1,   s: "All 4 diagonal pairs are forced. Each of the C(4,2) = 6 unordered off-diagonal pairs can be included (both orders) or excluded. Count = 2⁶ = 64." },

{ q: "The number of antisymmetric relations on a set with 3 elements is",   o: ["64", "216", "512", "729"], a: 1,   s: "Each of the 3 diagonal pairs (x, x) can be in or out: 2³ ways. For each of the 3 unordered pairs {x, y} with x ≠ y, at most one of (x, y) and (y, x) can be present, giving 3 choices (neither, first, second): 3³ ways. Total = 8 × 27 = 216." },

{ q: "Let R be the relation on A = {1, 2, 3, 4, 5, 6} defined by x R y if and only if x divides y. Then n(R) equals",   o: ["12", "21", "16", "14"], a: 3,   s: "Count pairs (x, y): x = 1 gives 6 pairs, x = 2 gives y = 2, 4, 6 (3 pairs), x = 3 gives y = 3, 6 (2 pairs), and x = 4, 5, 6 give 1 pair each. Total = 6 + 3 + 2 + 1 + 1 + 1 = 14." },

{ q: "On ℝ, a relation R is defined by x R y if and only if xy ≥ 0. Then R is",   o: ["an equivalence relation", "reflexive and transitive but not symmetric", "symmetric and transitive but not reflexive", "reflexive and symmetric but not transitive"], a: 3,   s: "Reflexive: x·x = x² ≥ 0. Symmetric: xy = yx. Not transitive: 1 R 0 and 0 R (−1) since both products are 0, but 1·(−1) = −1 < 0, so 1 is not related to −1." },

{ q: "On the set of all straight lines in a plane, R is defined by L₁ R L₂ if and only if L₁ ⊥ L₂. Then R is",   o: ["symmetric but neither reflexive nor transitive", "reflexive", "an equivalence relation", "transitive but not symmetric"], a: 0,   s: "Symmetric: L₁ ⊥ L₂ implies L₂ ⊥ L₁. Not reflexive: no line is perpendicular to itself. Not transitive: if L₁ ⊥ L₂ and L₂ ⊥ L₃, then L₁ ∥ L₃, so L₁ is not perpendicular to L₃." },

{ q: "Which of the following is an equivalence relation on A = {1, 2, 3}?",   o: ["{(1,1), (2,2), (3,3), (1,2), (2,1)}", "{(1,1), (2,2), (3,3), (1,2)}", "{(1,1), (2,2), (1,2), (2,1)}", "{(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)}"], a: 0,   s: "{(1,1), (2,2), (3,3), (1,2)} is not symmetric ((2,1) missing). {(1,1), (2,2), (1,2), (2,1)} is not reflexive ((3,3) missing). The relation with (1,2), (2,3), (1,3) added to the diagonal is not symmetric. The relation {(1,1), (2,2), (3,3), (1,2), (2,1)} is reflexive, symmetric and transitive (only 1 and 2 are related), so it is an equivalence relation." },

{ q: "On ℤ, define x R y if and only if 3x + 4y is divisible by 7. Then R is",   o: ["reflexive only", "symmetric but not transitive", "an equivalence relation", "reflexive and symmetric but not transitive"], a: 2,   s: "3x + 4y = 3(x − y) + 7y. So 7 | (3x + 4y) iff 7 | 3(x − y) iff 7 | (x − y), since gcd(3, 7) = 1. This is congruence mod 7, which is reflexive, symmetric and transitive, hence an equivalence relation." },

{ q: "Let R = {(1,1), (2,2), (3,3), (1,2), (2,3)} be a relation on {1, 2, 3}. The minimum number of ordered pairs that must be added to R to make it an equivalence relation is",   o: ["4", "3", "2", "5"], a: 0,   s: "Symmetry needs 1~2 and 2~3, and transitivity then forces 1~3. All three elements fall in one class, so the smallest equivalence relation is the full A × A with 9 pairs. R has 5 pairs, so 9 − 5 = 4 pairs must be added, namely (2,1), (3,2), (1,3), (3,1)." },

{ q: "The number of equivalence relations on the set {1, 2, 3, 4} is",   o: ["24", "16", "15", "14"], a: 2,   s: "Equivalence relations correspond to partitions of the set. Partitions of a 4-set: one block (1) + type 2+2 (3) + type 3+1 (4) + type 2+1+1 (6) + all singletons (1) = 15." },

{ q: "R is the equivalence relation on {1, 2, 3, 4, 5, 6} whose equivalence classes are {1, 2, 3}, {4, 5} and {6}. The number of ordered pairs in R is",   o: ["12", "13", "14", "15"], a: 2,   s: "A class of size k contributes k² ordered pairs. Total = 3² + 2² + 1² = 9 + 4 + 1 = 14." },

{ q: "On ℤ, x R y if and only if x² − y² is divisible by 5. The number of distinct equivalence classes of R is",   o: ["2", "5", "4", "3"], a: 3,
  s: "x R y iff x² ≡ y² (mod 5), which is an equivalence relation. Squares mod 5: x ≡ 0 gives 0, x ≡ ±1 gives 1, x ≡ ±2 gives 4. So there are three classes: multiples of 5, numbers ≡ ±1 (mod 5), and numbers ≡ ±2 (mod 5)." },

{ q: "On ℕ × ℕ, (a, b) R (c, d) if and only if ad = bc. The pair that belongs to the equivalence class of (2, 3) is",   o: ["(6, 8)", "(3, 2)", "(5, 7)", "(4, 6)"], a: 3,   s: "ad = bc is equivalent to a/b = c/d, so the class of (2, 3) is the set of pairs with ratio 2/3. For (4, 6): 2·6 = 12 = 3·4, so it belongs. For (3, 2): 4 ≠ 9. For (5, 7): 14 ≠ 15. For (6, 8): 16 ≠ 18." },

{ q: "Let R = {(x, y) : x, y ∈ ℕ, 2x + y = 41}. The sum of all elements of the range of R is",   o: ["210", "400", "420", "441"], a: 1,   s: "y = 41 − 2x must be a natural number, so x = 1, 2, ..., 20 and y = 39, 37, ..., 1. The range is the first 20 odd numbers, with sum 20² = 400." },

]
},


{
title: "UNIT 01 : SETS, RELATIONS & FUNCTIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION C: FUNCTIONS",
    questions: [

{ q: "The domain of f(x) = 1/√(|x| − x) is",   o: ["(−∞, 0]", "(−∞, 0)", "(0, ∞)", "ℝ"], a: 1,   s: "Need |x| − x > 0, i.e. |x| > x. This holds only when x < 0. Domain = (−∞, 0)." },

{ q: "The domain of f(x) = √(4 − x²) + ln(x − 1) is",   o: ["[−2, 2]", "[1, 2]", "(1, 2)", "(1, 2]"], a: 3,   s: "√ requires 4 − x² ≥ 0, so −2 ≤ x ≤ 2. ln requires x − 1 > 0, so x > 1. Intersection = (1, 2]." },

{ q: "The domain of f(x) = 1/√(⌊x⌋² − ⌊x⌋ − 6), where ⌊x⌋ is the greatest integer function, is",   o: ["(−∞, −3] ∪ [4, ∞)", "(−∞, −2] ∪ [4, ∞)", "(−∞, −2) ∪ [4, ∞)", "(−∞, −2) ∪ (3, ∞)"], a: 2,   s: "Need (⌊x⌋ − 3)(⌊x⌋ + 2) > 0, so ⌊x⌋ > 3 or ⌊x⌋ < −2. As ⌊x⌋ is an integer, ⌊x⌋ ≥ 4 or ⌊x⌋ ≤ −3. That gives x ≥ 4 or x < −2." },

{ q: "The domain of f(x) = log₁₀(1 − log₁₀(x² − 5x + 16)) is",   o: ["[2, 3]", "(2, 3)", "(−∞, 2) ∪ (3, ∞)", "(0, ∞)"], a: 1,   s: "x² − 5x + 16 has discriminant 25 − 64 < 0, so it is always positive and the inner log is defined. Need 1 − log₁₀(x² − 5x + 16) > 0, i.e. x² − 5x + 16 < 10, i.e. x² − 5x + 6 < 0, which gives 2 < x < 3." },

{ q: "The domain of f(x) = 1/√(x − ⌊x⌋) is",   o: ["ℝ", "ℝ − {0}", "ℝ − ℤ", "(0, ∞)"], a: 2,   s: "x − ⌊x⌋ = {x} ≥ 0 always, and it equals 0 exactly at integers. For the square root in the denominator we need {x} > 0, so x must not be an integer. Domain = ℝ − ℤ." },

       /* ---- C2. Range ---- */

{ q: "The range of f(x) = (x² + x + 2)/(x² + x + 1), x ∈ ℝ, is",   o: ["(1, 7/3]", "[1, 7/3]", "(1, 4/3]", "(1, ∞)"], a: 0,   s: "f(x) = 1 + 1/t with t = x² + x + 1 = (x + ½)² + ¾ ≥ ¾. So 0 < 1/t ≤ 4/3, and f ∈ (1, 7/3]. The value 1 is never attained since 1/t > 0." },

{ q: "The range of f(x) = 1/(2 − cos 3x) is",   o: ["[1/3, 1]", "[1/3, 1)", "(1/3, 1]", "[1/2, 1]"], a: 0,   s: "cos 3x ∈ [−1, 1], so 2 − cos 3x ∈ [1, 3]. The reciprocal lies in [1/3, 1], and both ends are attained." },

{ q: "The range of f(x) = sin²x + sin x + 1 is",   o: ["[1/2, 3]", "[3/4, 1]", "[1, 3]", "[3/4, 3]"], a: 3,   s: "Let t = sin x ∈ [−1, 1]. Then f = t² + t + 1 = (t + ½)² + ¾. The minimum is ¾ at t = −½, and the maximum is at t = 1, giving 3. Range = [3/4, 3]." },

{ q: "The range of f(x) = (x² − 3x + 2)/(x² + x − 6) is",   o: ["ℝ − {1}", "ℝ − {1, −1/5}", "ℝ − {1, 1/5}", "ℝ − {0, 1}"], a: 2,   s: "For x ≠ 2, −3: f(x) = (x − 1)/(x + 3) = 1 − 4/(x + 3), which takes every real value except 1. But x = 2 is excluded from the domain, which removes the value (2 − 1)/(2 + 3) = 1/5. Range = ℝ − {1, 1/5}." },

{ q: "The range of f(x) = |x − 1| + |x − 2| + |x − 3| is",   o: ["[2, ∞)", "[1, ∞)", "[0, ∞)", "[3, ∞)"], a: 0,   s: "f is the sum of distances from x to 1, 2 and 3, minimised at the median x = 2, where f = 1 + 0 + 1 = 2. f is continuous and tends to ∞ as |x| → ∞. Range = [2, ∞)." },

{ q: "The range of f(x) = x² − 4x + 3 on the domain [0, 3] is",   o: ["[0, 3]", "[−1, 0]", "[−1, 3]", "[−1, ∞)"], a: 2,   s: "f(x) = (x − 2)² − 1. The vertex x = 2 lies in [0, 3], giving the minimum f(2) = −1. At the endpoints f(0) = 3 and f(3) = 0, so the maximum is 3. Range = [−1, 3]." },

{ q: "The range of f(x) = ⌊x⌋ + ⌊−x⌋, where ⌊·⌋ is the greatest integer function, is",   o: ["{0}", "[−1, 0]", "{−1, 1}", "{−1, 0}"], a: 3,   s: "If x is an integer, ⌊x⌋ + ⌊−x⌋ = x − x = 0. If x is not an integer, ⌊−x⌋ = −⌊x⌋ − 1, so the sum is −1. Range = {−1, 0}." },

{ q: "The range of f(x) = {x} + {−x}, where {·} is the fractional part, is",   o: ["{0}", "{1}", "[0, 1]", "{0, 1}"], a: 3,   s: "If x is an integer, {x} = {−x} = 0, so f = 0. If x is not an integer, {−x} = 1 − {x}, so f = 1. Range = {0, 1}." },

       /* ---- C3. Function concept, equality ---- */

{ q: "Which of the following is NOT a function from A = {1, 2, 3} to B = {a, b}?",   o: ["{(1,a), (2,a), (3,a)}", "{(1,a), (2,b), (3,b)}", "{(1,b), (2,b), (3,a)}", "{(1,a), (1,b), (2,a), (3,b)}"], a: 3,   s: "A function assigns exactly one image to every element of A. In {(1,a), (1,b), (2,a), (3,b)}, the element 1 has two images (a and b), so it is not a function. The other three sets assign exactly one image to each of 1, 2, 3." },

{ q: "Which of the following pairs of functions are equal?",   o: ["f(x) = x²/x and g(x) = x", "f(x) = √(x²) and g(x) = |x|", "f(x) = ln(x²) and g(x) = 2 ln x", "f(x) = (x² − 1)/(x − 1) and g(x) = x + 1"], a: 1,   s: "Two functions are equal iff they have the same domain and the same rule. √(x²) = |x| for all real x, so f(x) = √(x²) and g(x) = |x| are equal. x²/x is undefined at 0 while x is not. ln(x²) is defined for x ≠ 0 while 2 ln x needs x > 0. (x² − 1)/(x − 1) is undefined at 1 while x + 1 is not." },

         /* ---- C4. One-one, onto, counting ---- */

{ q: "The function f : ℝ → ℝ defined by f(x) = x/(1 + x²) is",   o: ["neither one-one nor onto", "onto but not one-one", "one-one but not onto", "both one-one and onto"], a: 0,   s: "f(2) = 2/5 = f(1/2), so f is not one-one. Since 1 + x² ≥ 2|x|, we get |f(x)| ≤ 1/2, so the range is [−1/2, 1/2] ≠ ℝ and f is not onto." },

{ q: "The function f(x) = x²/(1 + x²) is a surjection from ℝ onto",   o: ["ℝ", "[0, 1]", "(0, 1)", "[0, 1)"], a: 3,   s: "Put y = x²/(1 + x²). Then x² = y/(1 − y) ≥ 0, which needs 0 ≤ y < 1. Range = [0, 1)." },

{ q: "If f : ℝ → [a, ∞) defined by f(x) = x² − 6x + 11 is onto, then a equals",   o: ["11", "2", "3", "−2"], a: 1,
  s: "f(x) = (x − 3)² + 2 has minimum value 2 at x = 3 and takes all values in [2, ∞). For f to be onto the codomain [a, ∞), we need a = 2." },

{ q: "The set of all values of a for which f(x) = x³ + ax is one-one on ℝ is",   o: ["a ≤ 0", "a ≥ 0", "a > 0", "all real a"], a: 1,
  s: "f′(x) = 3x² + a. If a ≥ 0, f′(x) ≥ 0 with equality at most at one point, so f is strictly increasing and one-one. If a < 0, f′ is negative on some interval around 0 and positive outside it, so f is not monotonic and takes some values more than once. Hence a ≥ 0." },

{ q: "The number of onto functions from {1, 2, 3, 4, 5} to {a, b, c} is",   o: ["120", "180", "150", "243"], a: 2,   s: "By inclusion-exclusion: 3⁵ − C(3,1)·2⁵ + C(3,2)·1⁵ = 243 − 96 + 3 = 150." },

{ q: "The number of onto functions from a 6-element set to a 2-element set is",   o: ["64", "62", "60", "30"], a: 1,   s: "Total functions = 2⁶ = 64. The only functions that are not onto are the 2 constant functions. Onto functions = 64 − 2 = 62." },

{ q: "The number of functions from {1, 2, 3, 4} to {a, b, c} that are NOT onto is",   o: ["45", "36", "48", "81"], a: 0,   s: "Total functions = 3⁴ = 81. Onto functions = 3⁴ − 3·2⁴ + 3 = 36. Not onto = 81 − 36 = 45." },

{ q: "The number of strictly increasing functions f : {1, 2, 3} → {1, 2, 3, 4, 5, 6} is",   o: ["15", "20", "24", "120"], a: 1,   s: "A strictly increasing function is fixed by choosing 3 distinct values from the codomain, which are then assigned in increasing order. Count = C(6, 3) = 20." },

{ q: "The number of functions f : {1, 2, 3} → {1, 2, 3} satisfying f(f(x)) = f(x) for all x is",   o: ["10", "8", "6", "12"], a: 0,   s: "f(f(x)) = f(x) means f fixes every element of its image. If the image has k elements (which must be fixed points), choose them in C(3, k) ways and map each of the other 3 − k elements into the image in k^(3−k) ways. k = 1: 3·1² = 3. k = 2: 3·2¹ = 6. k = 3: 1·1 = 1. Total = 3 + 6 + 1 = 10." },

{ q: "The number of bijections f : {1, 2, 3, 4} → {1, 2, 3, 4} such that f(i) ≠ i for every i is",   o: ["9", "6", "12", "14"], a: 0,   s: "This is the number of derangements of 4 objects: D₄ = 4!(1 − 1/1! + 1/2! − 1/3! + 1/4!) = 24 − 24 + 12 − 4 + 1 = 9." }, 


      /* ---- C5. Composition, inverse ---- */

{ q: "Let f(x) = 3x + 2 and g(x) = x². The sum of all real x for which (f∘g)(x) = (g∘f)(x) is",   o: ["−1/3", "2", "−2", "0"], a: 2,   s: "(f∘g)(x) = 3x² + 2 and (g∘f)(x) = (3x + 2)² = 9x² + 12x + 4. Equating gives 6x² + 12x + 2 = 0, i.e. 3x² + 6x + 1 = 0. Discriminant 36 − 12 > 0, so the roots are real, and their sum is −6/3 = −2." },

{ q: "Let f(x) = (x + 1)/(x − 1), x ≠ 1, and let fₙ denote f composed with itself n times. Then f₂₀₂₇(3) equals",   o: ["3", "1/2", "4", "2"], a: 3,
  s: "f(f(x)) = [(x+1)/(x−1) + 1] / [(x+1)/(x−1) − 1] = (2x/(x−1)) / (2/(x−1)) = x. So f is self-inverse, and an odd number of compositions equals f. f₂₀₂₇(3) = f(3) = 4/2 = 2." },

{ q: "Let f(x) = x/√(1 + x²) and let fₙ denote f composed with itself n times. Then f₁₀₀(1) equals",   o: ["1/10", "1/√101", "1/101", "1/√100"], a: 1,   s: "f(f(x)) = f(x)/√(1 + f(x)²). Since 1 + x²/(1 + x²) = (1 + 2x²)/(1 + x²), we get f₂(x) = x/√(1 + 2x²). By induction fₙ(x) = x/√(1 + nx²). So f₁₀₀(1) = 1/√101." },

{ q: "If f(x) = 2x + 1 and g(x) = x³, then (f∘g)⁻¹(x) equals",   o: ["(x − 1)^(1/3)/2", "2(x − 1)^(1/3)", "((x − 1)/2)^(1/3)", "((x + 1)/2)^(1/3)"], a: 2,   s: "(f∘g)(x) = 2x³ + 1. Put y = 2x³ + 1, so x³ = (y − 1)/2 and x = ((y − 1)/2)^(1/3). Hence (f∘g)⁻¹(x) = ((x − 1)/2)^(1/3)." },

{ q: "If f : [2, ∞) → [1, ∞) is defined by f(x) = x² − 4x + 5, then f⁻¹(x) equals",   o: ["2 − √(x − 1)", "4 + √(x − 1)", "2 + √(x − 1)", "2 + √(x + 1)"], a: 2,   s: "y = (x − 2)² + 1, so (x − 2)² = y − 1. Since x ≥ 2, x = 2 + √(y − 1). Hence f⁻¹(x) = 2 + √(x − 1)." },

{ q: "Let f : ℝ → (−1, 1) be defined by f(x) = x/(1 + |x|). Then f⁻¹(3/5) equals",   o: ["3/2", "5/3", "3/8", "2/3"], a: 0,   s: "f is a bijection, and x has the same sign as y. For y > 0, y = x/(1 + x), so x = y/(1 − y). With y = 3/5, x = (3/5)/(2/5) = 3/2. Check: f(3/2) = (3/2)/(5/2) = 3/5." },

{ q: "If f(x) = (2x + 3)/(x + k) is its own inverse, then k equals",   o: ["−2", "2", "3", "−3"], a: 0,   s: "A Möbius function (ax + b)/(cx + d) is self-inverse iff a + d = 0. Here a = 2 and d = k, so 2 + k = 0 and k = −2. Check: f(f(x)) = x for f(x) = (2x + 3)/(x − 2)." },

    /* ---- C6. Even/odd, periodic ---- */

{ q: "The function f(x) = ln(x + √(x² + 1)) is",   o: ["odd", "even", "neither even nor odd", "both even and odd"], a: 0,   s: "f(−x) = ln(√(x²+1) − x) = ln[1/(√(x²+1) + x)] = −ln(x + √(x²+1)) = −f(x). So f is odd." },

{ q: "The function f(x) = 1/(2ˣ − 1) + 1/2, x ≠ 0, is",   o: ["odd", "even", "neither even nor odd", "periodic"], a: 0,   s: "f(−x) = 1/(2⁻ˣ − 1) + 1/2 = 2ˣ/(1 − 2ˣ) + 1/2 = −2ˣ/(2ˣ − 1) + 1/2 = −[1 + 1/(2ˣ − 1)] + 1/2 = −1/(2ˣ − 1) − 1/2 = −f(x). So f is odd." },

{ q: "The period of f(x) = sin(2x/3) + cos(3x/2) is",   o: ["3π", "4π", "6π", "12π"], a: 3,   s: "The period of sin(2x/3) is 2π/(2/3) = 3π, and of cos(3x/2) is 2π/(3/2) = 4π/3. The LCM of 3π = 9(π/3) and 4π/3 = 4(π/3) is 36(π/3) = 12π." },

{ q: "The fundamental period of f(x) = sin⁴x + cos⁴x is",   o: ["π", "π/4", "π/2", "2π"], a: 2,   s: "sin⁴x + cos⁴x = 1 − 2sin²x cos²x = 1 − ½sin²2x = 1 − ¼(1 − cos 4x) = ¾ + ¼cos 4x. Its period is 2π/4 = π/2." },

{ q: "A function f : ℝ → ℝ satisfies f(x + 1) + f(x − 1) = √2 f(x) for all x. Then f is necessarily periodic with period",
  o: ["4", "6", "12", "8"], a: 3,   s: "Replace x by x + 1 repeatedly. f(x + 2) = √2 f(x + 1) − f(x). Then f(x + 3) = √2 f(x + 2) − f(x + 1) = f(x + 1) − √2 f(x). And f(x + 4) = √2 f(x + 3) − f(x + 2) = −f(x). So f(x + 8) = f(x). The example f(x) = cos(πx/4) satisfies the equation and has period 8, not 4." },

          /* ---- C7. Functional equations, greatest integer ---- */

{ q: "A function f satisfies f(x) + 2f(1/x) = 3x for all x ≠ 0. The set of all real x for which f(x) = f(−x) is",   o: ["{√2}", "{−√2, √2}", "{−2, 2}", "∅"], a: 1,   s: "Replacing x by 1/x gives f(1/x) + 2f(x) = 3/x. Solving the two equations gives f(x) = 2/x − x, which is odd, so f(−x) = −f(x). Then f(x) = f(−x) means f(x) = 0, so 2/x = x and x² = 2, giving x = ±√2." }, 

{ q: "A function f : ℝ → ℝ satisfies f(x + y) = f(x)f(y) for all x, y, with f(1) = 2. If Σ (k = 1 to n) f(a + k) = 16(2ⁿ − 1) for all n, then a equals",   o: ["2", "4", "3", "5"], a: 2,   s: "f(x) = 2ˣ. Then Σ 2^(a+k) = 2^a · 2(2ⁿ − 1) = 2^(a+1)(2ⁿ − 1). Equating with 16(2ⁿ − 1) gives 2^(a+1) = 16, so a = 3." },

{ q: "If f(x) = 4ˣ/(4ˣ + 2), then the value of f(1/41) + f(2/41) + f(3/41) + ... + f(40/41) is",   o: ["10", "20", "21", "40"], a: 1,   s: "f(x) + f(1 − x) = 4ˣ/(4ˣ + 2) + 4/(4 + 2·4ˣ) = 4ˣ/(4ˣ + 2) + 2/(2 + 4ˣ) = 1. Pair the terms k/41 and (41 − k)/41. The 40 terms form 20 pairs, each summing to 1. Total = 20." },

{ q: "The number of real solutions of the equation 2⌊x⌋ = x + 2{x}, where ⌊x⌋ is the greatest integer and {x} is the fractional part, is",
  o: ["3", "2", "1", "4"], a: 0,   s: "Write x = n + f with n = ⌊x⌋ and f = {x} ∈ [0, 1). The equation becomes 2n = n + 3f, so f = n/3. Then 0 ≤ n/3 < 1 gives n = 0, 1, 2, and x = 0, 4/3, 8/3. That is 3 solutions." },

{ q: "The set of all real x satisfying ⌊x⌋² − 5⌊x⌋ + 6 ≤ 0, where ⌊x⌋ is the greatest integer function, is",   o: ["[2, 3]", "[2, 4)", "(2, 4)", "[2, 3)"], a: 1,   s: "⌊x⌋² − 5⌊x⌋ + 6 = (⌊x⌋ − 2)(⌊x⌋ − 3) ≤ 0, so 2 ≤ ⌊x⌋ ≤ 3. Since ⌊x⌋ is an integer, ⌊x⌋ = 2 or 3, which gives 2 ≤ x < 4. Solution set = [2, 4)." },

{ q: "The value of ⌊√1⌋ + ⌊√2⌋ + ⌊√3⌋ + ... + ⌊√20⌋, where ⌊·⌋ is the greatest integer function, is",   o: ["50", "52", "56", "54"], a: 3,
  s: "⌊√k⌋ = 1 for k = 1 to 3 (3 terms), 2 for k = 4 to 8 (5 terms), 3 for k = 9 to 15 (7 terms), and 4 for k = 16 to 20 (5 terms). Sum = 3(1) + 5(2) + 7(3) + 5(4) = 3 + 10 + 21 + 20 = 54." }

]
},



{
title: "UNIT 02 : COMPLEX NUMBERS AND QUADRATIC EQUATIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION A: ALGEBRA OF COMPLEX NUMBERS",
    questions: [

{ q: "The value of i + i² + i³ + ... + i¹⁰² is",   o: ["1 + i", "i", "−1 + i", "−1"], a: 2,   s: "Every block of 4 consecutive powers sums to zero (i + i² + i³ + i⁴ = 0). The first 100 terms give 0. The remaining terms are i¹⁰¹ + i¹⁰² = i − 1." },

{ q: "The value of ((1 + i)/(1 − i))²⁰²⁷ is",   o: ["−i", "i", "1", "−1"], a: 0,   s: "(1 + i)/(1 − i) = (1 + i)²/2 = 2i/2 = i. Then i²⁰²⁷ = i^(4·506 + 3) = i³ = −i." },

{ q: "The value of (1 + i)²⁰²⁷/(1 − i)²⁰²⁵ is",   o: ["2", "2i", "−2", "−2i"], a: 2,   s: "(1 + i)²⁰²⁷/(1 − i)²⁰²⁵ = (1 + i)² · [(1 + i)/(1 − i)]²⁰²⁵ = 2i · i²⁰²⁵. Since 2025 = 4·506 + 1, i²⁰²⁵ = i. Result = 2i · i = −2." },

{ q: "The imaginary part of (1 + i)²/(2 − i) is",   o: ["4/5", "−2/5", "2/5", "8/5"], a: 0,   s: "(1 + i)² = 2i. Then 2i/(2 − i) = 2i(2 + i)/5 = (4i − 2)/5 = −2/5 + (4/5)i. The imaginary part is 4/5." },

{ q: "If x and y are real and (x + iy)(2 − 3i) = 4 + i, then 13(x + y) equals",   o: ["9", "19", "23", "5"], a: 1,   s: "x + iy = (4 + i)/(2 − 3i) = (4 + i)(2 + 3i)/13 = (8 + 12i + 2i − 3)/13 = (5 + 14i)/13. So 13x = 5, 13y = 14, and 13(x + y) = 19." },

{ q: "If x and y are real and (3 + 2i)x + (1 − i)y = 7 + 3i, then x + 2y equals",   o: ["3", "4", "5", "6"], a: 1,   s: "Compare real parts: 3x + y = 7. Compare imaginary parts: 2x − y = 3. Adding gives 5x = 10, so x = 2 and y = 1. Then x + 2y = 4." },

{ q: "If z = (3 + 2i sinθ)/(1 − 2i sinθ) is purely imaginary, then θ (n ∈ ℤ) is",   o: ["nπ ± π/6", "2nπ ± π/3", "(2n + 1)π/2", "nπ ± π/3"], a: 3,
  s: "Multiply by the conjugate: z = (3 + 2i sinθ)(1 + 2i sinθ)/(1 + 4sin²θ) = [(3 − 4sin²θ) + 8i sinθ]/(1 + 4sin²θ). Purely imaginary needs 3 − 4sin²θ = 0, so sinθ = ±√3/2 and θ = nπ ± π/3. (The imaginary part is non-zero there.)" },

{ q: "The square roots of 7 − 24i are",   o: ["±(3 − 4i)", "±(4 + 3i)", "±(4 − 3i)", "±(7 − 3i)"], a: 2,   s: "(4 − 3i)² = 16 − 24i + 9i² = 16 − 24i − 9 = 7 − 24i. So the square roots are ±(4 − 3i)." },

{ q: "The number of complex numbers z satisfying z² + |z| = 0 is",   o: ["1", "3", "2", "4"], a: 1,   s: "z² = −|z| is a real number ≤ 0, so z = 0 or z is purely imaginary, z = iy. Then −y² = −|y|, so |y| = y², giving y = 0, 1, −1. The solutions are 0, i, −i: 3 in all." },

{ q: "The number of complex numbers z satisfying z² = z̄ is",   o: ["4", "1", "2", "3"], a: 0,   s: "Taking modulus: |z|² = |z|, so |z| = 0 or |z| = 1. If |z| = 1, then z̄ = 1/z and z³ = 1, which gives 3 solutions. Adding z = 0, the total is 4." },

{ q: "If z = x + iy and z^(1/3) = a − ib (x, y, a, b real), then x/a − y/b = k(a² − b²), where k equals",   o: ["2", "4", "3", "1"], a: 1,   s: "z = (a − ib)³ = a³ − 3ab² − i(3a²b − b³). So x = a³ − 3ab² and y = −(3a²b − b³). Then x/a = a² − 3b² and y/b = −3a² + b². x/a − y/b = 4a² − 4b², so k = 4." },

]
},


{
title: "UNIT 02 : COMPLEX NUMBERS AND QUADRATIC EQUATIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION B: MODULUS, ARGUMENT, POLAR FORM, TRIANGLE INEQUALITY ",
    questions: [

{ q: "The value of |(1 + i)¹⁰/(√3 − i)⁵| is",   o: ["2", "1", "√2", "1/2"], a: 1,   s: "|1 + i| = √2, so |(1 + i)¹⁰| = (√2)¹⁰ = 32. |√3 − i| = 2, so |(√3 − i)⁵| = 32. The ratio of moduli is 1." },

{ q: "The principal argument of −1 − i is",   o: ["3π/4", "−π/4", "5π/4", "−3π/4"], a: 3,   s: "−1 − i lies in the third quadrant with reference angle π/4. The principal argument lies in (−π, π], so it is −π + π/4 = −3π/4." },

{ q: "The principal argument of sin(6π/5) + i(1 + cos(6π/5)) is",   o: ["9π/10", "3π/5", "−3π/5", "−9π/10"], a: 0,   s: "With θ = 6π/5: sinθ = 2sin(θ/2)cos(θ/2) and 1 + cosθ = 2cos²(θ/2). So z = 2cos(θ/2)[sin(θ/2) + i cos(θ/2)] = 2cos(θ/2) · i · e^(−iθ/2). Here θ/2 = 3π/5, and cos(3π/5) < 0, so 2cos(3π/5) = −r with r > 0. Then z = r · e^(iπ) · e^(iπ/2) · e^(−3iπ/5) = r · e^(i·9π/10). The principal argument is 9π/10." },

{ q: "The principal argument of (1 + i√3)²/(4i(1 − i√3)) is",   o: ["π/3", "π/6", "2π/3", "π/2"], a: 3,   s: "(1 + i√3)² = 4e^(i2π/3). The denominator is 4i(1 − i√3) = 4e^(iπ/2) · 2e^(−iπ/3) = 8e^(iπ/6). The quotient is ½e^(i(2π/3 − π/6)) = ½e^(iπ/2) = i/2. Its principal argument is π/2." },

{ q: "If |z₁| = |z₂| and arg(z₁) + arg(z₂) = π, then",   o: ["z₁ = −z̄₂", "z₁ = z̄₂", "z₁ = z₂", "z₁z₂ = |z₁|²"], a: 0,   s: "Let z₁ = re^(iα). Then z₂ = re^(i(π − α)), so z̄₂ = re^(−i(π − α)) = re^(i(α − π)) = −re^(iα) = −z₁. Hence z₁ = −z̄₂." },

{ q: "If z₁ and z₂ are non-zero complex numbers with |z₁ + z₂| = |z₁ − z₂|, then z₁/z₂ is",   o: ["purely real", "of unit modulus", "purely imaginary", "equal to 1"], a: 2,   s: "|z₁ + z₂|² − |z₁ − z₂|² = 4Re(z₁z̄₂) = 0, so Re(z₁z̄₂) = 0. Then Re(z₁/z₂) = Re(z₁z̄₂)/|z₂|² = 0. Hence z₁/z₂ is purely imaginary." },

{ q: "If |z − 4/z| = 2, the greatest possible value of |z| is",   o: ["√5 − 1", "2 + √3", "3", "1 + √5"], a: 3,   s: "Let r = |z|. Then r = |(z − 4/z) + 4/z| ≤ 2 + 4/r, so r² − 2r − 4 ≤ 0 and r ≤ 1 + √5. The bound is attained at the real number z = 1 + √5, since z − 4/z = (1 + √5) − (√5 − 1) = 2." },

{ q: "If |z + 4| ≤ 3, the greatest value of |z + 1| is",   o: ["3", "4", "7", "6"], a: 3,   s: "|z + 1| = |(z + 4) − 3| ≤ |z + 4| + 3 ≤ 6. Equality holds at z = −7, where |z + 4| = 3 and |z + 1| = 6." },

{ q: "If |z − 3 − 4i| ≤ 2, then (greatest value of |z|) × (least value of |z|) equals",   o: ["21", "10", "12", "25"], a: 0,   s: "z lies in a disc of radius 2 centred at 3 + 4i, which is at distance 5 from the origin. The least |z| is 5 − 2 = 3 and the greatest is 5 + 2 = 7. Product = 21." },

{ q: "If (z − 1)/(z + 1) is purely imaginary (z ≠ −1), then |z| equals",   o: ["2", "1", "1/2", "0"], a: 1,   s: "Let w = (z − 1)/(z + 1). Re(w) = 0 means (z − 1)(z̄ + 1) + (z̄ − 1)(z + 1) = 0, i.e. 2|z|² − 2 = 0. So |z| = 1." },

{ q: "If z = (√3 + i)/2, then (z¹⁰¹ + i¹⁰³)¹⁰⁵ equals",   o: ["i", "−i", "1", "−1"], a: 0,   s: "z = e^(iπ/6). Since 101 = 12·8 + 5, z¹⁰¹ = e^(i5π/6) = (−√3 + i)/2. Also i¹⁰³ = i³ = −i. The sum is (−√3 − i)/2 = e^(i7π/6). Raising to 105: e^(i·735π/6) = e^(i·122.5π) = e^(iπ/2) = i." },

{ q: "If z + 1/z = 1, then z¹⁰⁰ + 1/z¹⁰⁰ equals",   o: ["−1", "1", "2", "−2"], a: 0,   s: "z + 1/z = 1 gives z = e^(±iπ/3). Then z¹⁰⁰ + z⁻¹⁰⁰ = 2cos(100π/3) = 2cos(100π/3 − 32π) = 2cos(4π/3) = −1." },

]
},

{
title: "UNIT 02 : COMPLEX NUMBERS AND QUADRATIC EQUATIONS", levels: [ "JEE Main"], minutes: 0,
    desc: "SECTION C: LOCI AND GEOMETRY OF COMPLEX NUMBERS ",
    questions: [

{ q: "The locus of z satisfying |z − 1| = |z + i| is the line",   o: ["x − y = 0", "x + y = 1", "x + y = 0", "x = y + 1"], a: 2,   s: "|z − 1|² = (x − 1)² + y² and |z + i|² = x² + (y + 1)². Equating: −2x + 1 = 2y + 1, so x + y = 0. (It is the perpendicular bisector of the points 1 and −i.)" },

{ q: "The eccentricity of the curve |z − 1| + |z + 1| = 4 is",   o: ["1/2", "√3/2", "1/√2", "1/4"], a: 0,   s: "The sum of distances from two fixed points ±1 is constant, so this is an ellipse with foci at ±1 and 2a = 4. So a = 2, c = 1 and e = c/a = 1/2." },

{ q: "The locus of |z − 2| = 2|z − 3| is a circle of radius",   o: ["2/3", "4/3", "1/3", "3/2"], a: 0,   s: "Squaring: (x − 2)² + y² = 4[(x − 3)² + y²] ⇒ 3x² + 3y² − 20x + 32 = 0 ⇒ x² + y² − (20/3)x + 32/3 = 0. Centre (10/3, 0) and r² = 100/9 − 32/3 = 4/9, so r = 2/3." },

{ q: "The locus of z for which arg((z − 1)/(z + 1)) = π/2 is",   o: ["the entire circle |z| = 1", "the upper half of the circle |z| = 1, excluding the points ±1", "the lower half of the circle |z| = 1, excluding the points ±1", "the imaginary axis"], a: 1,   s: "(z − 1)/(z + 1) = [(|z|² − 1) + 2iy]/|z + 1|². Argument π/2 needs real part 0 and imaginary part positive: |z| = 1 and y > 0. So z lies on the upper half of the unit circle, with ±1 excluded." },

{ q: "If z₁, z₂, z₃ are the vertices of a triangle satisfying z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁, the triangle is",   o: ["equilateral", "isosceles right-angled", "right-angled but not isosceles", "scalene"], a: 0,   s: "Let a = z₁ − z₂ and b = z₂ − z₃, so z₃ − z₁ = −(a + b). The condition is equivalent to (z₁ − z₂)² + (z₂ − z₃)² + (z₃ − z₁)² = 0, i.e. a² + b² + (a + b)² = 0, so a² + ab + b² = 0. Then a/b = ω or ω², so |a| = |b| and the angle between the sides is 120° (or 60° for the triangle). The triangle is equilateral." },

{ q: "If |z| = 4, the area of the triangle with vertices z, iz and z + iz is",   o: ["16", "4", "32", "8"], a: 3,   s: "The points 0, z, z + iz, iz form a square of side |z|. The three given vertices form a right triangle with legs |z|, so the area is |z|²/2 = 16/2 = 8." },

{ q: "The point 3 + i is rotated through π/2 anticlockwise about the point 1 + i. The new position is",   o: ["3 + i", "−1 + 3i", "1 + 3i", "1 − 3i"], a: 2,   s: "Rotation about c through angle θ: z′ = c + e^(iθ)(z − c). Here z − c = 2, so z′ = (1 + i) + i · 2 = 1 + 3i." },

{ q: "If z₁, z₂ are the roots of z² + az + b = 0 (a, b complex) and 0, z₁, z₂ are the vertices of an equilateral triangle, then",   o: ["a² = 4b", "a² = b", "a² = 3b", "3a² = b"], a: 2,   s: "For the equilateral triangle 0, z₁, z₂: z₁² + z₂² = z₁z₂, so (z₁ + z₂)² = 3z₁z₂. With z₁ + z₂ = −a and z₁z₂ = b, we get a² = 3b." },

]
}, 

{
title: "UNIT 02 : COMPLEX NUMBERS AND QUADRATIC EQUATIONS", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: ROOTS OF UNITY, DE MOIVRE ",
    questions: [

{ q: "If ω is a non-real cube root of unity, then (1 − ω + ω²)⁸ + (1 + ω − ω²)⁸ equals",   o: ["256", "−256", "−128", "128"], a: 1,   s: "Since 1 + ω + ω² = 0: 1 − ω + ω² = −2ω and 1 + ω − ω² = −2ω². Then (−2ω)⁸ = 256ω⁸ = 256ω² and (−2ω²)⁸ = 256ω¹⁶ = 256ω. The sum is 256(ω + ω²) = −256." },

{ q: "If ω is a non-real cube root of unity and (1 + ω)⁷ = A + Bω with A, B real, then (A, B) is",   o: ["(1, 0)", "(1, 1)", "(−1, 1)", "(0, 1)"], a: 1,
  s: "1 + ω = −ω². So (1 + ω)⁷ = −ω¹⁴ = −ω² (as 14 = 3·4 + 2). Since −ω² = 1 + ω, we get A = 1 and B = 1." },

{ q: "If ω is a non-real cube root of unity, then (1 − ω)(1 − ω²)(1 − ω⁴)(1 − ω⁸) equals",   o: ["3", "6", "0", "9"], a: 3,   s: "ω⁴ = ω and ω⁸ = ω². The product is [(1 − ω)(1 − ω²)]² = (1 − ω − ω² + ω³)² = (2 − (ω + ω²))² = (2 + 1)² = 9." },

{ q: "If ω is a non-real cube root of unity, (a + bω + cω²)/(c + aω + bω²) equals",   o: ["ω", "ω²", "1", "−1"], a: 1,   s: "ω²(c + aω + bω²) = cω² + aω³ + bω⁴ = cω² + a + bω = a + bω + cω². So the ratio is ω²." },

{ q: "The product of all the 10th roots of unity is",   o: ["1", "0", "−1", "i"], a: 2,   s: "The 10th roots of unity are the roots of z¹⁰ − 1 = 0. The product of the roots is (−1)¹⁰ × (−1) = −1 (in general (−1)^(n−1) for the nth roots)." },

{ q: "If α = e^(2πi/7), then (1 − α)(1 − α²)(1 − α³)(1 − α⁴)(1 − α⁵)(1 − α⁶) equals",   o: ["6", "7", "1", "49"], a: 1,   s: "The numbers αᵏ (k = 1..6) are the roots of x⁶ + x⁵ + x⁴ + x³ + x² + x + 1 = 0, so ∏(x − αᵏ) equals this polynomial. Put x = 1: ∏(1 − αᵏ) = 7." },

{ q: "If α = e^(2πi/5), then (1 + α)(1 + α²)(1 + α³)(1 + α⁴) equals",   o: ["5", "1", "−1", "0"], a: 1,   s: "∏(x − αᵏ) for k = 1..4 equals x⁴ + x³ + x² + x + 1. At x = −1 this is ∏(−1 − αᵏ) = 1. With four factors, ∏(1 + αᵏ) = (−1)⁴ · 1 = 1." },

{ q: "The value of cos(2π/7) + cos(4π/7) + cos(6π/7) is",   o: ["1/2", "−1/2", "−1", "0"], a: 1,   s: "Σ (k = 1 to 6) e^(2πik/7) = −1. Taking real parts, Σ cos(2kπ/7) = −1. Since cos(2kπ/7) = cos(2(7 − k)π/7), the six terms pair up to give 2[cos(2π/7) + cos(4π/7) + cos(6π/7)] = −1. So the required sum is −1/2." },

{ q: "The value of Σ (k = 1 to 6) [sin(2πk/7) − i cos(2πk/7)] is",   o: ["−i", "1", "i", "−1"], a: 2,   s: "sinθ − i cosθ = −i(cosθ + i sinθ) = −i e^(iθ). So the sum is −i Σ (k = 1 to 6) e^(2πik/7) = −i(−1) = i." },

{ q: "The number of complex numbers z satisfying both z¹² = 1 and z¹⁸ = 1 is",   o: ["12", "18", "3", "6"], a: 3,   s: "The common solutions of zᵐ = 1 and zⁿ = 1 are the gcd(m, n)-th roots of unity. gcd(12, 18) = 6, so there are 6 such numbers." },

{ q: "All the roots of the equation (z + 1)⁵ = z⁵ lie on the line",   o: ["Re(z) = 1/2", "Re(z) = −1/2", "Im(z) = −1/2", "|z| = 1"], a: 1,   s: "(z + 1)⁵ = z⁵ implies |z + 1| = |z|. So z is equidistant from −1 and 0, which gives the line Re(z) = −1/2." },

]
},

{
title: "UNIT 02 : COMPLEX NUMBERS AND QUADRATIC EQUATIONS", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: QUADRATIC EQUATIONS ",
    questions: [

{ q: "The equation (a² + b²)x² − 2b(a + c)x + b² + c² = 0 (a, b, c real) has real roots if and only if",   o: ["a, b, c are in G.P.", "a, b, c are in A.P.", "a, b, c are in H.P.", "a = b = c only"], a: 0,   s: "D/4 = b²(a + c)² − (a² + b²)(b² + c²) = 2ab²c − a²c² − b⁴ = −(b² − ac)². D ≤ 0 always, so the roots are real only when D = 0, i.e. b² = ac. Hence a, b, c are in G.P." },

{ q: "The set of all real a for which (a² − 1)x² + 2(a − 1)x + 2 > 0 for every real x is",   o: ["(−∞, −3) ∪ (1, ∞)", "(−∞, −3) ∪ [1, ∞)", "(−3, 1)", "(−∞, −1) ∪ (1, ∞)"], a: 1,   s: "If a² − 1 > 0, need D < 0: 4(a − 1)² − 8(a² − 1) < 0 ⇒ (a − 1)(a + 3) > 0 ⇒ a < −3 or a > 1. If a = 1, the expression is the constant 2 > 0, which works. If a = −1, it is −4x + 2, which fails. So a ∈ (−∞, −3) ∪ [1, ∞)." },

{ q: "Both roots of x² + 2(a + 1)x + 9a − 5 = 0 are negative for a in",   o: ["[6, ∞)", "(−1, 1] ∪ [6, ∞)", "(5/9, 1] ∪ [6, ∞)", "(5/9, ∞)"], a: 2,
  s: "Need (i) D ≥ 0: (a + 1)² − (9a − 5) = a² − 7a + 6 ≥ 0 ⇒ a ≤ 1 or a ≥ 6; (ii) sum of roots < 0: −2(a + 1) < 0 ⇒ a > −1; (iii) product > 0: 9a − 5 > 0 ⇒ a > 5/9. Combining: 5/9 < a ≤ 1 or a ≥ 6." },

{ q: "If α and β are the roots of x² − 5x + 3 = 0, then α³ + β³ equals",   o: ["125", "65", "80", "110"], a: 2,   s: "α + β = 5 and αβ = 3. α³ + β³ = (α + β)³ − 3αβ(α + β) = 125 − 45 = 80." },

{ q: "If α and β are the roots of x² − x − 1 = 0, then α¹⁰ + β¹⁰ equals",   o: ["55", "89", "123", "144"], a: 2,   s: "Let Sₙ = αⁿ + βⁿ. Since α² = α + 1, Sₙ = Sₙ₋₁ + Sₙ₋₂ with S₀ = 2 and S₁ = 1. Then S₂ = 3, S₃ = 4, S₄ = 7, S₅ = 11, S₆ = 18, S₇ = 29, S₈ = 47, S₉ = 76, S₁₀ = 123." },

{ q: "If α and β are the roots of x² − 3x + 1 = 0, the quadratic equation with roots α² and β² is",   o: ["x² − 9x + 1 = 0", "x² − 5x + 1 = 0", "x² − 7x − 1 = 0", "x² − 7x + 1 = 0"], a: 3,   s: "α + β = 3 and αβ = 1. So α² + β² = 9 − 2 = 7 and α²β² = 1. The equation is x² − 7x + 1 = 0." },

{ q: "If 4 is a root of x² + px + 12 = 0, and x² + px + q = 0 has equal roots, then q equals",   o: ["7/2", "49", "12", "49/4"], a: 3,   s: "Putting x = 4: 16 + 4p + 12 = 0 ⇒ p = −7. Then x² − 7x + q = 0 has equal roots iff 49 − 4q = 0, so q = 49/4." },

{ q: "The condition that one root of ax² + bx + c = 0 is twice the other is",   o: ["b² = 4ac", "9b² = 2ac", "2b² = 9ac", "b² = 2ac"], a: 2,
  s: "Let the roots be α and 2α. Then 3α = −b/a and 2α² = c/a. So 2(b²/9a²) = c/a, which gives 2b² = 9ac." },

{ q: "If x² + px + q = 0 and x² + qx + p = 0 (p ≠ q) have a common root, then p + q equals",   o: ["1", "0", "2", "−1"], a: 3,   s: "Subtracting the equations: (p − q)x + (q − p) = 0, so x = 1 (as p ≠ q). Substituting x = 1 gives 1 + p + q = 0, so p + q = −1." },

{ q: "Both roots of x² − 2ax + a² − 1 = 0 lie in the interval (−2, 4) for a in",   o: ["(−2, 4)", "(−1, 3)", "(−3, 5)", "(0, 2)"], a: 1,   s: "The roots are a − 1 and a + 1. Need −2 < a − 1 and a + 1 < 4, i.e. −1 < a < 3." },

{ q: "One root of x² − 4x + k = 0 is less than 1 and the other is greater than 1 for",   o: ["3 < k < 4", "k < 3", "k < 4", "1 < k < 3"], a: 1,
  s: "The parabola opens upward, so 1 lies strictly between the roots iff f(1) < 0: 1 − 4 + k < 0 ⇒ k < 3. For such k, D = 16 − 4k > 0 holds automatically." },

{ q: "If the roots of x² − 7x + k = 0 differ by 1, then k equals",   o: ["10", "14", "12", "6"], a: 2,   s: "The difference of the roots is √D = √(49 − 4k). Setting this equal to 1: 49 − 4k = 1, so k = 12. (Roots 3 and 4.)" },

{ q: "If α and β are the roots of x² − 6x − 2 = 0 and aₙ = αⁿ − βⁿ, then (a₁₀ − 2a₈)/(2a₉) equals",   o: ["6", "2", "3", "4"], a: 2,   s: "α² = 6α + 2, so α¹⁰ = 6α⁹ + 2α⁸ and α¹⁰ − 2α⁸ = 6α⁹. The same holds for β. Hence a₁₀ − 2a₈ = 6a₉, and the ratio is 6a₉/(2a₉) = 3." },

{ q: "If α and β are the roots of x² − x + 1 = 0, then α²⁰²⁵ + β²⁰²⁵ equals",   o: ["−2", "2", "−1", "0"], a: 0,   s: "The roots are e^(±iπ/3), which are primitive 6th roots of unity. Since 2025 = 6·337 + 3, α²⁰²⁵ = α³ = −1, and likewise β²⁰²⁵ = −1. The sum is −2." },

{ q: "Let α and β be the roots of x² + px + q = 0, and let α⁴ and β⁴ be the roots of x² − rx + s = 0. Then x² − 4qx + 2q² − r = 0 has",   o: ["non-real roots for all p, q", "equal roots for all p, q", "real roots only if p = 0", "real roots for all real p, q"], a: 3,    s: "r = α⁴ + β⁴ = (α² + β²)² − 2α²β² = (p² − 2q)² − 2q². The discriminant of x² − 4qx + 2q² − r is 16q² − 4(2q² − r) = 4(2q² + r) = 4(p² − 2q)² ≥ 0. So the roots are always real." },

{ q: "If α and β are the roots of x² − (a − 2)x − (a + 1) = 0, then α² + β² is least when a equals",   o: ["1", "2", "0", "−1"], a: 0,   s: "α + β = a − 2 and αβ = −(a + 1). α² + β² = (a − 2)² + 2(a + 1) = a² − 2a + 6 = (a − 1)² + 5. The minimum value 5 occurs at a = 1." },

{ q: "If p and q are real and x² + px + q = 0 has the root 2 − 3i, then p + q equals",   o: ["17", "−9", "13", "9"], a: 3,   s: "Non-real roots of a real quadratic occur in conjugate pairs, so the roots are 2 ± 3i. Sum = 4 = −p, so p = −4. Product = 4 + 9 = 13 = q. Hence p + q = 9." },

{ q: "If α, β, γ are the roots of x³ − 2x² + x − 1 = 0, then α² + β² + γ² equals",   o: ["2", "4", "3", "0"], a: 0,   s: "Σα = 2 and Σαβ = 1. So Σα² = (Σα)² − 2Σαβ = 4 − 2 = 2." },

{ q: "The roots of x³ − 12x² + 39x − 28 = 0 are in A.P. Their common difference is",   o: ["±2", "±1", "±4", "±3"], a: 3,   s: "Let the roots be a − d, a, a + d. The sum 3a = 12 gives a = 4. The product 4(16 − d²) = 28 gives d² = 9, so d = ±3. (The roots are 1, 4, 7; check Σαβ = 4 + 7 + 28 = 39.)" },

{ q: "For real x, the range of (x² − x + 1)/(x² + x + 1) is",   o: ["[1/3, 3]", "[−3, 3]", "[1/3, 1]", "(0, 3]"], a: 0,   s: "Put y = (x² − x + 1)/(x² + x + 1). Then (y − 1)x² + (y + 1)x + (y − 1) = 0 must have a real root: (y + 1)² − 4(y − 1)² ≥ 0 ⇒ (3 − y)(3y − 1) ≥ 0 ⇒ 1/3 ≤ y ≤ 3." },

{ q: "For real x, the range of (x² + 14x + 9)/(x² + 2x + 3) is",   o: ["[−5, 4]", "[−4, 5]", "(−5, 4)", "[−5, 1]"], a: 0,   s: "Put y = (x² + 14x + 9)/(x² + 2x + 3). Then (y − 1)x² + (2y − 14)x + (3y − 9) = 0. For real x: (2y − 14)² − 4(y − 1)(3y − 9) ≥ 0 ⇒ y² + y − 20 ≤ 0 ⇒ (y + 5)(y − 4) ≤ 0. (y = 1 gives a linear equation which also has a real root.) Range = [−5, 4]." },

{ q: "The number of integers x satisfying x² − 6|x| + 8 ≤ 0 is",   o: ["7", "5", "8", "6"], a: 3,   s: "Let t = |x|: t² − 6t + 8 ≤ 0 ⇒ 2 ≤ t ≤ 4. So |x| = 2, 3 or 4, i.e. x = ±2, ±3, ±4. That is 6 integers." },

{ q: "The sum of all real solutions of 4ˣ − 3·2^(x+1) + 8 = 0 is",   o: ["2", "4", "3", "1"], a: 2,   s: "Let t = 2ˣ > 0. The equation becomes t² − 6t + 8 = 0, so t = 2 or 4, giving x = 1 or 2. The sum is 3." },

{ q: "The number of real solutions of √(2x + 9) − x = 3 is",   o: ["1", "0", "2", "3"], a: 0,    s: "√(2x + 9) = x + 3 requires x ≥ −3. Squaring: 2x + 9 = x² + 6x + 9 ⇒ x² + 4x = 0 ⇒ x = 0 or −4. The root x = −4 fails x + 3 ≥ 0 (extraneous). Only x = 0 works, so there is 1 solution." },

{ q: "The number of real solutions of |x² − x − 6| = x + 2 is",    o: ["2", "4", "1", "3"], a: 3,   s: "Case 1: x² − x − 6 = x + 2 ⇒ x² − 2x − 8 = 0 ⇒ x = 4 or −2. Case 2: x² − x − 6 = −(x + 2) ⇒ x² = 4 ⇒ x = 2 or −2. All of 4, −2, 2 satisfy x + 2 ≥ 0. The distinct solutions are −2, 2, 4, so there are 3." },

{ q: "The sum of all real roots of (x² − x)² − 8(x² − x) + 12 = 0 is",    o: ["1", "4", "2", "0"], a: 2,   s: "Let y = x² − x: y² − 8y + 12 = 0 ⇒ y = 2 or 6. y = 2: x² − x − 2 = 0 ⇒ x = 2, −1 (sum 1). y = 6: x² − x − 6 = 0 ⇒ x = 3, −2 (sum 1). Total sum = 2." },

{ q: "The solution set of (x² − 5x + 6)/(x² − 1) < 0 is",   o: ["(−1, 1) ∪ [2, 3]", "(1, 2) ∪ (3, ∞)", "(−∞, −1) ∪ (1, 2) ∪ (3, ∞)", "(−1, 1) ∪ (2, 3)"], a: 3,   s: "The expression is (x − 2)(x − 3)/((x − 1)(x + 1)). Critical points: −1, 1, 2, 3. It is positive for x < −1, negative on (−1, 1), positive on (1, 2), negative on (2, 3), positive for x > 3. The points ±1 are excluded (denominator zero). Solution: (−1, 1) ∪ (2, 3)." }

]
},


{
title: "UNIT 03 : MATRICES AND DETERMINANTS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: TYPES AND ALGEBRA OF MATRICES ",
    questions: [

{ q: "The number of 3 × 3 symmetric matrices whose entries are all 0 or 1 is",   o: ["64", "512", "27", "256"], a: 0,   s: "A symmetric 3 × 3 matrix is determined by its 6 entries on or above the diagonal (a₁₁, a₁₂, a₁₃, a₂₂, a₂₃, a₃₃). Each can be 0 or 1, so the count is 2⁶ = 64." },

{ q: "The number of 3 × 3 skew-symmetric matrices with all entries from {−1, 0, 1} is",   o: ["9", "81", "27", "729"], a: 2,   s: "In a skew-symmetric matrix aᵢⱼ = −aⱼᵢ, so the diagonal entries are 0 and the matrix is fixed by a₁₂, a₁₃, a₂₃. Each has 3 choices, so the count is 3³ = 27." },

{ q: "The number of 2 × 2 matrices with every entry 0 or 1 that have non-zero determinant is",   o: ["8", "10", "4", "6"], a: 3,   s: "det = ad − bc ≠ 0 requires either ad = 1 and bc = 0, or ad = 0 and bc = 1. Case 1: a = d = 1 and (b, c) ≠ (1, 1): 3 matrices. Case 2: b = c = 1 and (a, d) ≠ (1, 1): 3 matrices. Total = 6." },

{ q: "The number of 3 × 3 diagonal matrices with entries from {1, 2, 3} whose determinant is 6 is",   o: ["3", "9", "1", "6"], a: 3,   s: "The determinant is the product of the diagonal entries, so we need abc = 6 with a, b, c ∈ {1, 2, 3}. The only possibility is {1, 2, 3} in some order, which gives 3! = 6 matrices." },

{ q: "If A is a 3 × 2 matrix and B is a 2 × 4 matrix, the order of (AB)ᵀ is",   o: ["4 × 3", "3 × 4", "2 × 2", "not defined"], a: 0,   s: "AB has order 3 × 4. Its transpose has order 4 × 3." },

{ q: "If   A = [[1 2], [3 4]] and B = [[2, 0], [1, 3]], then AB − BA equals",   o: ["[[2, 2], [0, 2]]", "[[−2, 2], [0, 2]]", "[[2, 2], [0, −2]]", "[[2, −2], [0, −2]]"], a: 2,
  s: "AB = [[1·2 + 2·1, 1·0 + 2·3], [3·2 + 4·1, 3·0 + 4·3]] = [[4, 6], [10, 12]]. BA = [[2·1 + 0·3, 2·2 + 0·4], [1·1 + 3·3, 1·2 + 3·4]] = [[2, 4], [10, 14]]. AB − BA = [[2, 2], [0, −2]]." },

{ q: "If A = [[1, 1], [0, 1]], the sum of all entries of A²⁰ is",   o: ["21", "22", "20", "40"], a: 1,   s: "A² = [[1, 2], [0, 1]], and by induction Aⁿ = [[1, n], [0, 1]]. So A²⁰ = [[1, 20], [0, 1]] and the sum of entries is 1 + 20 + 0 + 1 = 22." },

{ q: "If A = [[0, 1], [−1, 0]], then A²⁰²⁷ equals",   o: ["[[0, −1], [1, 0]]", "[[0, 1], [−1, 0]]", "[[1, 0], [0, 1]]", "[[−1, 0], [0, −1]]"], a: 0,   s: "A² = [[−1, 0], [0, −1]] = −I, so A⁴ = I. Since 2027 = 4·506 + 3, A²⁰²⁷ = A³ = A²·A = −A = [[0, −1], [1, 0]]." },

{ q: "Let N = [[0, 1, 0], [0, 0, 1], [0, 0, 0]]. The (1, 3) entry of (I + N)¹⁰ is",   o: ["10", "55", "90", "45"], a: 3,   s: "N² = [[0, 0, 1], [0, 0, 0], [0, 0, 0]] and N³ = O. I and N commute, so (I + N)¹⁰ = I + 10N + C(10, 2)N². The (1, 3) entry comes only from N², giving C(10, 2) = 45." },

{ q: "If A is a square matrix with A² = A, then (I + A)⁷ − 127A equals",   o: ["I", "A", "A + I", "7A"], a: 0,   s: "Since I and A commute and Aᵏ = A for k ≥ 1: (I + A)⁷ = I + C(7,1)A + C(7,2)A + ... + C(7,7)A = I + (2⁷ − 1)A = I + 127A. So (I + A)⁷ − 127A = I." },

{ q: "If 2X + [[1, 2], [3, 4]] = [[5, 0], [1, 6]], then X equals",   o: ["[[4, −2], [−2, 2]]", "[[2, −1], [−1, 1]]", "[[3, −1], [−1, 2]]", "[[2, 1], [1, 1]]"], a: 1,   s: "2X = [[5, 0], [1, 6]] − [[1, 2], [3, 4]] = [[4, −2], [−2, 2]]. So X = [[2, −1], [−1, 1]]." },

{ q: "If A = [[1, 2], [2, 1]] and A² = pA + qI, then p + q equals",   o: ["1", "6", "−1", "5"], a: 3,   s: "A² = [[5, 4], [4, 5]]. Comparing with pA + qI = [[p + q, 2p], [2p, p + q]]: 2p = 4 gives p = 2, and p + q = 5 gives q = 3. So p + q = 5." },

{ q: "The matrix A = (1/3)[[1, 2, 2], [2, 1, −2], [a, 2, b]] is orthogonal. Then (a, b) equals",   o: ["(2, 1)", "(−2, 1)", "(−2, −1)", "(2, −1)"], a: 2,
  s: "For an orthogonal matrix, the rows are orthogonal. Row 1 · Row 3 = 0: a + 4 + 2b = 0. Row 2 · Row 3 = 0: 2a + 2 − 2b = 0, so b = a + 1. Then a + 4 + 2a + 2 = 0 gives a = −2 and b = −1. (Check: 4 + 4 + 1 = 9, so Row 3 has unit length.)" },

{ q: "If A is a square matrix with A² = I, then (A − I)³ + (A + I)³ − 7A equals",   o: ["I", "O", "A", "7A"], a: 2,   s: "A³ = A·A² = A. (A − I)³ = A³ − 3A² + 3A − I = 4A − 4I. (A + I)³ = A³ + 3A² + 3A + I = 4A + 4I. Sum = 8A, and 8A − 7A = A." },

{ q: "If A = [[1, 1], [1, 0]], the sum of all entries of A⁶ is",   o: ["21", "55", "34", "26"], a: 2,   s: "A² = [[2, 1], [1, 1]], A³ = [[3, 2], [2, 1]], A⁴ = [[5, 3], [3, 2]], A⁵ = [[8, 5], [5, 3]], A⁶ = [[13, 8], [8, 5]]. Sum of entries = 13 + 8 + 8 + 5 = 34." },

{ q: "For square matrices A and B of the same order, which of the following is always true?",   o: ["(A + B)² = A² + 2AB + B²", "AB = O ⇒ A = O or B = O", "(AB)ᵀ = BᵀAᵀ", "(A − B)(A + B) = A² − B²"], a: 2,   s: "The reversal law (AB)ᵀ = BᵀAᵀ always holds. The other three need AB = BA (the first and last) or are false in general: AB = O does not force A = O or B = O, e.g. A = [[1, 0], [0, 0]], B = [[0, 0], [0, 1]]." },

]
},

{
title: "UNIT 03 : MATRICES AND DETERMINANTS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: TRANSPOSE, SYMMETRIC AND SKEW-SYMMETRIC MATRICES ",
    questions: [

{ q: "The skew-symmetric part (A − Aᵀ)/2 of A = [[1, 2], [3, 4]] is",
  o: ["[[1, 5/2], [5/2, 4]]", "[[0, −1/2], [1/2, 0]]", "[[0, 1/2], [−1/2, 0]]", "[[0, −1], [1, 0]]"], a: 1,
  s: "Aᵀ = [[1, 3], [2, 4]], so A − Aᵀ = [[0, −1], [1, 0]]. Half of it is [[0, −1/2], [1/2, 0]]." },

{ q: "If A is symmetric and B is skew-symmetric, both of the same order, then AB − BA is",
  o: ["skew-symmetric", "a null matrix", "an identity matrix", "symmetric"], a: 3,
  s: "Aᵀ = A and Bᵀ = −B. (AB)ᵀ = BᵀAᵀ = −BA and (BA)ᵀ = AᵀBᵀ = −AB. So (AB − BA)ᵀ = −BA + AB = AB − BA, so it is symmetric." },

{ q: "Let A = [aᵢⱼ] be the 3 × 3 matrix with aᵢⱼ = i² − j². Then |A| equals",
  o: ["0", "1", "−1", "3"], a: 0,
  s: "aⱼᵢ = j² − i² = −aᵢⱼ, so A is skew-symmetric of odd order. Then |A| = |Aᵀ| = |−A| = (−1)³|A| = −|A|, so |A| = 0." },

{ q: "If A is a skew-symmetric matrix, then A²⁰²⁵ is",
  o: ["symmetric", "skew-symmetric", "diagonal", "neither symmetric nor skew-symmetric"], a: 1,
  s: "(Aⁿ)ᵀ = (Aᵀ)ⁿ = (−A)ⁿ = (−1)ⁿAⁿ. For n = 2025 (odd), (A²⁰²⁵)ᵀ = −A²⁰²⁵, so it is skew-symmetric." },

{ q: "The matrix [[0, a, 3], [2, b, −1], [c, 1, 0]] is skew-symmetric. Then a² + b² + c² equals",
  o: ["13", "14", "10", "9"], a: 0,
  s: "Skew-symmetry means aᵢⱼ = −aⱼᵢ. The diagonal gives b = 0. Entry (1,2) = a and entry (2,1) = 2 give a = −2. Entry (1,3) = 3 and entry (3,1) = c give c = −3. (Entries (2,3) = −1 and (3,2) = 1 are consistent.) So a² + b² + c² = 4 + 0 + 9 = 13." },

{ q: "A square matrix that is both symmetric and skew-symmetric must be",
  o: ["an identity matrix", "a non-zero diagonal matrix", "a null matrix", "any scalar matrix"], a: 2,
  s: "Aᵀ = A and Aᵀ = −A give A = −A, so 2A = O and A = O." },

{ q: "If A is a square matrix with AAᵀ = I, then |A| equals",
  o: ["only +1", "+1 or −1", "0", "any real number"], a: 1,
  s: "|AAᵀ| = |A||Aᵀ| = |A|² = |I| = 1. So |A| = ±1, and both signs occur (for example I and diag(−1, 1))." },

{ q: "For any square matrix A, which of the following is NOT necessarily symmetric?",
  o: ["AAᵀ", "AᵀA", "A − Aᵀ", "A + Aᵀ"], a: 2,
  s: "(AAᵀ)ᵀ = AAᵀ, (AᵀA)ᵀ = AᵀA and (A + Aᵀ)ᵀ = A + Aᵀ are symmetric. But (A − Aᵀ)ᵀ = Aᵀ − A = −(A − Aᵀ), so A − Aᵀ is skew-symmetric, and symmetric only when it is the zero matrix." },

{ q: "If A and B are symmetric matrices of the same order, then AB is symmetric if and only if",
  o: ["A = B", "AB = O", "A⁻¹ = B", "AB = BA"], a: 3,
  s: "(AB)ᵀ = BᵀAᵀ = BA. So AB is symmetric iff (AB)ᵀ = AB, i.e. iff BA = AB." },

]
},


{
title: "UNIT 03 : MATRICES AND DETERMINANTS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: DETERMINANTS, PROPERTIES, AREA OF A TRIANGLE ",
    questions: [

{ q: "The value of |[[1, 2, 3], [4, 5, 6], [7, 8, 10]]| is",
  o: ["−3", "3", "0", "−6"], a: 0,
  s: "Expand along the first row: 1(5·10 − 6·8) − 2(4·10 − 6·7) + 3(4·8 − 5·7) = 1(2) − 2(−2) + 3(−3) = 2 + 4 − 9 = −3." },

{ q: "The value of |[[1, 2, 4], [1, 3, 9], [1, 5, 25]]| is",
  o: ["−6", "12", "6", "30"], a: 2,
  s: "This is a Vandermonde determinant with x = 2, 3, 5: |[[1, x, x²]]| = (3 − 2)(5 − 2)(5 − 3) = 1·3·2 = 6." },

{ q: "If a + b + c = 0, then |[[a, b, c], [b, c, a], [c, a, b]]| equals",
  o: ["3abc", "abc", "−3abc", "0"], a: 3,
  s: "Apply R₁ → R₁ + R₂ + R₃. The first row becomes (a + b + c)(1, 1, 1) = (0, 0, 0). So the determinant is 0." },

{ q: "The value of |[[1, 1, 1], [1, 2, 3], [1, 8, 27]]| is",
  o: ["6", "12", "24", "2"], a: 1,
  s: "Expand along the first row: 1(2·27 − 3·8) − 1(1·27 − 3·1) + 1(1·8 − 2·1) = 30 − 24 + 6 = 12. (This is (a + b + c)(b − a)(c − a)(c − b) with a, b, c = 1, 2, 3, i.e. 6·1·2·1.)" },

{ q: "If A is a 3 × 3 matrix with |A| = 3, then |adj(2A)| equals",
  o: ["144", "576", "72", "1728"], a: 1,
  s: "|2A| = 2³|A| = 24. For a 3 × 3 matrix B, |adj B| = |B|² = 24² = 576." },

{ q: "If A is a 3 × 3 matrix with |A| = 5, then |adj(adj A)| equals",
  o: ["25", "125", "625", "3125"], a: 2,
  s: "For order 3, |adj A| = |A|² = 25. Applying the same rule again, |adj(adj A)| = (|A|²)² = 5⁴ = 625." },

{ q: "If A is a 3 × 3 matrix with |A| = −3, then |−2A| equals",
  o: ["−24", "6", "−6", "24"], a: 3,
  s: "|kA| = k³|A| for order 3. So |−2A| = (−2)³(−3) = (−8)(−3) = 24." },

{ q: "If B is obtained from a 3 × 3 matrix A with |A| = 4 by the operations R₁ → R₁ + 2R₂ followed by R₂ ↔ R₃, then |B| equals",
  o: ["4", "−4", "8", "−8"], a: 1,
  s: "Adding a multiple of one row to another does not change the determinant. Interchanging two rows multiplies it by −1. So |B| = −|A| = −4." },

{ q: "The value of |[[1, 1, 1], [1, 1 + x, 1], [1, 1, 1 + y]]| is",
  o: ["x + y", "1 + xy", "xy", "xy(x + y)"], a: 2,
  s: "Apply R₂ → R₂ − R₁ and R₃ → R₃ − R₁: the determinant becomes |[[1, 1, 1], [0, x, 0], [0, 0, y]]|, which is the product of the diagonal entries, xy." },

{ q: "The roots of |[[x, 1, 1], [1, x, 1], [1, 1, x]]| = 0 are",
  o: ["−1, −1, 2", "1, 1, −2", "1, −1, 2", "0, 1, −2"], a: 1,
  s: "Apply C₁ → C₁ + C₂ + C₃ to take out (x + 2). Then subtract R₁ from R₂ and R₃. The determinant is (x + 2)(x − 1)² = x³ − 3x + 2. The roots are 1, 1, −2." },

{ q: "If ω is a non-real cube root of unity, then |[[1, ω, ω²], [ω, ω², 1], [ω², 1, ω]]| equals",
  o: ["1", "0", "3ω", "−1"], a: 1,
  s: "Row 2 = (ω, ω², ω³ = 1) = ω × Row 1. Two rows are proportional, so the determinant is 0." },

{ q: "The range of Δ(θ) = |[[1, sinθ, 1], [−sinθ, 1, sinθ], [−1, −sinθ, 1]]| is",
  o: ["[0, 2]", "[1, 3]", "[2, 3]", "[2, 4]"], a: 3,
  s: "Expanding along the first row: Δ = 1(1 + sin²θ) − sinθ(−sinθ + sinθ) + 1(sin²θ + 1) = 2(1 + sin²θ). Since 0 ≤ sin²θ ≤ 1, Δ ∈ [2, 4]." },

{ q: "The cofactor of the entry a₂₃ in A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]] is",
  o: ["−2", "2", "4", "−4"], a: 1,
  s: "The minor M₂₃ = |[[1, 2], [1, 0]]| = 0 − 2 = −2. The cofactor C₂₃ = (−1)²⁺³M₂₃ = −(−2) = 2." },

{ q: "If |[[a, b, c], [p, q, r], [x, y, z]]| = 5, then |[[b + c, c + a, a + b], [q + r, r + p, p + q], [y + z, z + x, x + y]]| equals",
  o: ["10", "5", "20", "0"], a: 0,
  s: "Let u = (a, p, x)ᵀ, v = (b, q, y)ᵀ, w = (c, r, z)ᵀ be the columns of the original matrix. The new determinant has columns v + w, w + u, u + v. Apply C₁ → C₁ + C₂ + C₃: the first column becomes 2(u + v + w). Then C₂ → C₂ − ½C₁ and C₃ → C₃ − ½C₁ turn the other columns into −v and −w. So the value is 2·|u + v + w, −v, −w| = 2·|u + v + w, v, w| = 2·|u, v, w| = 2 × 5 = 10." },

{ q: "The value of |[[1, a, bc], [1, b, ca], [1, c, ab]]| is",
  o: ["(a + b)(b + c)(c + a)", "(a − b)(b − c)(c − a)", "abc(a − b)(b − c)(c − a)", "(a − b)(b − c)(c − a)(a + b + c)"], a: 1,
  s: "Multiply R₁, R₂, R₃ by a, b, c and divide by abc. The determinant becomes (1/abc)·|[[a, a², abc], [b, b², abc], [c, c², abc]]|. Taking abc out of the third column gives |[[a, a², 1], [b, b², 1], [c, c², 1]]|. A cyclic shift of columns does not change the sign, so this equals |[[1, a, a²], [1, b, b²], [1, c, c²]]| = (b − a)(c − a)(c − b) = (a − b)(b − c)(c − a). (Check: a, b, c = 1, 2, 3 gives 2 on both sides.)" },

{ q: "The value of |[[a, a + b, a + b + c], [2a, 3a + 2b, 4a + 3b + 2c], [3a, 6a + 3b, 10a + 6b + 3c]]| is",
  o: ["a²b", "abc", "a³", "3a³"], a: 2,
  s: "Apply R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁: R₂ becomes (0, a, 2a + b) and R₃ becomes (0, 3a, 7a + 3b). Then R₃ → R₃ − 3R₂ gives (0, 0, a). The matrix is upper triangular with diagonal entries a, a, a (R₁ starts with a), so the determinant is a³." },

{ q: "The value of |[[1, 0, 2, 1], [0, 1, 1, 2], [1, 1, 0, 1], [2, 0, 1, 1]]| is",
  o: ["3", "0", "6", "−3"], a: 3,
  s: "Apply R₃ → R₃ − R₁ and R₄ → R₄ − 2R₁: R₃ = (0, 1, −2, 0), R₄ = (0, 0, −3, −1). Expand along C₁: the determinant equals |[[1, 1, 2], [1, −2, 0], [0, −3, −1]]| = 1(2 − 0) − 1(−1 − 0) + 2(−3 − 0) = 2 + 1 − 6 = −3." },

{ q: "The area of the triangle with vertices (1, 2), (3, −1) and (5, 3) is",
  o: ["7", "14", "7/2", "5"], a: 0,
  s: "Area = ½|[[1, 2, 1], [3, −1, 1], [5, 3, 1]]|. The determinant = 1(−1 − 3) − 2(3 − 5) + 1(9 + 5) = −4 + 4 + 14 = 14. Area = 7 square units." },

{ q: "The area of the triangle with vertices (k, 0), (4, 0) and (0, 2) is 4 square units. The sum of all possible values of k is",
  o: ["4", "8", "0", "16"], a: 1,
  s: "Area = ½|k(0 − 2) + 4(2 − 0) + 0| = ½|8 − 2k| = 4, so |8 − 2k| = 8. Then 8 − 2k = 8 gives k = 0, and 8 − 2k = −8 gives k = 8. Sum = 8." },

{ q: "The equation of the line through (1, 2) and (3, 4) is given by |[[x, y, 1], [1, 2, 1], [3, 4, 1]]| = 0, which simplifies to",
  o: ["x − y + 1 = 0", "x + y − 3 = 0", "x − y − 1 = 0", "2x − y = 0"], a: 0,
  s: "Expanding along the first row: x(2 − 4) − y(1 − 3) + 1(4 − 6) = −2x + 2y − 2 = 0, i.e. x − y + 1 = 0. Check: (1, 2) gives 1 − 2 + 1 = 0 and (3, 4) gives 3 − 4 + 1 = 0." },

{ q: "If A = [[α, 2], [2, α]] and |A³| = 125, then α equals",
  o: ["±2", "±3", "±1", "±5"], a: 1,
  s: "|A| = α² − 4, so |A³| = |A|³ = (α² − 4)³ = 125. Hence α² − 4 = 5, α² = 9 and α = ±3." },


]
},


{
title: "UNIT 03 : MATRICES AND DETERMINANTS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: ADJOINT AND INVERSE ",
    questions: [

{ q: "The inverse of [[2, 1], [5, 3]] is",
  o: ["[[3, 1], [5, 2]]", "[[2, −1], [−5, 3]]", "[[3, −1], [−5, 2]]", "[[−3, 1], [5, −2]]"], a: 2,
  s: "det = 6 − 5 = 1. For a 2 × 2 matrix [[a, b], [c, d]] the inverse is (1/det)[[d, −b], [−c, a]] = [[3, −1], [−5, 2]]." },

{ q: "The inverse of A = [[3, 1], [−1, 2]] is",
  o: ["[[2/7, −1/7], [1/7, 3/7]]", "[[2/7, 1/7], [−1/7, 3/7]]", "[[3/7, −1/7], [1/7, 2/7]]", "[[−2/7, 1/7], [−1/7, −3/7]]"], a: 0,
  s: "det A = 6 + 1 = 7. A⁻¹ = (1/7)[[2, −1], [1, 3]] = [[2/7, −1/7], [1/7, 3/7]]." },

{ q: "For A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]], the trace of A⁻¹ is",
  o: ["−38", "−24", "38", "1"], a: 0,
  s: "|A| = 1(0 − 24) − 2(0 − 20) + 3(0 − 5) = −24 + 40 − 15 = 1. The diagonal cofactors are C₁₁ = −24, C₂₂ = 0 − 15 = −15 and C₃₃ = 1. Since |A| = 1, the diagonal of A⁻¹ = adj A is (−24, −15, 1), so the trace is −38." },

{ q: "If A is a 3 × 3 non-singular matrix with |A| = 2, then adj(adj A) = kA, where k equals",
  o: ["4", "1", "1/2", "2"], a: 3,
  s: "For an n × n matrix, adj(adj A) = |A|^(n−2) A. With n = 3 this is |A|A = 2A, so k = 2." },

{ q: "For A = [[1, 2], [3, 4]], the matrix (adj A)⁻¹ is",
  o: ["[[−1/2, −1], [−3/2, −2]]", "[[4, −2], [−3, 1]]", "[[1/2, 1], [3/2, 2]]", "[[−2, 1], [3/2, −1/2]]"], a: 0,
  s: "adj A = |A| A⁻¹, so (adj A)⁻¹ = A/|A|. Here |A| = 4 − 6 = −2, so (adj A)⁻¹ = −½[[1, 2], [3, 4]] = [[−1/2, −1], [−3/2, −2]]." },

{ q: "If A² − A + I = O, then A⁻¹ equals",
  o: ["I − A", "A − I", "A + I", "−A"], a: 0,
  s: "A² − A = −I, so A(A − I) = −I. Hence A·(I − A) = I, which means A⁻¹ = I − A." },

{ q: "The value of k for which the matrix [[1, 2, 3], [4, 5, 6], [7, 8, k]] is singular is",
  o: ["8", "9", "10", "6"], a: 1,
  s: "|A| = 1(5k − 48) − 2(4k − 42) + 3(32 − 35) = 5k − 48 − 8k + 84 − 9 = 27 − 3k. The matrix is singular when |A| = 0, i.e. k = 9." },

{ q: "The inverse of [[cosθ, sinθ], [−sinθ, cosθ]] is",
  o: ["[[cosθ, sinθ], [−sinθ, cosθ]]", "[[cosθ, −sinθ], [sinθ, cosθ]]", "[[−cosθ, sinθ], [−sinθ, −cosθ]]", "[[sinθ, cosθ], [−cosθ, sinθ]]"], a: 1,
  s: "det = cos²θ + sin²θ = 1. The inverse is [[cosθ, −sinθ], [sinθ, cosθ]], which is also the transpose, since the matrix is orthogonal." },

{ q: "If A is a 3 × 3 matrix with |adj A| = 81, then |A| equals",
  o: ["9 only", "±27", "±81", "±9"], a: 3,
  s: "For order 3, |adj A| = |A|². So |A|² = 81 and |A| = ±9." },

{ q: "If A = [[1, 2], [3, 5]] and AX = [[1, 2], [3, 4]], then X equals",
  o: ["[[−5, 2], [3, −1]]", "[[1, 2], [0, 2]]", "[[−1, 2], [0, −2]]", "[[1, −2], [0, 2]]"], a: 3,
  s: "|A| = 5 − 6 = −1, so A⁻¹ = −[[5, −2], [−3, 1]] = [[−5, 2], [3, −1]]. X = A⁻¹B = [[−5 + 6, −10 + 8], [3 − 3, 6 − 4]] = [[1, −2], [0, 2]]." },

{ q: "The (1, 3) entry of the inverse of [[1, 2, 3], [0, 1, 2], [0, 0, 1]] is",
  o: ["1", "−1", "2", "0"], a: 0,
  s: "(A⁻¹)₁₃ = C₃₁/|A|, where |A| = 1 and C₃₁ = (−1)³⁺¹|[[2, 3], [1, 2]]| = 4 − 3 = 1. So the entry is 1. (In full, A⁻¹ = [[1, −2, 1], [0, 1, −2], [0, 0, 1]].)" },

{ q: "If A = [[1, 0, 0], [0, 1, 1], [0, −2, 4]] and 6A⁻¹ = A² + cA + dI, then (c, d) equals",
  o: ["(6, −11)", "(−11, 6)", "(−6, 11)", "(11, −6)"], a: 2,
  s: "A² = [[1, 0, 0], [0, −1, 5], [0, −10, 14]]. |A| = 1·(4 + 2) = 6, and adj A = [[6, 0, 0], [0, 4, −1], [0, 2, 1]], so 6A⁻¹ = adj A. Now A² + cA + dI has (1,1) entry 1 + c + d = 6, (2,2) entry −1 + c + d = 4 and (2,3) entry 5 + c = −1. So c = −6 and d = 11. (All other entries also match.)" },

{ q: "If A and B are invertible matrices of the same order, then (AB)⁻¹ equals",
  o: ["B⁻¹A⁻¹", "A⁻¹B⁻¹", "A⁻¹ + B⁻¹", "(A + B)⁻¹"], a: 0,
  s: "(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AA⁻¹ = I. So (AB)⁻¹ = B⁻¹A⁻¹ (the order reverses)." },


]
},


{
title: "UNIT 03 : MATRICES AND DETERMINANTS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: SYSTEMS OF LINEAR EQUATIONS ",
    questions: [

{ q: "If x + y + z = 6, x − y + z = 2 and 2x + y − z = 1, then x² + y² + z² equals",
  o: ["12", "14", "16", "10"], a: 1,
  s: "Adding the first two: 2x + 2z = 8, so x + z = 4, and then y = 2. The third gives 2x − z = −1. Adding x + z = 4: 3x = 3, so x = 1 and z = 3. Then x² + y² + z² = 1 + 4 + 9 = 14." },

{ q: "The system x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has no solution when",
  o: ["λ ≠ 3 and μ is any value", "λ = 3 and μ = 10", "λ ≠ 3 and μ ≠ 10", "λ = 3 and μ ≠ 10"], a: 3,
  s: "Subtracting the second equation from the third: (λ − 3)z = μ − 10. If λ ≠ 3, z is uniquely found, so the system has a unique solution. If λ = 3 and μ ≠ 10, the equation reads 0 = μ − 10 ≠ 0, so there is no solution." },

{ q: "The system x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has infinitely many solutions for (λ, μ) =",
  o: ["(3, 6)", "(2, 10)", "(3, 12)", "(3, 10)"], a: 3,
  s: "From (λ − 3)z = μ − 10, we get 0 = 0 only when λ = 3 and μ = 10. Then the third equation duplicates the second, leaving 2 independent equations in 3 unknowns, so there are infinitely many solutions." },

{ q: "The system x + ky + 3z = 0, 3x + ky − 2z = 0, 2x + 3y − 4z = 0 has a non-trivial solution for k = 33/2. For this k, the value of xz/y² is",
  o: ["10", "15", "45/2", "45"], a: 2,
  s: "Subtracting the first two equations: 2x − 5z = 0, so x = 5z/2. From the third: 5z + 3y − 4z = 0, so y = −z/3. Then xz/y² = (5z/2)·z/(z²/9) = 45/2." },

{ q: "The system x + y + z = 2, 2x + y − z = 3, 3x + 2y + kz = 4 has a unique solution if and only if",
  o: ["k = 0", "k ≠ 1", "k ≠ 0", "k ≠ −1"], a: 2,
  s: "The determinant of the coefficients is |[[1, 1, 1], [2, 1, −1], [3, 2, k]]| = 1(k + 2) − 1(2k + 3) + 1(4 − 3) = −k. A unique solution needs a non-zero determinant, so k ≠ 0." },

{ q: "The system x + y + z = 0, x + 2y + 3z = 0, 2x + 3y + 4z = 0 has",
  o: ["only the trivial solution", "exactly two solutions", "no solution", "infinitely many solutions"], a: 3,
  s: "The third equation is the sum of the first two, so the coefficient determinant is 0. A homogeneous system always has the trivial solution, and with determinant 0 it also has non-trivial ones, so there are infinitely many. (For example x = z, y = −2z.)" },

{ q: "The system x + y + z = 5, x + 2y + 3z = 9, x + 3y + αz = β has infinitely many solutions. Then α + β equals",
  o: ["16", "8", "13", "18"], a: 3,
  s: "Subtracting the first from the others: y + 2z = 4 and 2y + (α − 1)z = β − 5. For infinitely many solutions the second must be twice the first: α − 1 = 4 and β − 5 = 8. So α = 5 and β = 13, giving α + β = 18." },

{ q: "If x − y + z = 4, 2x + y − 3z = 0 and x + y + z = 2, then xyz equals",
  o: ["−2", "2", "−1", "1"], a: 0,
  s: "Adding the first and third: 2x + 2z = 6, so x + z = 3, and y = 2 − 3 = −1. The second gives 2x − 3z = 1. With x = 3 − z: 6 − 5z = 1, so z = 1 and x = 2. Then xyz = 2·(−1)·1 = −2." },

{ q: "The homogeneous system x + y + z = 0, x + λy + z = 0, x + y + λz = 0 has only the trivial solution if and only if",
  o: ["λ = 1", "λ ≠ 1", "λ ≠ 0", "λ ≠ −1"], a: 1,
  s: "The coefficient determinant is |[[1, 1, 1], [1, λ, 1], [1, 1, λ]]| = (λ − 1)². The trivial solution is the only one iff the determinant is non-zero, i.e. λ ≠ 1." },

{ q: "The system x + 2y = 3, 2x + ay = b is inconsistent if and only if",
  o: ["a = 4 and b = 6", "a ≠ 4", "a = 4 and b ≠ 6", "a = 2 and b ≠ 6"], a: 2,
  s: "Twice the first equation is 2x + 4y = 6. If a ≠ 4, the lines are not parallel, so there is a unique solution. If a = 4, the second equation is 2x + 4y = b, which is inconsistent with 2x + 4y = 6 exactly when b ≠ 6 (and identical when b = 6)." },

{ q: "The system x + y + z = 1, x + 2y + 4z = λ, x + 4y + 10z = λ² is consistent for",
  o: ["λ = 1 or 2", "only λ = 1", "λ = 1 or −2", "every real λ"], a: 0,
  s: "Subtracting the first from the second and third: y + 3z = λ − 1 and 3y + 9z = λ² − 1. The second is 3 times the first only if λ² − 1 = 3(λ − 1), i.e. λ² − 3λ + 2 = 0, so λ = 1 or 2." },

]
},


{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: FUNDAMENTAL PRINCIPLE, FACTORIAL, ⁿPᵣ AND ⁿCᵣ IDENTITIES ",
    questions: [

{ q: "There are 5 routes from town A to town B and 4 routes from B to C. A person travels from A to C via B and returns by the same towns, without using the same route twice on any stretch. The number of ways is",
  o: ["240", "400", "180", "300"], a: 0,
  s: "Going: 5 routes A to B and 4 routes B to C. Returning, the route from C to B must differ from the one used, so there are 3 choices, and from B to A there are 4 choices (5 − 1). Total = 5 × 4 × 3 × 4 = 240." },

{ q: "The number of 3-digit numbers with all digits different is",
  o: ["729", "720", "900", "648"], a: 3,
  s: "Hundreds digit: 9 choices (1 to 9). Tens digit: 9 choices (any digit except the one used, 0 allowed). Units digit: 8 choices. Total = 9 × 9 × 8 = 648." },

{ q: "The number of 4-digit numbers in which every digit is odd is",
  o: ["500", "720", "625", "3125"], a: 2,
  s: "Each of the 4 places can be filled with any of the digits 1, 3, 5, 7, 9. Total = 5⁴ = 625." },

{ q: "The number of even 4-digit numbers with all digits different is",
  o: ["2240", "2520", "2304", "2296"], a: 3,
  s: "Case 1: units digit 0. The other three places can be filled in 9 × 8 × 7 = 504 ways. Case 2: units digit is one of 2, 4, 6, 8 (4 choices). The thousands digit is non-zero and not the units digit: 8 choices. The hundreds digit: 8 choices, tens digit: 7 choices. That gives 4 × 8 × 8 × 7 = 1792. Total = 504 + 1792 = 2296." },

{ q: "If ⁿP₄ = 20 · ⁿP₂, then n equals",
  o: ["6", "7", "8", "9"], a: 1,
  s: "n(n − 1)(n − 2)(n − 3) = 20 n(n − 1). Cancel n(n − 1) (n ≥ 4): (n − 2)(n − 3) = 20, so n² − 5n − 14 = 0, giving n = 7 (the root −2 is rejected)." },

{ q: "If ⁿC₈ = ⁿC₂, then the value of ⁿC₂ is",
  o: ["90", "45", "55", "28"], a: 1,
  s: "ⁿCₐ = ⁿC_b with a ≠ b means a + b = n, so n = 10. Then ¹⁰C₂ = (10 × 9)/2 = 45." },

{ q: "If ¹⁵C₃ᵣ = ¹⁵C_(r+3), then r equals",
  o: ["5", "2", "4", "3"], a: 3,
  s: "Either 3r = r + 3, giving r = 3/2 (not an integer, rejected), or 3r + (r + 3) = 15, giving 4r = 12 and r = 3. Check: ¹⁵C₉ = ¹⁵C₆." },

{ q: "If ⁿCᵣ : ⁿC_(r+1) : ⁿC_(r+2) = 1 : 2 : 3, then (n, r) equals",
  o: ["(12, 4)", "(14, 3)", "(13, 4)", "(14, 4)"], a: 3,
  s: "ⁿC_(r+1)/ⁿCᵣ = (n − r)/(r + 1) = 2, so n = 3r + 2. ⁿC_(r+2)/ⁿC_(r+1) = (n − r − 1)/(r + 2) = 3/2, so 2n = 5r + 8. Substituting: 6r + 4 = 5r + 8, so r = 4 and n = 14. Check: ¹⁴C₄ : ¹⁴C₅ : ¹⁴C₆ = 1001 : 2002 : 3003 = 1 : 2 : 3." },

{ q: "The value of ⁴⁷C₄ + Σ (j = 1 to 5) ⁽⁵²⁻ʲ⁾C₃ is",
  o: ["⁵²C₅", "⁵³C₄", "⁵²C₄", "⁵¹C₄"], a: 2,
  s: "The sum is ⁴⁷C₄ + ⁴⁷C₃ + ⁴⁸C₃ + ⁴⁹C₃ + ⁵⁰C₃ + ⁵¹C₃. Using ⁿCᵣ + ⁿC_(r−1) = ⁽ⁿ⁺¹⁾Cᵣ repeatedly: ⁴⁷C₄ + ⁴⁷C₃ = ⁴⁸C₄, then + ⁴⁸C₃ = ⁴⁹C₄, then + ⁴⁹C₃ = ⁵⁰C₄, then + ⁵⁰C₃ = ⁵¹C₄, then + ⁵¹C₃ = ⁵²C₄." },

]
},

{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: ARRANGEMENTS, WORDS AND CIRCULAR PERMUTATIONS ",
    questions: [

{ q: "The number of distinct arrangements of the letters of the word MISSISSIPPI is",
  o: ["39916800", "69300", "34650", "17325"], a: 2,
  s: "There are 11 letters: I appears 4 times, S 4 times, P 2 times, M once. Number of arrangements = 11!/(4! 4! 2!) = 34650." },

{ q: "The number of arrangements of the letters of MISSISSIPPI in which no two S's are adjacent is",
  o: ["34650", "105", "7350", "5880"], a: 2,
  s: "First arrange the 7 non-S letters (M, I×4, P×2): 7!/(4! 2!) = 105 ways. They create 8 gaps, and the 4 S's go into 4 different gaps: C(8, 4) = 70 ways. Total = 105 × 70 = 7350." },

{ q: "The number of distinct arrangements of the letters of the word ARRANGEMENT is",
  o: ["4989600", "39916800", "1247400", "2494800"], a: 3,
  s: "ARRANGEMENT has 11 letters, with A, R, N, E each appearing twice. Arrangements = 11!/(2! 2! 2! 2!) = 39916800/16 = 2494800." },

{ q: "If all the letters of the word MOTHER are arranged in all possible ways and listed in dictionary order, the rank of the word MOTHER is",
  o: ["303", "309", "308", "310"], a: 1,
  s: "Alphabetical order of letters: E, H, M, O, R, T. Words starting with E or H: 2 × 5! = 240. Then M is the first letter; for the second letter, words with E or H next: 2 × 4! = 48. Third letter: among E, H, R (remaining) smaller than T: 3 × 3! = 18. Fourth letter H: smaller remaining letter E: 1 × 2! = 2. Then E and R are left in the order E, R: that is the word MOTHER itself, 1 more. Rank = 240 + 48 + 18 + 2 + 1 = 309." },

{ q: "The number of arrangements of the letters of PERMUTATION in which the vowels are together is",
  o: ["604800", "151200", "14400", "302400"], a: 3,
  s: "Vowels: E, U, A, I, O (5 distinct). Treat them as one block. Units: P, R, M, T, T, N and the block, which is 7 units with T repeated: 7!/2! = 2520. The block can be arranged internally in 5! = 120 ways. Total = 2520 × 120 = 302400." },

{ q: "The number of arrangements of the letters of EQUATION in which all the vowels come together is",
  o: ["2880", "5760", "1440", "720"], a: 0,
  s: "All 8 letters are distinct. Vowels E, U, A, I, O form one block, and with Q, T, N there are 4 units: 4! = 24 arrangements. The vowels can be arranged within the block in 5! = 120 ways. Total = 24 × 120 = 2880." },

{ q: "The number of distinct arrangements of the letters of INDEPENDENCE is",
  o: ["1663200", "3326400", "831600", "479001600"], a: 0,
  s: "There are 12 letters: N appears 3 times, D 2 times, E 4 times, and I, P, C once each. Arrangements = 12!/(3! 2! 4!) = 479001600/288 = 1663200." },

{ q: "The number of ways in which 5 boys and 3 girls can be seated in a row so that no two girls are adjacent is",
  o: ["7200", "14400", "28800", "720"], a: 1,
  s: "Seat the 5 boys first: 5! = 120 ways. They create 6 gaps, and the 3 girls take 3 different gaps in order: ⁶P₃ = 120 ways. Total = 120 × 120 = 14400." },

{ q: "Eight persons A, B, C, D, E, F, G, H sit around a circular table. The number of arrangements in which A and B are not adjacent is",
  o: ["1440", "3600", "5040", "4320"], a: 1,
  s: "Total circular arrangements = 7! = 5040. With A and B together: treat them as one unit, giving 6! circular arrangements times 2 internal orders = 1440. Not adjacent = 5040 − 1440 = 3600." },

{ q: "The number of different necklaces that can be made with 6 different beads is",
  o: ["60", "120", "720", "30"], a: 0,
  s: "Circular arrangements of 6 distinct beads = 5! = 120. A necklace can be turned over, so each arrangement and its mirror image are the same. Number of necklaces = 120/2 = 60." },

{ q: "The number of ways in which 4 men and 4 women can be seated around a round table so that men and women sit alternately is",
  o: ["576", "24", "288", "144"], a: 3,
  s: "Seat the 4 men around the table: (4 − 1)! = 6 ways. The 4 women then occupy the 4 gaps between men: 4! = 24 ways. Total = 6 × 24 = 144." },

{ q: "The number of arrangements of the letters of the word LOGARITHMS in which the vowels occupy the two end places is",
  o: ["40320", "120960", "241920", "483840"], a: 2,
  s: "LOGARITHMS has 10 distinct letters, with vowels O, A, I. The two ends can be filled with 2 of the 3 vowels in ³P₂ = 6 ways. The remaining 8 letters fill the middle in 8! = 40320 ways. Total = 6 × 40320 = 241920." },

{ q: "The number of arrangements of the letters of BANANA in which the three A's are not all together is",
  o: ["12", "60", "36", "48"], a: 3,
  s: "Total arrangements = 6!/(3! 2!) = 60. With the three A's together as a block: units B, N, N and the block, giving 4!/2! = 12. Required = 60 − 12 = 48." },

{ q: "The number of arrangements of the letters of ALLAHABAD in which the vowels occupy only the even positions is",
  o: ["120", "30", "24", "60"], a: 3,
  s: "ALLAHABAD has 9 letters: A appears 4 times (the only vowel), L twice, and H, B, D once each. There are exactly 4 even positions (2, 4, 6, 8), so the four A's must occupy them (1 way). The remaining letters L, L, H, B, D fill the 5 odd positions in 5!/2! = 60 ways." },

{ q: "The number of distinct 4-letter words (meaningful or not) that can be formed from the letters of the word LETTER is",
  o: ["96", "108", "120", "102"], a: 3,
  s: "Letters: L, E, E, T, T, R. Case 1, all four letters different (from L, E, T, R): 4! = 24. Case 2, two letters alike and two different: choose the pair (E or T: 2 ways), choose 2 different letters from the remaining 3 distinct letters (C(3, 2) = 3 ways), arrange 4!/2! = 12: 2 × 3 × 12 = 72. Case 3, two pairs (E, E, T, T): 4!/(2! 2!) = 6. Total = 24 + 72 + 6 = 102." },

]
},


{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: NUMBERS FORMED FROM DIGITS ",
    questions: [

{ q: "The number of 4-digit numbers formed from the digits 1, 2, 3, 4, 5 (no repetition) that are divisible by 4 is",
  o: ["24", "20", "30", "36"], a: 0,
  s: "A number is divisible by 4 if its last two digits form a multiple of 4. Using distinct digits from 1 to 5: 12, 24, 32, 52 (44 is not allowed). That is 4 choices. The first two places can then be filled from the remaining 3 digits in 3 × 2 = 6 ways. Total = 4 × 6 = 24." },

{ q: "The number of 5-digit numbers divisible by 3 that can be formed from the digits 0, 1, 2, 3, 4, 5 without repetition is",
  o: ["240", "120", "192", "216"], a: 3,
  s: "The digits used are 5 of the 6; their sum is 15 − (omitted digit). For divisibility by 3 the omitted digit must be 0 or 3. Omit 0: digits 1, 2, 3, 4, 5 give 5! = 120 numbers. Omit 3: digits 0, 1, 2, 4, 5 give 5! − 4! = 96 numbers (0 not in the first place). Total = 216." },

{ q: "The number of integers greater than 4000 that can be formed from the digits 1, 2, 3, 4, 5, without repetition of digits, is",
  o: ["120", "168", "144", "192"], a: 1,
  s: "4-digit numbers greater than 4000: the first digit is 4 or 5 (2 choices), then 4 × 3 × 2 = 24 ways for the rest, giving 48. 5-digit numbers: all 5! = 120 are greater than 4000. Total = 48 + 120 = 168." },

{ q: "The sum of all 4-digit numbers that can be formed using the digits 1, 2, 3, 4 once each is",
  o: ["66660", "6666", "33330", "26664"], a: 0,
  s: "There are 4! = 24 numbers. Each digit appears in each place 3! = 6 times. Sum of the digits = 10, so each place contributes 10 × 6 = 60. The total is 60 × (1000 + 100 + 10 + 1) = 60 × 1111 = 66660." },

{ q: "The number of 4-digit numbers whose digits add up to 3 is",
  o: ["20", "10", "15", "6"], a: 1,
  s: "Let the digits be d₁ + d₂ + d₃ + d₄ = 3 with d₁ ≥ 1. Put d₁ = e + 1: e + d₂ + d₃ + d₄ = 2 with all variables ≥ 0. The number of solutions is C(2 + 3, 3) = C(5, 3) = 10 (all digits stay below 10)." },

{ q: "The number of natural numbers less than 1000 in which no digit is repeated is",
  o: ["738", "729", "900", "648"], a: 0,
  s: "1-digit numbers: 9. 2-digit numbers: 9 × 9 = 81. 3-digit numbers: 9 × 9 × 8 = 648. Total = 9 + 81 + 648 = 738." },

{ q: "The number of 3-digit numbers divisible by 5 that can be formed from the digits 0, 1, 2, 3, 4, 5 without repetition is",
  o: ["40", "36", "48", "30"], a: 1,
  s: "Units digit 0: the other two places are filled from 5 digits in 5 × 4 = 20 ways. Units digit 5: the first digit has 4 choices (1 to 4), the middle digit has 4 choices (the remaining digits including 0): 16 ways. Total = 20 + 16 = 36." },

{ q: "The number of 5-digit numbers that use only the digits 1 and 2 and contain both digits at least once is",
  o: ["32", "30", "25", "20"], a: 1,
  s: "Each of the 5 places has 2 choices, giving 2⁵ = 32 numbers. Remove the two numbers that use only one digit (11111 and 22222). Required = 32 − 2 = 30." },

]
},


{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: SELECTIONS AND GEOMETRICAL COUNTING  ",
    questions: [

{ q: "A committee of 4 is to be formed from 5 men and 4 women so that it contains at least one woman. The number of ways is",
  o: ["126", "120", "121", "115"], a: 2,
  s: "Total committees = C(9, 4) = 126. Committees with no woman = C(5, 4) = 5. Required = 126 − 5 = 121." },

{ q: "A committee of 5 is to be formed from 6 men and 4 women so that it contains at least 3 men. The number of ways is",
  o: ["186", "180", "120", "196"], a: 0,
  s: "3 men and 2 women: C(6, 3) × C(4, 2) = 20 × 6 = 120. 4 men and 1 woman: C(6, 4) × C(4, 1) = 15 × 4 = 60. 5 men: C(6, 5) = 6. Total = 120 + 60 + 6 = 186." },

{ q: "The number of ways to choose a committee of 5 from 10 persons, in which two particular persons A and B are never together, is",
  o: ["252", "196", "56", "140"], a: 1,
  s: "Total = C(10, 5) = 252. Committees containing both A and B: choose the other 3 from 8: C(8, 3) = 56. Required = 252 − 56 = 196." },

{ q: "There are 3 identical apples, 4 identical oranges and 2 identical mangoes. The number of ways of selecting at least one fruit is",
  o: ["60", "47", "59", "24"], a: 2,
  s: "Apples can be chosen in 4 ways (0 to 3), oranges in 5 ways (0 to 4), mangoes in 3 ways (0 to 2). Total selections = 4 × 5 × 3 = 60, including the empty selection. At least one fruit: 60 − 1 = 59." },

{ q: "The number of ways of selecting 4 letters from the letters of the word MISSISSIPPI (letters of the same kind are identical) is",
  o: ["19", "23", "21", "25"], a: 2,
  s: "Letters: M×1, I×4, S×4, P×2. Count solutions of m + i + s + p = 4 with m ≤ 1, p ≤ 2 (i and s never exceed 4). For each choice of (m, p), the number of ways to split the remaining 4 − m − p between i and s is 5 − m − p. (m, p) = (0,0): 5; (0,1): 4; (0,2): 3; (1,0): 4; (1,1): 3; (1,2): 2. Total = 5 + 4 + 3 + 4 + 3 + 2 = 21." },

{ q: "The number of 5-letter words, each containing 3 vowels and 2 consonants, that can be formed from the letters of EQUATION (no repetition) is",
  o: ["30", "3600", "720", "7200"], a: 1,
  s: "EQUATION has 5 vowels (E, U, A, I, O) and 3 consonants (Q, T, N). Choose 3 vowels: C(5, 3) = 10. Choose 2 consonants: C(3, 2) = 3. Arrange the 5 chosen letters: 5! = 120. Total = 10 × 3 × 120 = 3600." },

{ q: "A polygon has 44 diagonals. The number of its sides is",
  o: ["10", "12", "9", "11"], a: 3,
  s: "A polygon with n sides has n(n − 3)/2 diagonals. So n(n − 3) = 88, i.e. n² − 3n − 88 = 0, which gives n = 11 (the root −8 is rejected)." },

{ q: "12 points are given in a plane, of which 5 are collinear and no other three are collinear. The number of triangles with vertices at these points is",
  o: ["220", "210", "200", "230"], a: 1,
  s: "Total triples = C(12, 3) = 220. Triples chosen from the 5 collinear points do not form a triangle: C(5, 3) = 10. Required = 220 − 10 = 210." },

{ q: "10 points are given in a plane, of which 4 are collinear and no other three are collinear. The number of distinct straight lines passing through at least two of these points is",
  o: ["45", "39", "41", "40"], a: 3,
  s: "Pairs of points: C(10, 2) = 45. The 4 collinear points give C(4, 2) = 6 pairs, but they all lie on a single line. Number of lines = 45 − 6 + 1 = 40." },

{ q: "The number of triangles whose vertices are vertices of a regular octagon and none of whose sides is a side of the octagon is",
  o: ["20", "16", "24", "8"], a: 1,
  s: "Total triangles = C(8, 3) = 56. Triangles with exactly two sides on the octagon (three consecutive vertices): 8. Triangles with exactly one side on the octagon: choose the side (8) and a third vertex not adjacent to either end (8 − 4 = 4): 8 × 4 = 32. None: 56 − 8 − 32 = 16." },

{ q: "The number of triangles whose vertices are vertices of a regular decagon and exactly one of whose sides is a side of the decagon is",
  o: ["70", "50", "40", "60"], a: 3,
  s: "Choose the common side: 10 ways. The third vertex must not be adjacent to either end of that side, so it can be any of 10 − 4 = 6 vertices. Total = 10 × 6 = 60." },

{ q: "The number of rectangles (of all sizes) on an 8 × 8 chessboard is",
  o: ["204", "1024", "784", "1296"], a: 3,
  s: "A rectangle is fixed by choosing 2 of the 9 horizontal lines and 2 of the 9 vertical lines: C(9, 2) × C(9, 2) = 36 × 36 = 1296." },

{ q: "The number of shortest paths from (0, 0) to (6, 4), moving one unit right or up at each step, that pass through the point (3, 2) is",
  o: ["100", "210", "120", "80"], a: 0,
  s: "Paths from (0, 0) to (3, 2): C(5, 2) = 10. Paths from (3, 2) to (6, 4): 3 rights and 2 ups, C(5, 2) = 10. Total = 10 × 10 = 100." },

{ q: "A set of 5 parallel lines intersects another set of 4 parallel lines (not parallel to the first set). The number of parallelograms formed is",
  o: ["20", "120", "60", "30"], a: 2,
  s: "A parallelogram is fixed by choosing 2 lines from the first set and 2 from the second: C(5, 2) × C(4, 2) = 10 × 6 = 60." },


]
},

{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: DIVISIONS, DISTRIBUTIONS AND DERANGEMENTS  ",
    questions: [


{ q: "The number of ways of dividing 9 different objects equally into 3 groups (the groups are not labelled) is",
  o: ["1680", "280", "84", "560"], a: 1,
  s: "9!/((3!)³ · 3!) = 362880/(216 × 6) = 280. (If the groups were named, the answer would be 9!/(3!)³ = 1680.)" },

{ q: "The number of ways of dividing 10 different objects into groups of 5, 3 and 2 objects is",
  o: ["2520", "252", "5040", "1260"], a: 0,
  s: "The groups have different sizes, so they are automatically distinguishable. Number of ways = 10!/(5! 3! 2!) = 2520." },

{ q: "The number of ways of dividing 8 different persons into 4 pairs is",
  o: ["210", "105", "2520", "420"], a: 1,
  s: "Number of ways = 8!/((2!)⁴ · 4!) = 40320/(16 × 24) = 105." },

{ q: "The number of ways of distributing 6 different balls into 3 different boxes so that no box is empty is",
  o: ["540", "729", "360", "720"], a: 0,
  s: "Total distributions = 3⁶ = 729. By inclusion-exclusion, subtract those with at least one empty box: 3 × 2⁶ − 3 × 1⁶ = 192 − 3 = 189. Required = 729 − 189 = 540." },

{ q: "The number of ways of distributing 12 identical balls into 4 different boxes so that every box has at least one ball is",
  o: ["165", "220", "330", "495"], a: 0,
  s: "Positive integer solutions of x₁ + x₂ + x₃ + x₄ = 12: C(12 − 1, 4 − 1) = C(11, 3) = 165." },

{ q: "The number of non-negative integer solutions of x + y + z = 10 with x ≥ 2 is",
  o: ["66", "36", "45", "55"], a: 2,
  s: "Put x = x′ + 2 with x′ ≥ 0. Then x′ + y + z = 8, which has C(8 + 2, 2) = C(10, 2) = 45 solutions." },

{ q: "The number of ways in which 4 letters can be posted in 3 letter boxes is",
  o: ["64", "12", "81", "24"], a: 2,
  s: "Each letter can be posted in any of the 3 boxes independently: 3⁴ = 81." },

{ q: "At a party every person shakes hands exactly once with every other person. If there are 66 handshakes in all, the number of persons is",
  o: ["11", "13", "14", "12"], a: 3,
  s: "Number of handshakes = C(n, 2) = n(n − 1)/2 = 66. So n(n − 1) = 132, giving n = 12." },

{ q: "5 letters are to be placed in 5 addressed envelopes, one in each. The number of ways in which exactly two letters are in the correct envelopes is",
  o: ["44", "45", "20", "10"], a: 2,
  s: "Choose the 2 correctly placed letters: C(5, 2) = 10. The other 3 letters must all be misplaced: the number of derangements of 3 objects is 2. Total = 10 × 2 = 20." },

{ q: "The number of ways of distributing 5 different books among 3 students so that every student gets at least one book is",
  o: ["243", "120", "150", "180"], a: 2,
  s: "Total ways = 3⁵ = 243. By inclusion-exclusion: 243 − 3 × 2⁵ + 3 × 1⁵ = 243 − 96 + 3 = 150." },

/* ======================= SECTION F: MIXED JEE-STYLE PROBLEMS (12) ======================= */

{ q: "The number of divisors of 7200 that are multiples of 10 is",
  o: ["36", "45", "30", "24"], a: 2,
  s: "7200 = 2⁵ · 3² · 5². A divisor 2ᵃ3ᵇ5ᶜ is a multiple of 10 iff a ≥ 1 and c ≥ 1. So a has 5 choices (1 to 5), b has 3 choices (0 to 2), c has 2 choices (1 to 2). Total = 5 × 3 × 2 = 30." },

{ q: "5 boys and 5 girls are to be seated around a circular table so that no two boys are adjacent. The number of ways is",
  o: ["14400", "120", "2880", "5760"], a: 2,
  s: "Seat the 5 girls around the table: (5 − 1)! = 24 ways. The 5 gaps between them are filled by the 5 boys: 5! = 120 ways. Total = 24 × 120 = 2880." },

{ q: "The number of ways of choosing 4 numbers from {1, 2, 3, ..., 20} so that no two of them are consecutive is",
  o: ["4845", "3876", "1820", "2380"], a: 3,
  s: "Choosing r non-consecutive numbers from n gives C(n − r + 1, r). Here C(20 − 4 + 1, 4) = C(17, 4) = 2380." },

{ q: "The number of subsets of {1, 2, ..., 10} that contain at least 3 elements is",
  o: ["1013", "968", "1023", "1000"], a: 1,
  s: "Total subsets = 2¹⁰ = 1024. Subsets with 0, 1 or 2 elements: 1 + 10 + 45 = 56. Required = 1024 − 56 = 968." },

{ q: "The number of distinct arrangements of the letters of the word EXAMINATION is",
  o: ["39916800", "9979200", "4989600", "2494800"], a: 2,
  s: "EXAMINATION has 11 letters, with A, I and N each appearing twice. Arrangements = 11!/(2! 2! 2!) = 39916800/8 = 4989600." },

{ q: "The number of ways of choosing 2 numbers from {1, 2, ..., 100} whose sum is divisible by 3 is",
  o: ["1650", "1683", "1584", "1700"], a: 0,
  s: "Residues mod 3: remainder 0 has 33 numbers, remainder 1 has 34, remainder 2 has 33. The sum is divisible by 3 if both numbers have remainder 0 or one has remainder 1 and the other 2. Count = C(33, 2) + 34 × 33 = 528 + 1122 = 1650." },

{ q: "7 persons stand in a row. The number of arrangements in which A is always to the left of B (not necessarily adjacent) is",
  o: ["2520", "5040", "1260", "720"], a: 0,
  s: "By symmetry, exactly half of the 7! = 5040 arrangements have A to the left of B. Required = 5040/2 = 2520." },

{ q: "The number of 3-element subsets of {1, 2, ..., 20} whose elements are in arithmetic progression is",
  o: ["180", "90", "100", "95"], a: 1,
  s: "A 3-term AP a, a + d, a + 2d with d ≥ 1 needs a + 2d ≤ 20, so a can take 20 − 2d values. Total = Σ (d = 1 to 9) (20 − 2d) = 180 − 90 = 90. (As sets, each AP counted once.)" },

{ q: "A cricket team of 11 is to be chosen from 15 players, of whom 5 are bowlers, 2 are wicketkeepers and 8 are other players. The team must include exactly 1 wicketkeeper and at least 4 bowlers. The number of ways is",
  o: ["196", "784", "392", "560"], a: 2,
  s: "Choose the wicketkeeper: 2 ways. The other 10 members come from 13 players (5 bowlers and 8 others) with at least 4 bowlers. 4 bowlers: C(5, 4) × C(8, 6) = 5 × 28 = 140. 5 bowlers: C(5, 5) × C(8, 5) = 56. Sum = 196. Total = 2 × 196 = 392." },

{ q: "The number of ways of choosing 3 numbers from {1, 2, ..., 30} so that their sum is even is",
  o: ["2030", "2024", "1960", "2100"], a: 0,
  s: "The sum is even if all three are even, or one is even and two are odd. There are 15 even and 15 odd numbers. All even: C(15, 3) = 455. One even, two odd: 15 × C(15, 2) = 15 × 105 = 1575. Total = 455 + 1575 = 2030." },

{ q: "3 men and 3 women are to be seated in a row so that men and women sit alternately. The number of ways is",
  o: ["72", "36", "144", "720"], a: 0,
  s: "The row starts with a man or with a woman: 2 patterns. In each pattern, the men can be arranged in 3! = 6 ways and the women in 3! = 6 ways. Total = 2 × 6 × 6 = 72." },

{ q: "The number of 4-letter words (meaningful or not) that can be formed from the 26 letters of the alphabet, repetition allowed, in which at least one letter is repeated is",
  o: ["98176", "358800", "456976", "97500"], a: 0,
  s: "Total words = 26⁴ = 456976. Words with all letters different: 26 × 25 × 24 × 23 = 358800. Required = 456976 − 358800 = 98176." },

]
},





 /* ----- MOCK TESTS JEE MAIN----- */

{
title: "UNIT 01 : SETS, RELATIONS & FUNCTIONS - Mock Test 01", levels: ["JEE Main"], minutes: 10,
    desc: "A short timed test across calculus, algebra, coordinate geometry and matrices.",
    questions: [
 
{ q: "Let A = {1, 2, {3, 4}}. Which of the following statements is true?",   o: ["{3, 4} ⊂ A", "{{3, 4}} ⊂ A and {3, 4} ∈ A", "3 ∈ A", "{1, 2, 3} ⊂ A"], a: 1,
  s: "The elements of A are 1, 2 and the set {3, 4}. So {3, 4} ∈ A, and the set {{3, 4}} has its only element in A, so {{3, 4}} ⊂ A. But 3 ∉ A, so {3, 4} ⊄ A, 3 ∉ A and {1, 2, 3} ⊄ A." },

{ q: "Let A = {n ∈ ℕ : n is a multiple of 3, n ≤ 100} and B = {n ∈ ℕ : n is a multiple of 5, n ≤ 100}. Then n(A ∪ B) equals",   o: ["53", "50", "47", "46"], a: 2,   s: "n(A) = ⌊100/3⌋ = 33 and n(B) = ⌊100/5⌋ = 20. A ∩ B is the set of multiples of 15, so n(A ∩ B) = ⌊100/15⌋ = 6. n(A ∪ B) = 33 + 20 − 6 = 47." },

{ q: "If n(A) = 25, n(B) = 30 and n(A ∪ B) ≤ 40, the minimum possible value of n(A ∩ B) is",   o: ["15", "10", "5", "25"], a: 0,   s: "n(A ∩ B) = n(A) + n(B) − n(A ∪ B) ≥ 55 − 40 = 15. The minimum is attained when n(A ∪ B) = 40." },

{ q: "The number of reflexive relations on a set with 4 elements is",   o: ["16", "256", "4096", "65536"], a: 2,   s: "The 4 diagonal pairs (x, x) are forced. Each of the remaining 16 − 4 = 12 pairs may be present or absent. Count = 2¹² = 4096." },

{ q: "The number of symmetric relations on A = {1, 2, 3} that are NOT reflexive is",   o: ["64", "8", "56", "72"], a: 2,   s: "A symmetric relation chooses each of the 3 diagonal pairs freely (2³) and each of the 3 unordered off-diagonal pairs freely (2³). Total = 2⁶ = 64. A reflexive symmetric relation must contain all 3 diagonal pairs, giving 2³ = 8. Required = 64 − 8 = 56." },

  
   ]
},
 
);
