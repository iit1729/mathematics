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


]
},


{
title: "UNIT 04 : PERMUTATIONS AND COMBINATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: MIXED JEE-STYLE PROBLEMS ",
    questions: [

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


{
title: "UNIT 05 : BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: GENERAL TERM, SPECIFIC TERMS AND CONDITIONS ON TERMS ",
    questions: [


/* ======================= SECTION A: GENERAL TERM, SPECIFIC TERMS AND CONDITIONS ON TERMS (19) ======================= */

{ q: "The coefficient of x³y⁴ in the expansion of (2x − 3y)⁷ is",
  o: ["−22680", "7560", "22680", "15120"], a: 2,
  s: "The general term is T(r+1) = C(7, r)(2x)^(7−r)(−3y)^r. For x³y⁴ we need r = 4: C(7, 4) · 2³ · (−3)⁴ = 35 × 8 × 81 = 22680." },

{ q: "The 4th term in the expansion of (x + 1/x)⁸ is",
  o: ["70", "56x²", "56x⁻²", "28x⁴"], a: 1,
  s: "T₄ = C(8, 3) x^(8−3) (1/x)³ = 56 x⁵ · x⁻³ = 56x²." },

{ q: "The coefficient of x⁷ in the expansion of (x² + 1/x)¹¹ is",
  o: ["330", "462", "165", "792"], a: 1,
  s: "T(r+1) = C(11, r)(x²)^(11−r)(1/x)^r = C(11, r) x^(22−3r). For x⁷: 22 − 3r = 7, so r = 5. Coefficient = C(11, 5) = 462." },

{ q: "The term independent of x in the expansion of (2x² − 1/x)¹² is",
  o: ["−7920", "7920", "495", "3960"], a: 1,
  s: "T(r+1) = C(12, r)(2x²)^(12−r)(−1/x)^r has power of x equal to 24 − 3r. Independent term: r = 8. Value = C(12, 8) · 2⁴ · (−1)⁸ = 495 × 16 = 7920." },

{ q: "The term independent of x in the expansion of (3x²/2 − 1/(3x))⁹ is",
  o: ["5/18", "7/18", "7/9", "−7/18"], a: 1,
  s: "T(r+1) = C(9, r)(3x²/2)^(9−r)(−1/(3x))^r has power of x equal to 18 − 3r. Independent term: r = 6. Value = C(9, 6)(3/2)³(1/3)⁶ = 84 × (27/8) × (1/729) = 84/216 = 7/18." },

{ q: "The term independent of x in the expansion of (x^(1/3) + 1/(2x^(1/3)))⁸ is",
  o: ["35/8", "35/4", "70", "35/16"], a: 0,
  s: "T(r+1) = C(8, r) x^((8−r)/3) (1/2)^r x^(−r/3) has power of x equal to (8 − 2r)/3. Independent term: r = 4. Value = C(8, 4)/2⁴ = 70/16 = 35/8." },

{ q: "The second, third and fourth terms in the expansion of (a + x)ⁿ are 240, 720 and 1080 respectively. Then n equals",
  o: ["4", "6", "7", "5"], a: 3,
  s: "T₂ = n aⁿ⁻¹x = 240, T₃ = C(n,2)aⁿ⁻²x² = 720, T₄ = C(n,3)aⁿ⁻³x³ = 1080. Divide: T₃/T₂ = (n − 1)x/(2a) = 3 and T₄/T₃ = (n − 2)x/(3a) = 3/2. Dividing these two: [(n − 1)/(n − 2)] × (3/2) = 2, so 3(n − 1) = 4(n − 2), n = 5. (Then x/a = 3/2, a = 2, x = 3.)" },

{ q: "The coefficients of the 2nd, 3rd and 4th terms in the expansion of (1 + x)ⁿ are in A.P. Then n equals",
  o: ["5", "7", "6", "8"], a: 1,
  s: "2·C(n, 2) = C(n, 1) + C(n, 3). That is n(n − 1) = n + n(n − 1)(n − 2)/6. Dividing by n: 6(n − 1) = 6 + (n − 1)(n − 2), so n² − 9n + 14 = 0, giving n = 7 or n = 2. For a 4th term to exist we need n ≥ 3, so n = 7." },

{ q: "The coefficients of the 5th, 6th and 7th terms in the expansion of (1 + x)ⁿ are in A.P. The sum of all possible values of n is",
  o: ["21", "14", "18", "28"], a: 0,
  s: "2·C(n, 5) = C(n, 4) + C(n, 6). Using the ratios C(n,5)/C(n,4) = (n − 4)/5 and C(n,6)/C(n,4) = (n − 4)(n − 5)/30: 2(n − 4)/5 = 1 + (n − 4)(n − 5)/30, which simplifies to n² − 21n + 98 = 0. So n = 7 or 14, and the sum is 21." },

{ q: "If the coefficients of x² and x³ in the expansion of (3 + ax)⁹ are equal, then a equals",
  o: ["9/7", "7/9", "3/7", "9/4"], a: 0,
  s: "Coefficient of x²: C(9, 2) 3⁷ a². Coefficient of x³: C(9, 3) 3⁶ a³. Setting them equal and cancelling 3⁶a²: 36 × 3 = 84a, so a = 108/84 = 9/7 (a = 0 is rejected)." },

{ q: "If the term independent of x in the expansion of (√x − k/x²)¹⁰ is 405, then k equals",
  o: ["±9", "±1/3", "±3", "3 only"], a: 2,
  s: "T(r+1) = C(10, r)(√x)^(10−r)(−k/x²)^r has power of x equal to (10 − r)/2 − 2r. Independent term: (10 − r)/2 = 2r, so r = 2. Then C(10, 2) k² = 45k² = 405, so k² = 9 and k = ±3." },

{ q: "If the coefficient of x⁷ in (ax² + 1/(bx))¹¹ is equal to the coefficient of x⁻⁷ in (ax − 1/(bx²))¹¹, then ab equals",
  o: ["1", "2", "−1", "1/2"], a: 0,
  s: "In the first expansion the power of x is 22 − 3r, so x⁷ needs r = 5: coefficient C(11, 5) a⁶/b⁵. In the second, the power is 11 − 3r, so x⁻⁷ needs r = 6: coefficient C(11, 6) a⁵/b⁶ (since (−1)⁶ = 1). As C(11, 5) = C(11, 6), we need a⁶/b⁵ = a⁵/b⁶, i.e. a = 1/b, so ab = 1." },

{ q: "In the expansion of (x² + 2/x)¹⁵, the ratio of the coefficient of x¹⁵ to the term independent of x is",
  o: ["32 : 1", "1 : 16", "1 : 2", "1 : 32"], a: 3,
  s: "T(r+1) = C(15, r) 2^r x^(30−3r). For x¹⁵: r = 5, coefficient C(15, 5) 2⁵. For the independent term: r = 10, value C(15, 10) 2¹⁰. Since C(15, 5) = C(15, 10), the ratio is 2⁵ : 2¹⁰ = 1 : 32." },

{ q: "In the expansion of (1 + x)⁴³, the coefficients of the (2r + 1)th and (r + 2)th terms are equal. Then r (with r > 1) equals",
  o: ["13", "14", "15", "21"], a: 1,
  s: "C(43, 2r) = C(43, r + 1). Either 2r = r + 1 (r = 1, rejected) or 2r + (r + 1) = 43, giving 3r = 42 and r = 14." },

{ q: "In the expansion of (1 + x)¹⁴, the coefficients of the rth, (r + 1)th and (r + 2)th terms are in A.P. The values of r are",
  o: ["4 and 10", "5 and 8", "5 and 9", "6 and 8"], a: 2,
  s: "The coefficients are C(14, r − 1), C(14, r), C(14, r + 1). The A.P. condition is 2C(14, r) = C(14, r − 1) + C(14, r + 1), which gives (n − 2r)² = n + 2 with n = 14, i.e. (14 − 2r)² = 16. So 14 − 2r = ±4 and r = 5 or 9. (Check r = 5: 1001, 2002, 3003.)" },

{ q: "In the expansion of (2^(1/3) + 1/3^(1/3))ⁿ, the ratio of the 7th term from the beginning to the 7th term from the end is 1/6. Then n equals",
  o: ["8", "10", "9", "12"], a: 2,
  s: "T₇ = C(n, 6)(2^(1/3))^(n−6)(3^(−1/3))⁶. The 7th term from the end is T(n−5) = C(n, 6)(2^(1/3))⁶(3^(−1/3))^(n−6). Their ratio is 2^((n−12)/3) · 3^((n−12)/3) = 6^((n−12)/3). Setting this equal to 6⁻¹: (n − 12)/3 = −1, so n = 9." },

{ q: "The number of rational terms in the expansion of (√2 + ⁴√3)¹⁰⁰ is",
  o: ["26", "25", "51", "101"], a: 0,
  s: "T(r+1) = C(100, r) 2^((100−r)/2) 3^(r/4). Both exponents must be integers: r must be a multiple of 4 (this also makes (100 − r)/2 an integer). So r = 0, 4, 8, ..., 100, which gives 26 values." },

{ q: "If the third term in the expansion of (x + x^(log₁₀ x))⁵ is 10⁶, then x can be",
  o: ["10 or 10^(−5/2)", "10 or 10^(5/2)", "1 or 10", "10^(−5/2) only"], a: 0,
  s: "T₃ = C(5, 2) x³ (x^(log x))² = 10 x^(3 + 2 log x) = 10⁶. So x^(3 + 2 log x) = 10⁵. Take log₁₀ with L = log₁₀ x: L(3 + 2L) = 5, i.e. 2L² + 3L − 5 = 0, so L = 1 or L = −5/2. Hence x = 10 or x = 10^(−5/2)." },

{ q: "The coefficients of three consecutive terms in the expansion of (1 + x)ⁿ are in the ratio 1 : 7 : 42. Then n equals",
  o: ["45", "55", "50", "56"], a: 1,
  s: "Let the terms have coefficients C(n, r − 1), C(n, r), C(n, r + 1). Then C(n, r)/C(n, r − 1) = (n − r + 1)/r = 7 and C(n, r + 1)/C(n, r) = (n − r)/(r + 1) = 6. From the first, n = 8r − 1. From the second, n − r = 6r + 6, so 7r − 1 = 6r + 6, giving r = 7 and n = 55." },

]
},

{
title: "UNIT 05 : BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: MIDDLE TERM, GREATEST TERM AND GREATEST COEFFICIENT ",
    questions: [

/* ======================= SECTION B: MIDDLE TERM, GREATEST TERM AND GREATEST COEFFICIENT (8) ======================= */

{ q: "The middle term in the expansion of (2x − 3)⁶ is",
  o: ["−4320x³", "4320x³", "−2160x³", "−8640x³"], a: 0,
  s: "n = 6 is even, so there is one middle term, T₄. T₄ = C(6, 3)(2x)³(−3)³ = 20 × 8x³ × (−27) = −4320x³." },

{ q: "The middle terms in the expansion of (x + 1/x)⁷ are",
  o: ["35x² and 35/x²", "35 and 35", "35x and 35/x", "21x and 21/x"], a: 2,
  s: "n = 7 is odd, so there are two middle terms, T₄ and T₅. T₄ = C(7, 3) x⁴ x⁻³ = 35x. T₅ = C(7, 4) x³ x⁻⁴ = 35/x." },

{ q: "The middle terms in the expansion of (3x − x³/6)⁹ are",
  o: ["189x¹⁷/8 and 21x¹⁹/16", "189x¹⁷/8 and −21x¹⁹/16", "−189x¹⁷/8 and −21x¹⁹/16", "21x¹⁷/16 and −189x¹⁹/8"], a: 1,
  s: "n = 9 is odd, so the middle terms are T₅ and T₆. T₅ = C(9, 4)(3x)⁵(−x³/6)⁴ = 126 × 243 x⁵ × x¹²/1296 = (189/8) x¹⁷. T₆ = C(9, 5)(3x)⁴(−x³/6)⁵ = 126 × 81 x⁴ × (−x¹⁵/7776) = −(21/16) x¹⁹." },

{ q: "The greatest coefficient in the expansion of (1 + x)¹⁵ is",
  o: ["3003", "5005", "6435", "12870"], a: 2,
  s: "For odd n = 15, the greatest coefficients are the two middle ones, C(15, 7) = C(15, 8) = 6435." },

{ q: "The greatest value of ²⁰Cᵣ (r = 0, 1, ..., 20) is",
  o: ["167960", "125970", "92378", "184756"], a: 3,
  s: "ⁿCᵣ is greatest at r = n/2 when n is even. So the greatest value is ²⁰C₁₀ = 184756." },

{ q: "In the expansion of (1 + x)²⁰, the term with the greatest binomial coefficient is the",
  o: ["11th term", "10th term", "12th term", "10th and 11th terms"], a: 0,
  s: "For even n = 20, the greatest coefficient is C(20, 10), which belongs to T(10+1) = T₁₁, the 11th term (the middle term)." },

{ q: "In the expansion of (1 + 3x)¹⁰ at x = 1/2, the numerically greatest term is the",
  o: ["7th term", "6th term", "8th term", "5th term"], a: 0,
  s: "T(r+1)/T(r) = [(11 − r)/r] × 3x = 1.5(11 − r)/r. This exceeds 1 when 16.5 − 1.5r > r, i.e. r < 6.6. So T₇/T₆ > 1 (r = 6 gives 1.25) and T₈/T₇ < 1 (r = 7 gives 0.857). The greatest term is T₇, the 7th term." },

{ q: "The number of terms in the expansion of (x + a)¹⁰⁰ + (x − a)¹⁰⁰ is",
  o: ["50", "101", "51", "100"], a: 2,
  s: "In (x + a)¹⁰⁰ + (x − a)¹⁰⁰, terms with an odd power of a cancel and terms with an even power of a double. So the surviving terms have a⁰, a², ..., a¹⁰⁰: 51 terms." },


]
},

{
title: "UNIT 05 : BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: COEFFICIENT AND EXPANSION PROBLEMS ",
    questions: [

/* ======================= SECTION C: COEFFICIENT AND EXPANSION PROBLEMS (9) ======================= */

{ q: "The coefficient of x¹⁰ in (1 + x)²⁰ + x(1 + x)¹⁹ + x²(1 + x)¹⁸ + ... + x²⁰ is",
  o: ["184756", "705432", "352716", "167960"], a: 2,
  s: "This is a geometric series with ratio x/(1 + x) and 21 terms. Its sum is [(1 + x)²¹ − x²¹]/[(1 + x) − x] = (1 + x)²¹ − x²¹. The coefficient of x¹⁰ is C(21, 10) = 352716." },

{ q: "The coefficient of x¹⁰ in the expansion of (1 + x)¹⁰(1 − x)¹⁰ is",
  o: ["252", "0", "−210", "−252"], a: 3,
  s: "(1 + x)¹⁰(1 − x)¹⁰ = (1 − x²)¹⁰. The coefficient of x¹⁰ = (x²)⁵ term is C(10, 5)(−1)⁵ = −252." },

{ q: "The coefficient of x⁴ in the expansion of (1 + x + x²)⁴ is",
  o: ["16", "21", "19", "24"], a: 2,
  s: "We need x-powers adding to 4 from four factors. Let n₁ factors give x and n₂ factors give x², with n₁ + 2n₂ = 4. (n₁, n₂) = (4, 0): 1 way. (2, 1): 4!/(1! 2! 1!) = 12 ways. (0, 2): 4!/(2! 2!) = 6 ways. Total = 1 + 12 + 6 = 19." },

{ q: "The sum of all the coefficients in the expansion of (1 + x − 3x²)²¹⁶³ is",
  o: ["1", "0", "−3", "−1"], a: 3,
  s: "The sum of the coefficients is the value at x = 1: (1 + 1 − 3)²¹⁶³ = (−1)²¹⁶³ = −1." },

{ q: "The sum of the coefficients of the odd powers of x in the expansion of (1 + 2x)⁶ is",
  o: ["365", "364", "728", "729"], a: 1,
  s: "Let f(x) = (1 + 2x)⁶. f(1) = 729 and f(−1) = 1. The sum of the odd-power coefficients is [f(1) − f(−1)]/2 = (729 − 1)/2 = 364." },

{ q: "The coefficient of x³ in (1 + x)⁵ + (1 + x)⁶ + ... + (1 + x)¹⁰ is",
  o: ["330", "210", "325", "120"], a: 2,
  s: "The coefficient is C(5, 3) + C(6, 3) + ... + C(10, 3). By the hockey-stick identity this is C(11, 4) − C(5, 4) = 330 − 5 = 325." },

{ q: "The sum of all the coefficients in the expansion of (3x − 2y)¹⁰ is",
  o: ["9765625", "0", "1024", "1"], a: 3,
  s: "Put x = y = 1: the sum of the coefficients is (3 − 2)¹⁰ = 1." },

{ q: "The coefficient of x²⁰ in the expansion of (1 + x²)⁴⁰ (x² + 2 + 1/x²)⁻⁵ is",
  o: ["27405", "30045015", "142506", "593775"], a: 2,
  s: "x² + 2 + 1/x² = (x + 1/x)² = (x² + 1)²/x². So (x² + 2 + 1/x²)⁻⁵ = x¹⁰/(1 + x²)¹⁰. The product is x¹⁰ (1 + x²)³⁰. The coefficient of x²⁰ is the coefficient of x¹⁰ in (1 + x²)³⁰, which is C(30, 5) = 142506." },

{ q: "The number of distinct terms in the expansion of (1 + x + x²)¹⁰, after combining like powers of x, is",
  o: ["21", "11", "20", "31"], a: 0,
  s: "The powers of x range from 0 to 20, and every power in between occurs with a positive coefficient. So there are 21 terms." },

]
},

{
title: "UNIT 05 : BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: PROPERTIES AND SUMS OF BINOMIAL COEFFICIENTS ",
    questions: [

/* ======================= SECTION D: PROPERTIES AND SUMS OF BINOMIAL COEFFICIENTS (14) ======================= */

{ q: "The value of C(10, 0) + C(10, 2) + C(10, 4) + ... + C(10, 10) is",
  o: ["1024", "512", "1023", "256"], a: 1,
  s: "The sum of the coefficients at even positions equals the sum at odd positions, and together they total 2¹⁰. So each is 2¹⁰/2 = 2⁹ = 512." },

{ q: "The value of Σ (r = 0 to 10) r² · C(10, r) is",
  o: ["5120", "28160", "10240", "14080"], a: 1,
  s: "Write r² = r(r − 1) + r. Σ r(r − 1) C(n, r) = n(n − 1)2^(n−2) and Σ r C(n, r) = n·2^(n−1). With n = 10: 90 × 256 + 10 × 512 = 23040 + 5120 = 28160." },

{ q: "The value of C₀ + 2C₁ + 3C₂ + ... + 11C₁₀, where Cᵣ = C(10, r), is",
  o: ["5120", "3072", "6144", "11264"], a: 2,
  s: "Σ (r + 1) Cᵣ = Σ r Cᵣ + Σ Cᵣ = n·2^(n−1) + 2ⁿ. With n = 10: 10 × 512 + 1024 = 6144." },

{ q: "The value of C(6, 0)² + C(6, 1)² + ... + C(6, 6)² is",
  o: ["720", "462", "729", "924"], a: 3,
  s: "Σ C(n, r)² = C(2n, n) (compare the coefficient of xⁿ in (1 + x)ⁿ(1 + x)ⁿ). So the sum is C(12, 6) = 924." },

{ q: "The value of Σ (r = 0 to 10) (−1)ʳ C(10, r)/(r + 1) is",
  o: ["1/10", "0", "11", "1/11"], a: 3,
  s: "Σ (−1)ʳ C(n, r) xʳ = (1 − x)ⁿ. Integrate from 0 to 1: Σ (−1)ʳ C(n, r)/(r + 1) = ∫₀¹ (1 − x)ⁿ dx = 1/(n + 1). With n = 10 this is 1/11." },

{ q: "The value of Σ (r = 0 to 9) C(9, r)/(r + 1) is",
  o: ["511/5", "1023/10", "1024/10", "512/9"], a: 1,
  s: "Σ C(n, r) xʳ = (1 + x)ⁿ. Integrate from 0 to 1: Σ C(n, r)/(r + 1) = (2^(n+1) − 1)/(n + 1). With n = 9: (1024 − 1)/10 = 1023/10." },

{ q: "The value of C(21, 1) + C(21, 2) + ... + C(21, 10) is",
  o: ["2²¹ − 1", "2²⁰", "2²⁰ − 1", "2¹⁹ − 1"], a: 2,
  s: "C(21, r) = C(21, 21 − r), so C(21, 0) + ... + C(21, 10) is half of the total 2²¹, i.e. 2²⁰. Removing C(21, 0) = 1 gives 2²⁰ − 1." },

{ q: "The value of C(5, 0)C(5, 2) + C(5, 1)C(5, 3) + C(5, 2)C(5, 4) + C(5, 3)C(5, 5) is",
  o: ["252", "210", "100", "120"], a: 3,
  s: "By Vandermonde's identity, Σ C(n, i) C(n, i + r) = C(2n, n + r). With n = 5, r = 2: C(10, 7) = 120. (Direct: 10 + 50 + 50 + 10 = 120.)" },

{ q: "If Σ (r = 0 to 25) ⁵⁰Cᵣ · ⁵⁰⁻ʳC₂₅₋ᵣ = K · ⁵⁰C₂₅, then K equals",
  o: ["2²⁵ − 1", "2²⁴", "2²⁵", "2⁵⁰"], a: 2,
  s: "⁵⁰Cᵣ · ⁵⁰⁻ʳC₂₅₋ᵣ counts choosing r people and then 25 − r more from the rest; equivalently choose the 25 first and then r of them: = ⁵⁰C₂₅ · ²⁵Cᵣ. So the sum is ⁵⁰C₂₅ Σ ²⁵Cᵣ = ⁵⁰C₂₅ · 2²⁵, giving K = 2²⁵." },

{ q: "The value of Σ (r = 1 to 10) r · C(10, r)/C(10, r − 1) is",
  o: ["55", "45", "66", "110"], a: 0,
  s: "C(10, r)/C(10, r − 1) = (11 − r)/r. So r × that = 11 − r. Σ (r = 1 to 10) (11 − r) = 10 + 9 + ... + 1 = 55." },

{ q: "The value of C(100, 0) + C(100, 2) + C(100, 4) + ... + C(100, 100) is",
  o: ["2¹⁰⁰", "2⁹⁸", "2⁵⁰", "2⁹⁹"], a: 3,
  s: "The sum of the even-position coefficients is half of 2¹⁰⁰, so it is 2⁹⁹." },

{ q: "The value of C(10, 0) − C(10, 1) + C(10, 2) − C(10, 3) + C(10, 4) is",
  o: ["210", "126", "252", "84"], a: 1,
  s: "The alternating partial sum Σ (j = 0 to r) (−1)ʲ C(n, j) = (−1)ʳ C(n − 1, r). With n = 10, r = 4: C(9, 4) = 126. (Direct: 1 − 10 + 45 − 120 + 210 = 126.)" },

{ q: "The value of Σ (r = 0 to 10) (−1)ʳ [C(10, r)]² is",
  o: ["−252", "252", "0", "−210"], a: 0,
  s: "For even n = 2m, Σ (−1)ʳ C(n, r)² = (−1)^m C(2m, m). With n = 10, m = 5: (−1)⁵ C(10, 5) = −252." },

{ q: "The value of C(100, 0) − C(100, 2) + C(100, 4) − ... + C(100, 100) is",
  o: ["2⁵⁰", "0", "−2⁵¹", "−2⁵⁰"], a: 3,
  s: "Consider (1 + i)¹⁰⁰ = Σ C(100, r) iʳ. Only even r contribute to the real part, and i²ʲ = (−1)ʲ, so Re (1 + i)¹⁰⁰ = Σ (j = 0 to 50) (−1)ʲ C(100, 2j), which is the required sum. Also (1 + i)¹⁰⁰ = (√2 e^(iπ/4))¹⁰⁰ = 2⁵⁰ e^(i25π) = −2⁵⁰. So the required sum is −2⁵⁰." },


]
},

{
title: "UNIT 05 : BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: APPLICATIONS (REMAINDERS, LAST DIGITS, APPROXIMATION, INTEGRAL PARTS) ",
    questions: [
/* ======================= SECTION E: APPLICATIONS (REMAINDERS, LAST DIGITS, APPROXIMATION, INTEGRAL PARTS) (13) ======================= */

{ q: "The remainder when 7¹⁰³ is divided by 25 is",
  o: ["7", "1", "24", "18"], a: 3,
  s: "7² = 49 = 50 − 1 ≡ −1 (mod 25). So 7¹⁰³ = 7 · (7²)⁵¹ ≡ 7 · (−1)⁵¹ = −7 ≡ 18 (mod 25)." },

{ q: "The remainder when 2²⁰²⁷ is divided by 9 is",
  o: ["5", "2", "7", "8"], a: 0,
  s: "2⁶ = 64 = 63 + 1 ≡ 1 (mod 9). Since 2027 = 6 × 337 + 5, 2²⁰²⁷ ≡ 2⁵ = 32 ≡ 5 (mod 9)." },

{ q: "The remainder when 3¹⁰⁰ is divided by 7 is",
  o: ["1", "2", "4", "6"], a: 2,
  s: "3⁶ = 729 = 7 × 104 + 1 ≡ 1 (mod 7). Since 100 = 6 × 16 + 4, 3¹⁰⁰ ≡ 3⁴ = 81 ≡ 4 (mod 7)." },

{ q: "The remainder when 5⁹⁹ is divided by 13 is",
  o: ["5", "8", "12", "1"], a: 1,
  s: "5⁴ = 625 = 13 × 48 + 1 ≡ 1 (mod 13). Since 99 = 4 × 24 + 3, 5⁹⁹ ≡ 5³ = 125 = 13 × 9 + 8 ≡ 8 (mod 13)." },

{ q: "The last two digits of 7²⁰²⁵ are",
  o: ["01", "49", "43", "07"], a: 3,
  s: "7⁴ = 2401 ≡ 1 (mod 100). Since 2025 = 4 × 506 + 1, 7²⁰²⁵ ≡ 7¹ = 7 (mod 100). The last two digits are 07." },

{ q: "The last two digits of 11²⁵ are",
  o: ["51", "11", "01", "25"], a: 0,
  s: "11ⁿ = (1 + 10)ⁿ = 1 + 10n + C(n, 2)·100 + ... ≡ 1 + 10n (mod 100). With n = 25: 1 + 250 = 251 ≡ 51 (mod 100)." },

{ q: "Which of the following is true?",
  o: ["101⁵⁰ = 100⁵⁰ + 99⁵⁰", "101⁵⁰ < 100⁵⁰ + 99⁵⁰", "The numbers cannot be compared without a calculator", "101⁵⁰ > 100⁵⁰ + 99⁵⁰"], a: 3,
  s: "101⁵⁰ − 99⁵⁰ = (100 + 1)⁵⁰ − (100 − 1)⁵⁰ = 2[C(50, 1)100⁴⁹ + C(50, 3)100⁴⁷ + ...] > 2 × 50 × 100⁴⁹ = 100⁵⁰. Hence 101⁵⁰ > 100⁵⁰ + 99⁵⁰." },

{ q: "The value of (1.01)¹⁰ correct to three decimal places is",
  o: ["1.100", "1.104", "1.105", "1.110"], a: 2,
  s: "(1 + 0.01)¹⁰ = 1 + 10(0.01) + 45(0.01)² + 120(0.01)³ + ... = 1 + 0.1 + 0.0045 + 0.00012 + ... ≈ 1.10462. To three decimal places this is 1.105." },

{ q: "The value of (√2 + 1)⁶ + (√2 − 1)⁶ is",
  o: ["99", "196", "200", "198"], a: 3,
  s: "(√2 + 1)⁶ + (√2 − 1)⁶ = 2[C(6, 0)(√2)⁶ + C(6, 2)(√2)⁴ + C(6, 4)(√2)² + C(6, 6)] = 2[8 + 15 × 4 + 15 × 2 + 1] = 2 × 99 = 198." },

{ q: "The greatest integer not exceeding (√3 + 1)⁶ is",
  o: ["416", "415", "414", "413"], a: 1,
  s: "(√3 + 1)⁶ + (√3 − 1)⁶ = 2[C(6,0)(√3)⁶ + C(6,2)(√3)⁴ + C(6,4)(√3)² + C(6,6)] = 2[27 + 135 + 45 + 1] = 416. Since 0 < (√3 − 1)⁶ < 1, (√3 + 1)⁶ = 416 − (√3 − 1)⁶ lies strictly between 415 and 416. The greatest integer is 415." },

{ q: "If R = (5√5 + 11)³¹ and f = R − [R], where [R] is the greatest integer not exceeding R, then R · f equals",
  o: ["4³²", "4³¹", "2³¹", "1"], a: 1,
  s: "Let G = (11 − 5√5)³¹ = −(5√5 − 11)³¹. Since 0 < 5√5 − 11 < 1, G lies in (−1, 0). R + G = 2[terms with even powers of 5√5] is an integer, so R = I − G with I an integer and −G ∈ (0, 1), so f = −G = (5√5 − 11)³¹. Then R · f = [(5√5 + 11)(5√5 − 11)]³¹ = (125 − 121)³¹ = 4³¹." },

{ q: "The greatest positive integer that divides 3²ⁿ⁺² − 8n − 9 for all n ∈ ℕ is",
  o: ["64", "32", "128", "16"], a: 0,
  s: "3²ⁿ⁺² = 9ⁿ⁺¹ = (1 + 8)ⁿ⁺¹ = 1 + 8(n + 1) + 64(...) , so 3²ⁿ⁺² − 8n − 9 is divisible by 64 for all n. For n = 1 the value is 81 − 17 = 64 exactly, so no larger number can divide all the values. The answer is 64." },

{ q: "For every positive integer n, (√3 + 1)²ⁿ + (√3 − 1)²ⁿ is",
  o: ["an even positive integer", "an odd integer", "an irrational number", "a negative number"], a: 0,
  s: "(√3 + 1)²ⁿ + (√3 − 1)²ⁿ = (4 + 2√3)ⁿ + (4 − 2√3)ⁿ = 2[ C(n,0)4ⁿ + C(n,2)4ⁿ⁻²(2√3)² + ... ]. All the irrational terms cancel, leaving 2 times an integer. So it is an even integer, and it is positive since both parts are positive." },
]
},



{
title: "UNIT 06 : SEQUENCE AND SERIES ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: ARITHMETIC PROGRESSION ",
    questions: [

/* ======================= SECTION A: ARITHMETIC PROGRESSION (15) ======================= */

{ q: "The sum of the first n terms of an A.P. is Sₙ = 3n² + 5n. The 20th term is",
  o: ["125", "122", "116", "118"], a: 1,
  s: "aₙ = Sₙ − Sₙ₋₁ = (3n² + 5n) − [3(n − 1)² + 5(n − 1)] = 6n + 2. So a₂₀ = 6(20) + 2 = 122." },

{ q: "The sum of the first 20 terms of the A.P. 3, 7, 11, 15, ... is",
  o: ["800", "840", "860", "820"], a: 3,
  s: "Sₙ = (n/2)[2a + (n − 1)d] with a = 3, d = 4, n = 20: S₂₀ = 10[6 + 76] = 820." },

{ q: "In an A.P., the sum of the first 10 terms equals the sum of the first 25 terms. The sum of the first 35 terms is",
  o: ["350", "35", "0", "−35"], a: 2,
  s: "S₂₅ − S₁₀ = 0 means a₁₁ + a₁₂ + ... + a₂₅ = 0, which is 15 terms with middle term a₁₈, so a₁₈ = 0. Then S₃₅ = 35 × a₁₈ = 0 (the middle term of 35 terms is the 18th)." },

{ q: "In an A.P., the 5th term is 12 and the 12th term is 5. The 17th term is",
  o: ["−1", "1", "0", "17"], a: 2,
  s: "a + 4d = 12 and a + 11d = 5, so 7d = −7, d = −1 and a = 16. Then a₁₇ = 16 + 16(−1) = 0." },

{ q: "The number of terms common to the two A.P.'s 3, 7, 11, ..., 407 and 2, 9, 16, ..., 709 is",
  o: ["13", "14", "15", "16"], a: 1,
  s: "The common terms form an A.P. with common difference lcm(4, 7) = 28. The first common term is 23 (23 = 3 + 5·4 = 2 + 3·7). The last is at most 407 (the smaller of 407 and 709). 23 + 28k ≤ 407 gives k ≤ 13.7, so k = 0, 1, ..., 13: 14 terms." },

{ q: "The sum of all three-digit numbers that are divisible by 7 is",
  o: ["70336", "70735", "70434", "71239"], a: 0,
  s: "The numbers are 105, 112, ..., 994. The number of terms is (994 − 105)/7 + 1 = 128. Sum = (128/2)(105 + 994) = 64 × 1099 = 70336." },

{ q: "The sum of all the integers from 1 to 500 that are divisible by 3 or 5 is",
  o: ["58333", "58418", "66668", "41583"], a: 1,
  s: "Multiples of 3: 3 to 498, 166 terms, sum = 166 × 501/2 = 41583. Multiples of 5: 5 to 500, 100 terms, sum = 100 × 505/2 = 25250. Multiples of 15: 15 to 495, 33 terms, sum = 33 × 510/2 = 8415. By inclusion-exclusion: 41583 + 25250 − 8415 = 58418." },

{ q: "The sum of the 9 arithmetic means inserted between 3 and 33 is",
  o: ["180", "171", "162", "144"], a: 2,
  s: "The A.P. has 11 terms with a = 3 and l = 33, so d = 30/10 = 3. The sum of the 9 means equals 9 times their average, which is the average of 3 and 33, i.e. 18. Sum = 9 × 18 = 162." },

{ q: "Three numbers in A.P. have sum 21 and product 315. The largest of them is",
  o: ["11", "9", "8", "12"], a: 1,
  s: "Let the numbers be a − d, a, a + d. The sum 3a = 21 gives a = 7. The product 7(49 − d²) = 315 gives d² = 4. So the numbers are 5, 7, 9 and the largest is 9." },

{ q: "The sums of the first n terms of two A.P.'s are in the ratio (3n + 8) : (7n + 15). The ratio of their 12th terms is",
  o: ["3 : 7", "8 : 15", "7 : 16", "7 : 15"], a: 2,
  s: "The ratio of the mth terms is the ratio of sums with n replaced by 2m − 1. For m = 12, n = 23: (3 × 23 + 8)/(7 × 23 + 15) = 77/176 = 7/16." },

{ q: "The value of 1² − 2² + 3² − 4² + ... + 19² − 20² is",
  o: ["−210", "−200", "210", "−420"], a: 0,
  s: "Pair the terms: (2k − 1)² − (2k)² = −(4k − 1). Sum over k = 1 to 10: −(4 × 55 − 10) = −210." },

{ q: "In an A.P. a₁ + a₅ + a₁₀ + a₁₅ + a₂₀ + a₂₄ = 225. The sum of its first 24 terms is",
  o: ["450", "900", "675", "1800"], a: 1,
  s: "In an A.P., terms equidistant from the ends have equal sums: a₁ + a₂₄ = a₅ + a₂₀ = a₁₀ + a₁₅. So 3(a₁ + a₂₄) = 225 and a₁ + a₂₄ = 75. S₂₄ = (24/2)(a₁ + a₂₄) = 12 × 75 = 900." },

{ q: "The maximum possible sum of the terms of the A.P. 40, 37, 34, ... is",
  o: ["280", "287", "294", "300"], a: 1,
  s: "The terms are positive while 40 − 3(n − 1) > 0, i.e. n ≤ 14 (a₁₄ = 1 and a₁₅ = −2). The maximum sum is S₁₄ = (14/2)(80 − 39) = 7 × 41 = 287." },

{ q: "If the sum of n terms of an A.P. is Sₙ = nP + n(n − 1)Q/2, then its common difference is",
  o: ["P", "Q", "P + Q", "2Q"], a: 1,
  s: "Sₙ = (n/2)[2a + (n − 1)d] = na + n(n − 1)d/2. Comparing with nP + n(n − 1)Q/2: a = P and d = Q." },

{ q: "If a, b, c are in A.P., then 1/(√b + √c), 1/(√c + √a), 1/(√a + √b) are in",
  o: ["A.P.", "G.P.", "H.P.", "none of these progressions"], a: 0,
  s: "Rationalising, 1/(√c + √a) − 1/(√b + √c) = (√b − √a)/[(√c + √a)(√b + √c)] and 1/(√a + √b) − 1/(√c + √a) = (√c − √b)/[(√a + √b)(√c + √a)]. Cross-multiplying, these two differences are equal exactly when (√b − √a)(√a + √b) = (√c − √b)(√b + √c), i.e. b − a = c − b, which is true because a, b, c are in A.P. (Numerical check with a, b, c = 1, 5, 9 gives equal differences 0.059.)" },

]
},

{
title: "UNIT 06 : SEQUENCE AND SERIES ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: GEOMETRIC PROGRESSION ",
    questions: [


/* ======================= SECTION B: GEOMETRIC PROGRESSION (16) ======================= */

{ q: "The 8th term of the G.P. 2, 6, 18, 54, ... is",
  o: ["2187", "13122", "1458", "4374"], a: 3,
  s: "a = 2, r = 3. a₈ = 2 × 3⁷ = 2 × 2187 = 4374." },

{ q: "The sum of the first 10 terms of the G.P. 3, 6, 12, ... is",
  o: ["3072", "3069", "1533", "6141"], a: 1,
  s: "Sₙ = a(rⁿ − 1)/(r − 1) = 3(2¹⁰ − 1)/1 = 3 × 1023 = 3069." },

{ q: "The second term of a G.P. is 24 and the fifth term is 81. The eighth term is",
  o: ["243/2", "729/8", "6561/8", "2187/8"], a: 3,
  s: "r³ = 81/24 = 27/8, so r = 3/2. The 8th term is a₅ · r³ = 81 × 27/8 = 2187/8." },

{ q: "Three numbers in G.P. have sum 14 and product 64. The largest of them is",
  o: ["16", "6", "12", "8"], a: 3,
  s: "Let the numbers be a/r, a, ar. The product a³ = 64 gives a = 4. The sum 4/r + 4 + 4r = 14 gives 2r² − 5r + 2 = 0, so r = 2 or 1/2. The numbers are 2, 4, 8, and the largest is 8." },

{ q: "The sum of the three geometric means inserted between 1 and 256 is",
  o: ["64", "96", "84", "128"], a: 2,
  s: "The G.P. has 5 terms with a = 1 and a₅ = 256, so r⁴ = 256 and r = 4 (taking positive r). The means are 4, 16, 64, with sum 84." },

{ q: "The first term of an infinite G.P. is a and |r| < 1. If its sum is 15 and the sum of the squares of its terms is 45, then a equals",
  o: ["10", "3", "5", "9"], a: 2,
  s: "a/(1 − r) = 15 and a²/(1 − r²) = 45. Dividing the second by the first: a/(1 + r) = 3. So a = 3(1 + r) = 15(1 − r), giving 18r = 12 and r = 2/3. Then a = 3 × 5/3 = 5." },

{ q: "The first term of an infinite G.P. is a. Its sum is 4 and the sum of the cubes of its terms is 192. Then a equals",
  o: ["4", "3", "8", "6"], a: 3,
  s: "a/(1 − r) = 4 gives a = 4(1 − r). The sum of cubes is a³/(1 − r³) = 192, so 64(1 − r)³/(1 − r³) = 192, i.e. (1 − r)²/(1 + r + r²) = 3. This gives 2r² + 5r + 2 = 0, so r = −1/2 (r = −2 is rejected since |r| < 1). Then a = 4 × 3/2 = 6." },

{ q: "The value of the recurring decimal 0.363636... as a fraction is",
  o: ["4/11", "36/100", "9/25", "1/3"], a: 0,
  s: "0.36 + 0.0036 + 0.000036 + ... is an infinite G.P. with a = 0.36 and r = 0.01. Sum = 0.36/(1 − 0.01) = 36/99 = 4/11." },

{ q: "The sum 7 + 77 + 777 + ... to n terms is",
  o: ["7(10ⁿ − 1)/81", "7(10ⁿ⁺¹ − 9n)/81", "(10ⁿ⁺¹ − 9n − 10)/81", "7(10ⁿ⁺¹ − 9n − 10)/81"], a: 3,
  s: "7 + 77 + 777 + ... = (7/9)[9 + 99 + 999 + ...] = (7/9)[(10 − 1) + (10² − 1) + ... + (10ⁿ − 1)] = (7/9)[10(10ⁿ − 1)/9 − n] = 7(10ⁿ⁺¹ − 9n − 10)/81. (Check n = 1: 7(100 − 19)/81 = 7.)" },

{ q: "If x = 1 + a + a² + ... and y = 1 + b + b² + ... (|a|, |b| < 1), then 1 + ab + a²b² + ... equals",
  o: ["xy/(x + y + 1)", "xy/(x + y − 1)", "xy/(x + y)", "(x + y − 1)/(xy)"], a: 1,
  s: "x = 1/(1 − a) gives a = (x − 1)/x, and similarly b = (y − 1)/y. Then 1 + ab + a²b² + ... = 1/(1 − ab) = 1/[1 − (x − 1)(y − 1)/(xy)] = xy/(xy − (xy − x − y + 1)) = xy/(x + y − 1)." },

{ q: "If a, b, c are in G.P. and a^(1/x) = b^(1/y) = c^(1/z), then x, y, z are in",
  o: ["G.P.", "H.P.", "A.P.", "none of these progressions"], a: 2,
  s: "Let a^(1/x) = b^(1/y) = c^(1/z) = k. Then a = kˣ, b = kʸ, c = kᶻ. Since b² = ac, k²ʸ = kˣ⁺ᶻ, so 2y = x + z, which means x, y, z are in A.P." },

{ q: "The smallest positive integer n for which 2 + 4 + 8 + ... + 2ⁿ exceeds 1000 is",
  o: ["8", "9", "10", "11"], a: 1,
  s: "The sum is 2(2ⁿ − 1) = 2ⁿ⁺¹ − 2. For n = 8 it is 510 and for n = 9 it is 1022. So the smallest n with sum > 1000 is 9." },

{ q: "In a G.P. the first term is −3 and the fourth term is the square of the second term. The seventh term is",
  o: ["−2187", "2187", "−729", "729"], a: 0,
  s: "ar³ = (ar)² gives ar³ = a²r², so r = a = −3 (a, r ≠ 0). Then a₇ = ar⁶ = (−3)(−3)⁶ = (−3)(729) = −2187." },

{ q: "For a G.P. of n positive terms with sum S, product P and sum of reciprocals R, P² equals",
  o: ["(R/S)ⁿ", "SR", "(S/R)ⁿ", "nS/R"], a: 2,
  s: "Let the first and last terms be a and l, so every pair of terms equidistant from the ends has product k = al. Then P² = kⁿ. Also R = Σ 1/(arⁱ) = S/k, so k = S/R. Hence P² = (S/R)ⁿ." },

{ q: "A ball is dropped from a height of 100 m. Each time it hits the ground it rebounds to 3/5 of the height from which it fell. The total distance it travels before coming to rest is",
  o: ["300 m", "500 m", "400 m", "250 m"], a: 2,
  s: "First fall: 100 m. After that, each rebound goes up and down: 2 × 60 + 2 × 36 + 2 × 21.6 + ... = 2 × 60/(1 − 3/5) = 2 × 150 = 300 m. Total = 100 + 300 = 400 m." },

{ q: "Three distinct positive numbers a, b, c are in G.P., and a, 2b, 3c are in A.P. The common ratio of the G.P. is",
  o: ["1/2", "1/3", "3", "2/3"], a: 1,
  s: "Let b = ar and c = ar². A.P. condition: a + 3c = 2(2b), so 1 + 3r² = 4r, i.e. 3r² − 4r + 1 = 0, giving r = 1 or r = 1/3. r = 1 would make the numbers equal, so r = 1/3." },

]
},

{
title: "UNIT 06 : SEQUENCE AND SERIES ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: HARMONIC PROGRESSION, MEANS AND INEQUALITIES ",
    questions: [


/* ======================= SECTION C: HARMONIC PROGRESSION, MEANS AND INEQUALITIES (11) ======================= */

{ q: "The A.M. of two positive numbers is 10 and their G.M. is 8. Their H.M. is",
  o: ["32/5", "6", "9", "16/5"], a: 0,
  s: "For two numbers, G² = A × H. So H = G²/A = 64/10 = 32/5." },

{ q: "The 5th term of an H.P. is 1/10 and the 11th term is 1/25. The 16th term is",
  o: ["1/35", "1/40", "3/80", "2/75"], a: 3,
  s: "The reciprocals form an A.P. with t₅ = 10 and t₁₁ = 25, so 6d = 15 and d = 5/2. t₁₆ = 10 + 11 × 5/2 = 75/2. The 16th term of the H.P. is 2/75." },

{ q: "The A.M. of two positive numbers is 5 and their H.M. is 16/5. Their G.M. is",
  o: ["4", "8/5", "5/4", "3"], a: 0,
  s: "G² = A × H = 5 × 16/5 = 16, so G = 4." },

{ q: "If a, b, c are in H.P., then (a − b)/(b − c) equals",
  o: ["c/a", "a/b", "a/c", "b/c"], a: 2,
  s: "1/a, 1/b, 1/c are in A.P., so 1/b − 1/a = 1/c − 1/b, i.e. (a − b)/(ab) = (b − c)/(bc). Hence (a − b)/(b − c) = (ab)/(bc) = a/c." },

{ q: "If the ratio of the A.M. to the G.M. of two positive numbers is 5 : 4, then the ratio of the numbers is",
  o: ["5 : 4", "3 : 2", "4 : 1", "9 : 1"], a: 2,
  s: "Let the numbers be a and b, with t = a/b. (a + b)/(2√(ab)) = (t + 1)/(2√t) = 5/4 gives 4t − 10√t + 4 = 0, so √t = 2 or 1/2. Hence t = 4 or 1/4, and the ratio of the numbers is 4 : 1." },

{ q: "The A.M. of two positive numbers exceeds their G.M. by 2, and their G.M. exceeds their H.M. by 8/5. The larger number is",
  o: ["20", "16", "18", "12"], a: 1,
  s: "Let G = g. Then A = g + 2 and H = g − 8/5. Using G² = AH: g² = (g + 2)(g − 8/5) = g² + (2/5)g − 16/5, so g = 8. Then A = 10, so a + b = 20 and ab = 64. The numbers are 16 and 4." },

{ q: "If a, b, c are in A.P., p is the A.M. of a and b, and q is the A.M. of b and c, then p, b, q are in",
  o: ["G.P.", "H.P.", "A.P.", "none of these progressions"], a: 2,
  s: "p + q = (a + 2b + c)/2. Since a + c = 2b, p + q = (2b + 2b)/2 = 2b. So b is the A.M. of p and q, and p, b, q are in A.P." },

{ q: "For real x, the minimum value of 2ˣ + 2¹⁻ˣ is",
  o: ["2", "2√2", "4", "√2"], a: 1,
  s: "By A.M. ≥ G.M.: 2ˣ + 2¹⁻ˣ ≥ 2√(2ˣ · 2¹⁻ˣ) = 2√2. Equality holds when 2ˣ = 2¹⁻ˣ, i.e. x = 1/2." },

{ q: "For positive reals a, b, c, the minimum value of (a + b + c)(1/a + 1/b + 1/c) is",
  o: ["3", "9", "6", "12"], a: 1,
  s: "By A.M. ≥ G.M., a + b + c ≥ 3(abc)^(1/3) and 1/a + 1/b + 1/c ≥ 3(abc)^(−1/3). Multiplying gives ≥ 9, with equality when a = b = c." },

{ q: "If x, y > 0 and x + y = 5, the maximum value of x²y³ is",
  o: ["72", "125", "100", "108"], a: 3,
  s: "Write x/2 + x/2 + y/3 + y/3 + y/3 = 5. By A.M. ≥ G.M. on these five terms: 5/5 = 1 ≥ [(x/2)²(y/3)³]^(1/5). So x²y³ ≤ 4 × 27 = 108, with equality when x/2 = y/3 = 1, i.e. x = 2, y = 3." },

{ q: "If a, b, c > 0 and a + b + c = 12, the maximum value of abc is",
  o: ["48", "72", "96", "64"], a: 3,
  s: "By A.M. ≥ G.M.: (a + b + c)/3 ≥ (abc)^(1/3), so abc ≤ 4³ = 64, with equality at a = b = c = 4." },


]
},

{
title: "UNIT 06 : SEQUENCE AND SERIES ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: SPECIAL SERIES AND TELESCOPING SUMS  ",
    questions: [

/* ======================= SECTION D: SPECIAL SERIES AND TELESCOPING SUMS (14) ======================= */

{ q: "The sum 1² + 2² + 3² + ... + 15² is",
  o: ["1225", "1240", "1255", "1200"], a: 1,
  s: "Σ r² = n(n + 1)(2n + 1)/6 = 15 × 16 × 31/6 = 1240." },

{ q: "The sum 1³ + 2³ + ... + 10³ is",
  o: ["3300", "385", "3000", "3025"], a: 3,
  s: "Σ r³ = [n(n + 1)/2]² = 55² = 3025." },

{ q: "The sum 1² + 3² + 5² + ... + 19² (the first 10 odd squares) is",
  o: ["1330", "1210", "1540", "1445"], a: 0,
  s: "The sum of the first n odd squares is n(2n − 1)(2n + 1)/3. With n = 10: 10 × 19 × 21/3 = 1330." },

{ q: "The sum 1·2 + 2·3 + 3·4 + ... + 20·21 is",
  o: ["3003", "3100", "3240", "3080"], a: 3,
  s: "Σ r(r + 1) = n(n + 1)(n + 2)/3 = 20 × 21 × 22/3 = 3080." },

{ q: "The sum 1·2·3 + 2·3·4 + ... + 10·11·12 is",
  o: ["4290", "3960", "4560", "4620"], a: 0,
  s: "Σ r(r + 1)(r + 2) = n(n + 1)(n + 2)(n + 3)/4 = 10 × 11 × 12 × 13/4 = 4290." },

{ q: "The sum of the first 10 terms of 1·3 + 3·5 + 5·7 + ... is",
  o: ["1540", "1485", "1650", "1530"], a: 3,
  s: "The rth term is (2r − 1)(2r + 1) = 4r² − 1. Sum = 4 × [10 × 11 × 21/6] − 10 = 4 × 385 − 10 = 1530." },

{ q: "The sum 1 + (1 + 2) + (1 + 2 + 3) + ... up to 15 terms is",
  o: ["680", "1240", "720", "600"], a: 0,
  s: "The rth term is r(r + 1)/2. Sum = (1/2)[Σr² + Σr] = n(n + 1)(n + 2)/6 = 15 × 16 × 17/6 = 680." },

{ q: "The sum of the first 10 terms of the series 1 + 3 + 7 + 15 + 31 + ... is",
  o: ["2036", "2046", "2047", "2025"], a: 0,
  s: "The kth term is 2ᵏ − 1. Sum = (2 + 4 + ... + 2¹⁰) − 10 = 2(2¹⁰ − 1) − 10 = 2046 − 10 = 2036." },

{ q: "The sum Σ (r = 1 to 99) 1/(r(r + 1)) is",
  o: ["100/101", "98/99", "99/100", "1"], a: 2,
  s: "1/(r(r + 1)) = 1/r − 1/(r + 1). The sum telescopes to 1 − 1/100 = 99/100." },

{ q: "The sum 1/(1·3) + 1/(3·5) + 1/(5·7) + ... up to 10 terms is",
  o: ["9/19", "10/19", "1/2", "10/21"], a: 3,
  s: "1/((2r − 1)(2r + 1)) = (1/2)[1/(2r − 1) − 1/(2r + 1)]. The sum telescopes to (1/2)[1 − 1/21] = (1/2)(20/21) = 10/21." },

{ q: "The sum Σ (r = 1 to ∞) 1/(r(r + 1)(r + 2)) is",
  o: ["1/2", "1/4", "1/6", "1/3"], a: 1,
  s: "1/(r(r + 1)(r + 2)) = (1/2)[1/(r(r + 1)) − 1/((r + 1)(r + 2))]. The sum telescopes to (1/2) × 1/(1 × 2) = 1/4." },

{ q: "The sum Σ (r = 1 to 24) 1/(√r + √(r + 1)) is",
  o: ["5", "24", "4", "√24"], a: 2,
  s: "Rationalise: 1/(√r + √(r + 1)) = √(r + 1) − √r. The sum telescopes to √25 − √1 = 4." },

{ q: "The sum of the infinite series 1 + 3/2 + 5/4 + 7/8 + ... is",
  o: ["6", "4", "5", "8"], a: 0,
  s: "The kth term is (2k − 1)/2^(k−1). Let S = Σ (2k − 1)/2^(k−1). Then S/2 = Σ (2k − 1)/2ᵏ, and S − S/2 = 1 + 2(1/2 + 1/4 + 1/8 + ...) = 1 + 2 = 3, so S = 6." },

{ q: "The sum Σ (r = 1 to 10) r · 2ʳ is",
  o: ["18434", "20482", "9217", "10240"], a: 0,
  s: "Σ (r = 1 to n) r·2ʳ = (n − 1)2ⁿ⁺¹ + 2. With n = 10: 9 × 2048 + 2 = 18434." },


]
},


{
title: "UNIT 06 : SEQUENCE AND SERIES ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: METHOD OF DIFFERENCES AND MIXED SERIES ",
    questions: [

/* ======================= SECTION E: METHOD OF DIFFERENCES AND MIXED SERIES (7) ======================= */

{ q: "The sum 1/(1·2·3) + 1/(2·3·4) + ... + 1/(10·11·12) is",
  o: ["1/4", "8/33", "65/264", "21/88"], a: 2,
  s: "1/(r(r + 1)(r + 2)) = (1/2)[1/(r(r + 1)) − 1/((r + 1)(r + 2))]. The sum telescopes to (1/2)[1/2 − 1/(11 × 12)] = (1/2)(1/2 − 1/132) = (1/2)(65/132) = 65/264." },

{ q: "The sum of the first 9 terms of the series 1³/1 + (1³ + 2³)/(1 + 3) + (1³ + 2³ + 3³)/(1 + 3 + 5) + ... is",
  o: ["96", "81", "100", "105"], a: 0,
  s: "The nth term is [n(n + 1)/2]²/n² = (n + 1)²/4. Sum over n = 1 to 9 = (1/4)(2² + 3² + ... + 10²) = (1/4)(385 − 1) = 96." },

{ q: "The sum of the first 9 terms of the series 3 + 7 + 13 + 21 + 31 + ... is",
  o: ["330", "345", "339", "360"], a: 2,
  s: "The differences 4, 6, 8, 10, ... form an A.P., so the nth term is n² + n + 1 (check: 3, 7, 13). Sum = Σ n² + Σ n + 9 = 285 + 45 + 9 = 339." },

{ q: "The 20th term of the series 2×4 + 4×6 + 6×8 + ... is",
  o: ["1680", "1600", "1640", "1760"], a: 0,
  s: "The nth term is (2n)(2n + 2) = 4n(n + 1). For n = 20: 4 × 20 × 21 = 1680." },

{ q: "The sum of the series 2 + 6 + 18 + 54 + ... up to the term 4374 is",
  o: ["6561", "6558", "13122", "6560"], a: 3,
  s: "This is a G.P. with a = 2 and r = 3. 2 × 3^(k−1) = 4374 gives 3^(k−1) = 2187 = 3⁷, so there are 8 terms. Sum = 2(3⁸ − 1)/2 = 6560." },

{ q: "The sum of the first n terms of an A.P. satisfies S₂ₙ = 3Sₙ. Then S₃ₙ/Sₙ equals",
  o: ["4", "8", "9", "6"], a: 3,
  s: "Sₙ = (n/2)[2a + (n − 1)d]. S₂ₙ = 3Sₙ gives 2(2a + (2n − 1)d) = 3(2a + (n − 1)d), so (n + 1)d = 2a. Then S₃ₙ/Sₙ = 3[2a + (3n − 1)d]/[2a + (n − 1)d] = 3[(n + 1) + (3n − 1)]d/[(n + 1) + (n − 1)]d = 3 × 4n/(2n) = 6." },

{ q: "If 1² + 2² + ... + n² = 285, then n equals",
  o: ["9", "8", "10", "11"], a: 0,
  s: "n(n + 1)(2n + 1)/6 = 285. For n = 9: 9 × 10 × 19/6 = 285. Since the sum increases with n, n = 9." },
]
},



{
title: "UNIT 07 : LIMIT, CONTINUITY AND DIFFERENTIABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: LIMITS ",
    questions: [

/* ======================= SECTION A: LIMITS (27) ======================= */


{ q: "lim (x → 0) (1 − cos 2x)/x² equals",
  o: ["2", "1", "4", "1/2"], a: 0,
  s: "1 − cos 2x = 2 sin² x. So the limit is lim 2(sin x/x)² = 2." },

{ q: "lim (x → 0) (eˣ − 1 − x)/x² equals",
  o: ["1", "1/2", "0", "2"], a: 1,
  s: "Using eˣ = 1 + x + x²/2 + ..., eˣ − 1 − x = x²/2 + higher terms, so the limit is 1/2." },

{ q: "lim (x → 0) (tan x − sin x)/x³ equals",
  o: ["1/2", "1", "1/3", "0"], a: 0,
  s: "tan x − sin x = sin x (1 − cos x)/cos x = sin x · 2 sin²(x/2)/cos x. Dividing by x³: (sin x/x) · 2(sin(x/2)/x)²/cos x → 1 · 2 · (1/2)² · 1 = 1/2." },

{ q: "lim (x → 0) (sin x − x cos x)/x³ equals",
  o: ["1/6", "1/2", "1/3", "1"], a: 2,
  s: "sin x = x − x³/6 + ... and x cos x = x − x³/2 + ... So sin x − x cos x = (−1/6 + 1/2)x³ + ... = x³/3 + ..., and the limit is 1/3." },

{ q: "lim (x → 0) (2 sin x − sin 2x)/x³ equals",
  o: ["2", "1/2", "1", "0"], a: 2,
  s: "2 sin x = 2x − x³/3 + ... and sin 2x = 2x − 8x³/6 + ... = 2x − 4x³/3 + ... The difference is (−1/3 + 4/3)x³ = x³, so the limit is 1." },

{ q: "lim (x → 0) (1 − cos x cos 2x cos 3x)/x² equals",
  o: ["14", "6", "7", "7/2"], a: 2,
  s: "For small x, cos kx ≈ 1 − k²x²/2. So cos x cos 2x cos 3x ≈ 1 − (1 + 4 + 9)x²/2 = 1 − 7x². Then 1 − (...) = 7x² and the limit is 7." },

{ q: "lim (x → 0) (e^(x²) − cos x)/x² equals",
  o: ["1/2", "3/2", "1", "2"], a: 1,
  s: "e^(x²) = 1 + x² + ... and cos x = 1 − x²/2 + ... So the numerator is (1 + 1/2)x² + ... = 3x²/2 + ..., and the limit is 3/2." },

{ q: "lim (x → 0) (√(1 + x) − √(1 − x))/x equals",
  o: ["1/2", "1", "2", "0"], a: 1,
  s: "Rationalise: (√(1 + x) − √(1 − x))/x = 2x/[x(√(1 + x) + √(1 − x))] = 2/(√(1 + x) + √(1 − x)) → 2/2 = 1." },

{ q: "lim (x → ∞) [√(x² + x) − x] equals",
  o: ["1", "1/2", "0", "∞"], a: 1,
  s: "Rationalise: √(x² + x) − x = x/(√(x² + x) + x) = 1/(√(1 + 1/x) + 1) → 1/2." },

{ q: "lim (x → 2) (x⁷ − 128)/(x − 2) equals",
  o: ["448", "128", "224", "896"], a: 0,
  s: "This is the derivative of x⁷ at x = 2: 7 · 2⁶ = 448." },

{ q: "lim (x → 0) (3ˣ − 2ˣ)/x equals",
  o: ["ln(3/2)", "ln 6", "ln 3 + ln 2", "1"], a: 0,
  s: "(3ˣ − 2ˣ)/x = (3ˣ − 1)/x − (2ˣ − 1)/x → ln 3 − ln 2 = ln(3/2)." },

{ q: "lim (x → 0) (e^(3x) − 1)/ln(1 + 2x) equals",
  o: ["2/3", "1", "3", "3/2"], a: 3,
  s: "(e^(3x) − 1)/(3x) → 1 and ln(1 + 2x)/(2x) → 1. So the limit is (3x)/(2x) = 3/2." },

{ q: "lim (x → 0) (1 + 2x)^(1/x) equals",
  o: ["e", "e²", "e^(1/2)", "1"], a: 1,
  s: "(1 + 2x)^(1/x) = [(1 + 2x)^(1/(2x))]² → e²." },

{ q: "lim (x → ∞) (1 + 3/x)^(2x) equals",
  o: ["e³", "e²", "e⁶", "e^(3/2)"], a: 2,
  s: "(1 + 3/x)^(2x) = [(1 + 3/x)^(x/3)]⁶ → e⁶." },

{ q: "lim (x → ∞) ((x + 3)/(x + 1))^(x + 2) equals",
  o: ["e²", "e", "e⁴", "1"], a: 0,
  s: "(x + 3)/(x + 1) = 1 + 2/(x + 1). So the expression is (1 + 2/(x + 1))^(x + 2) → e^(2 · (x + 2)/(x + 1)) → e²." },

{ q: "lim (x → 0) (cos x)^(1/x²) equals",
  o: ["e^(−1/2)", "e^(1/2)", "e⁻¹", "1"], a: 0,
  s: "This is of the form 1^∞. The limit is exp[lim (cos x − 1)/x²] = exp(−1/2)." },

{ q: "lim (x → 0) (sin x / x)^(1/x²) equals",
  o: ["e^(1/6)", "e^(−1/3)", "1", "e^(−1/6)"], a: 3,
  s: "1^∞ form. The exponent is lim (sin x/x − 1)/x² = lim (−x²/6)/x² = −1/6. So the limit is e^(−1/6)." },

{ q: "lim (x → π/2) (1 − sin x)/(π/2 − x)² equals",
  o: ["1", "1/4", "1/2", "2"], a: 2,
  s: "Put t = π/2 − x, so sin x = cos t. Then (1 − cos t)/t² → 1/2." },

{ q: "lim (x → 0) sin(π cos² x)/x² equals",
  o: ["π/2", "2π", "1", "π"], a: 3,
  s: "π cos² x = π − π sin² x, so sin(π cos² x) = sin(π sin² x). Then sin(π sin² x)/x² = [sin(π sin² x)/(π sin² x)] · π (sin x/x)² → π." },

{ q: "lim (x → ∞) (x + sin x)/(x − cos x) equals",
  o: ["0", "1", "∞", "does not exist"], a: 1,
  s: "Divide by x: (1 + sin x/x)/(1 − cos x/x). Since |sin x| ≤ 1 and |cos x| ≤ 1, sin x/x → 0 and cos x/x → 0. The limit is 1." },

{ q: "lim (x → 0) x² sin(1/x)/sin x equals",
  o: ["1", "does not exist", "0", "∞"], a: 2,
  s: "x² sin(1/x)/sin x = x sin(1/x) · (x/sin x). Since |x sin(1/x)| ≤ |x| → 0 (squeeze theorem) and x/sin x → 1, the limit is 0." },

{ q: "lim (n → ∞) (1² + 2² + ... + n²)/n³ equals",
  o: ["1/3", "1/2", "1", "0"], a: 0,
  s: "1² + ... + n² = n(n + 1)(2n + 1)/6. Dividing by n³: (1 + 1/n)(2 + 1/n)/6 → 2/6 = 1/3." },

{ q: "lim (x → 0⁺) x · ⌊1/x⌋, where ⌊·⌋ is the greatest integer function, equals",
  o: ["0", "∞", "1", "does not exist"], a: 2,
  s: "1/x − 1 < ⌊1/x⌋ ≤ 1/x. Multiply by x > 0: 1 − x < x⌊1/x⌋ ≤ 1. By the squeeze theorem the limit is 1." },

{ q: "The value of lim (x → 0) (e^(1/x) − 1)/(e^(1/x) + 1) is",
  o: ["1", "−1", "does not exist", "0"], a: 2,
  s: "As x → 0⁺, e^(1/x) → ∞ and the ratio → 1. As x → 0⁻, e^(1/x) → 0 and the ratio → (0 − 1)/(0 + 1) = −1. The one-sided limits differ, so the limit does not exist." },

{ q: "lim (x → 1) (xˣ − x)/(x − 1 − ln x) equals",
  o: ["2", "1", "0", "e"], a: 0,
  s: "Both numerator and denominator → 0. Differentiate: numerator derivative xˣ(1 + ln x) − 1, denominator derivative 1 − 1/x; both → 0 at x = 1. Differentiate again: numerator: xˣ(1 + ln x)² + xˣ/x → 1 + 1 = 2; denominator: 1/x² → 1. The limit is 2/1 = 2." },

{ q: "lim (x → 0) [(1 + x)^(1/x) − e]/x equals",
  o: ["e/2", "e", "0", "−e/2"], a: 3,
  s: "(1 + x)^(1/x) = exp[ln(1 + x)/x] = exp[1 − x/2 + x²/3 − ...] = e · exp(−x/2 + x²/3 − ...) = e(1 − x/2 + ...). So [(1 + x)^(1/x) − e]/x → −e/2." },

{ q: "If lim (x → 0) (a eˣ − b cos x + c e⁻ˣ)/(x sin x) = 2, then (a, b, c) equals",
  o: ["(1, 2, 1)", "(2, 1, 2)", "(1, 1, 1)", "(2, 4, 2)"], a: 0,
  s: "Expand: numerator = (a − b + c) + (a − c)x + (a/2 + b/2 + c/2)x² + ... and x sin x ≈ x². For a finite limit: a − b + c = 0 and a − c = 0, so c = a and b = 2a. The limit is (a + b + c)/2 = 4a/2 = 2a = 2, so a = 1, b = 2, c = 1." },

]
},

{
title: "UNIT 07 : LIMIT, CONTINUITY AND DIFFERENTIABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: CONTINUITY ",
    questions: [

/* ======================= SECTION B: CONTINUITY (12) ======================= */

{ q: "The function f(x) = sin 3x / x for x ≠ 0 and f(0) = k is continuous at x = 0. Then k equals",
  o: ["1", "0", "3", "1/3"], a: 2,
  s: "Continuity needs f(0) = lim (x → 0) sin 3x/x = 3. So k = 3." },

{ q: "The function f(x) = (1 − cos 4x)/x² for x ≠ 0 and f(0) = k is continuous at x = 0. Then k equals",
  o: ["4", "8", "16", "1/2"], a: 1,
  s: "1 − cos 4x = 2 sin² 2x, so (1 − cos 4x)/x² = 2 (sin 2x/x)² → 2 × 4 = 8. Hence k = 8." },

{ q: "The function f(x) = (x² − 9)/(x − 3) for x ≠ 3 and f(3) = k is continuous at x = 3. Then k equals",
  o: ["6", "3", "9", "0"], a: 0,
  s: "For x ≠ 3, f(x) = x + 3, so lim (x → 3) f(x) = 6. Continuity needs k = 6." },

{ q: "The function f(x) = 5 for x ≤ 2, f(x) = ax + b for 2 < x < 10, f(x) = 21 for x ≥ 10 is continuous everywhere. Then (a, b) equals",
  o: ["(2, 1)", "(1, 2)", "(2, 3)", "(3, 2)"], a: 0,
  s: "Continuity at x = 2: 2a + b = 5. Continuity at x = 10: 10a + b = 21. Subtracting: 8a = 16, so a = 2 and b = 1." },

{ q: "The function f(x) = ⌊x⌋ + ⌊−x⌋, where ⌊·⌋ is the greatest integer function, is discontinuous at",
  o: ["no point", "x = 0 only", "every real number", "every integer"], a: 3,
  s: "If x is not an integer, ⌊x⌋ + ⌊−x⌋ = −1. At every integer, the value is 0. So the function equals −1 everywhere except at integers where it equals 0; the limit at an integer is −1 but the value is 0. It is discontinuous at every integer." },

{ q: "The number of points in the interval (1, 3) at which f(x) = ⌊x²⌋ is discontinuous is",
  o: ["6", "8", "9", "7"], a: 3,
  s: "For x in (1, 3), x² takes values in (1, 9). ⌊x²⌋ jumps when x² passes an integer: 2, 3, 4, 5, 6, 7, 8. That is 7 points: x = √2, √3, 2, √5, √6, √7, √8." },

{ q: "For f(x) = 1/(1 − x), the points of discontinuity of f(f(f(x))) are",
  o: ["x = 1 only", "x = 0 and x = 1", "x = 0 only", "x = 0, 1 and 2"], a: 1,
  s: "f(x) is undefined at x = 1. f(f(x)) is undefined when f(x) = 1, i.e. x = 0. f(f(f(x))) is undefined when f(f(x)) = 1; but f(f(x)) = (x − 1)/x never equals 1. So the function is defined except at x = 0 and x = 1, and these are its points of discontinuity." },

{ q: "The function f(x) = (√(1 + kx) − √(1 − kx))/x for −1 ≤ x < 0 and f(x) = (2x + 1)/(x − 1) for 0 ≤ x ≤ 1 is continuous at x = 0. Then k equals",
  o: ["1", "−1", "2", "−2"], a: 1,
  s: "Left limit: (√(1 + kx) − √(1 − kx))/x = 2k/(√(1 + kx) + √(1 − kx)) → k. Also f(0) = 1/(−1) = −1 and the right limit is −1. Continuity needs k = −1." },

{ q: "The function f(x) = ⌊x⌋ + √({x}), where {x} is the fractional part of x, is continuous",
  o: ["for all real x", "for all x except integers", "only at integers", "nowhere"], a: 0,
  s: "At an integer n: the right limit is n + 0 = n, and the left limit is (n − 1) + √1 = n. Also f(n) = n + 0 = n. At non-integers both parts are continuous. So f is continuous everywhere." },

{ q: "The function f(x) = e^(1/x)/(1 + e^(1/x)) for x ≠ 0 and f(0) = 0 is",
  o: ["continuous at x = 0", "continuous from the right but not from the left at x = 0", "continuous from the left but not from the right at x = 0", "discontinuous from both sides at x = 0"], a: 2,
  s: "As x → 0⁻, e^(1/x) → 0, so f → 0 = f(0): continuous from the left. As x → 0⁺, e^(1/x) → ∞, so f → 1 ≠ f(0): not continuous from the right." },

{ q: "The function f(x) = sin(πx/2) for |x| ≤ 1 and f(x) = |x − 1| for |x| > 1 has how many points of discontinuity?",
  o: ["0", "2", "1", "3"], a: 1,
  s: "At x = 1: f(1) = sin(π/2) = 1 and the left limit is 1, but the right limit is |1 − 1| = 0. Discontinuous. At x = −1: f(−1) = −1 and the right limit is −1, but the left limit is |−1 − 1| = 2. Discontinuous. Everywhere else f is continuous. So there are 2 points." },

{ q: "The function f(x) = (1 − tan x)/(4x − π) for x ≠ π/4 is made continuous at x = π/4 by defining f(π/4) =",
  o: ["−1/2", "1/2", "−1", "1/4"], a: 0,
  s: "Put h = x − π/4. Then 1 − tan x = 1 − (1 + tan h)/(1 − tan h) = −2 tan h/(1 − tan h), and 4x − π = 4h. So f → −2h/(4h) = −1/2 as h → 0." },


]
},

{
title: "UNIT 07 : LIMIT, CONTINUITY AND DIFFERENTIABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: DIFFERENTIABILITY ",
    questions: [

/* ======================= SECTION C: DIFFERENTIABILITY (12) ======================= */

{ q: "The number of points where f(x) = |x − 1| + |x − 2| + |x − 3| is not differentiable is",
  o: ["1", "3", "2", "6"], a: 1,
  s: "Each term |x − a| has a corner at x = a, and the three corners are at different points with no cancellation. So f is not differentiable at x = 1, 2, 3: 3 points." },

{ q: "The number of points in the interval (−2π, 2π) at which f(x) = |sin x| is not differentiable is",
  o: ["2", "4", "5", "3"], a: 3,
  s: "|sin x| has corners where sin x = 0, i.e. x = nπ. In (−2π, 2π) these are x = −π, 0, π: 3 points." },

{ q: "The number of points in the interval (0, 2π) at which f(x) = |sin x| + |cos x| is not differentiable is",
  o: ["2", "3", "4", "5"], a: 1,
  s: "Corners occur where sin x = 0 or cos x = 0, since the other term is differentiable there and cannot cancel the corner. In (0, 2π): x = π/2, π, 3π/2. That is 3 points." },

{ q: "The number of points in the interval (0, 2π) at which f(x) = max{sin x, cos x} is not differentiable is",
  o: ["1", "2", "3", "4"], a: 1,
  s: "f switches between sin x and cos x where sin x = cos x, i.e. tan x = 1. In (0, 2π): x = π/4 and 5π/4. At each point the two pieces cross with different slopes, so f has a corner. So there are 2 points." },

{ q: "Let f(x) = x² sin(1/x) for x ≠ 0 and f(0) = 0. Then f′(0) equals",
  o: ["0", "1", "does not exist", "1/2"], a: 0,
  s: "f′(0) = lim (h → 0) [h² sin(1/h) − 0]/h = lim h sin(1/h) = 0, by the squeeze theorem since |h sin(1/h)| ≤ |h|." },

{ q: "Let f(x) = x sin(1/x) for x ≠ 0 and f(0) = 0. Then at x = 0, f is",
  o: ["continuous but not differentiable", "differentiable with f′(0) = 0", "differentiable with f′(0) = 1", "not continuous"], a: 0,
  s: "Continuity: |x sin(1/x)| ≤ |x| → 0 = f(0). Differentiability: [f(h) − f(0)]/h = sin(1/h), which oscillates between −1 and 1 as h → 0 and has no limit. So f is continuous but not differentiable at 0." },

{ q: "For f(x) = x|x|, which statement is correct at x = 0?",
  o: ["both f′(0) and f″(0) exist", "f′(0) does not exist", "f′(0) exists but f″(0) does not exist", "neither f′(0) nor f″(0) exists"], a: 2,
  s: "f(x) = x² for x ≥ 0 and −x² for x < 0, so f′(x) = 2|x|, which gives f′(0) = 0. But f′(x) = 2|x| has a corner at 0, so f″(0) does not exist." },

{ q: "The function f(x) = x² for x ≤ 1 and f(x) = ax + b for x > 1 is differentiable at x = 1. Then (a, b) equals",
  o: ["(1, 0)", "(2, 1)", "(−2, 3)", "(2, −1)"], a: 3,
  s: "Continuity at 1: 1 = a + b. Differentiability at 1: the left derivative 2x = 2 must equal the right derivative a, so a = 2. Then b = −1." },

{ q: "The set of points where f(x) = (x² − 1)|x² − 3x + 2| is not differentiable is",
  o: ["{1}", "{2}", "{1, 2}", "the empty set"], a: 1,
  s: "x² − 3x + 2 = (x − 1)(x − 2) and x² − 1 = (x − 1)(x + 1). Near x = 1, f = (x − 1)|x − 1| · (x + 1)|x − 2|, and (x − 1)|x − 1| is differentiable at 1, so f is differentiable at 1. At x = 2, x² − 1 = 3 ≠ 0, so the corner of |x − 2| remains. Not differentiable only at x = 2." },

{ q: "If f is differentiable at x = 2 with f(2) = 4 and f′(2) = 6, then lim (x → 2) [x f(2) − 2 f(x)]/(x − 2) equals",
  o: ["8", "−4", "−12", "−8"], a: 3,
  s: "x f(2) − 2f(x) = (x − 2) f(2) + 2f(2) − 2f(x). Dividing by (x − 2): f(2) − 2 [f(x) − f(2)]/(x − 2) → f(2) − 2f′(2) = 4 − 12 = −8." },

{ q: "If f is differentiable at 0 with f(0) = 0 and f′(0) = 3, then lim (x → 0) [f(5x) − f(3x)]/x equals",
  o: ["3", "6", "15", "9"], a: 1,
  s: "[f(5x) − f(3x)]/x = 5 · f(5x)/(5x) − 3 · f(3x)/(3x) → 5f′(0) − 3f′(0) = 2f′(0) = 6." },

{ q: "A function f satisfies f(x + y) = f(x) f(y) for all x, y, with f(5) = 2 and f′(0) = 3. Then f′(5) equals",
  o: ["6", "3", "5", "2/3"], a: 0,
  s: "f(0) = 1 (since f(5) = f(5)f(0) ≠ 0). Then f′(5) = lim [f(5 + h) − f(5)]/h = f(5) lim [f(h) − 1]/h = f(5) f′(0) = 2 × 3 = 6." },


]
},

{
title: "UNIT 07 : LIMIT, CONTINUITY AND DIFFERENTIABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: DIFFERENTIATION (CHAIN RULE, IMPLICIT, PARAMETRIC, LOGARITHMIC, HIGHER ORDER) ",
    questions: [

/* ============= SECTION D: DIFFERENTIATION (CHAIN RULE, IMPLICIT, PARAMETRIC, LOGARITHMIC, HIGHER ORDER) (17) ======== */

{ q: "d/dx (xˣ) at x = 1 equals",
  o: ["0", "e", "2", "1"], a: 3,
  s: "Let y = xˣ. ln y = x ln x, so y′/y = ln x + 1 and y′ = xˣ(1 + ln x). At x = 1: 1 × (1 + 0) = 1." },

{ q: "d/dx [tan⁻¹((1 + x)/(1 − x))] equals",
  o: ["1/(1 + x²)", "2/(1 + x²)", "1/(1 − x²)", "1/(2(1 + x²))"], a: 0,
  s: "tan⁻¹((1 + x)/(1 − x)) = tan⁻¹ 1 + tan⁻¹ x = π/4 + tan⁻¹ x (for x < 1). Its derivative is 1/(1 + x²)." },

{ q: "For |x| < 1/√2, d/dx [sin⁻¹(2x√(1 − x²))] equals",
  o: ["1/√(1 − x²)", "2/√(1 − x²)", "2/(1 + x²)", "−2/√(1 − x²)"], a: 1,
  s: "Put x = sin θ with |θ| < π/4. Then 2x√(1 − x²) = sin 2θ, so the function is 2θ = 2 sin⁻¹ x. Its derivative is 2/√(1 − x²)." },

{ q: "d/dx [tan⁻¹((√(1 + x²) − 1)/x)] equals",
  o: ["1/(1 + x²)", "1/2", "1/(2(1 + x²))", "x/(1 + x²)"], a: 2,
  s: "Put x = tan θ. (√(1 + x²) − 1)/x = (sec θ − 1)/tan θ = tan(θ/2). So the function is θ/2 = (1/2) tan⁻¹ x, with derivative 1/(2(1 + x²))." },

{ q: "If x³ + y³ = 3xy, then dy/dx equals",
  o: ["(x² − y)/(y² − x)", "(y + x²)/(y² + x)", "(y − x²)/(y² − x)", "(x − y²)/(y − x²)"], a: 2,
  s: "Differentiate: 3x² + 3y² y′ = 3y + 3x y′. So y′(y² − x) = y − x², giving y′ = (y − x²)/(y² − x)." },

{ q: "If x = a(θ − sin θ) and y = a(1 − cos θ), then d²y/dx² at θ = π/2 equals",
  o: ["1/a", "−2/a", "−1/(4a)", "−1/a"], a: 3,
  s: "dy/dx = [a sin θ]/[a(1 − cos θ)] = cot(θ/2). d²y/dx² = d/dθ[cot(θ/2)]/(dx/dθ) = [−(1/2)csc²(θ/2)]/[2a sin²(θ/2)] = −1/(4a sin⁴(θ/2)). At θ = π/2: sin⁴(π/4) = 1/4, so the value is −1/a." },

{ q: "If y = x^(sin x), then dy/dx at x = π/2 equals",
  o: ["π/2", "1", "0", "2/π"], a: 1,
  s: "ln y = sin x ln x, so y′ = x^(sin x)[cos x ln x + sin x/x]. At x = π/2: (π/2)¹[0 + 1/(π/2)] = (π/2)(2/π) = 1." },

{ q: "If y = (x + 1)(x² + 1)(x⁴ + 1), then dy/dx at x = 1 equals",
  o: ["16", "8", "28", "24"], a: 2,
  s: "At x = 1, y = 2 × 2 × 2 = 8. By logarithmic differentiation, y′/y = 1/(x + 1) + 2x/(x² + 1) + 4x³/(x⁴ + 1) = 1/2 + 1 + 2 = 7/2. So y′ = 8 × 7/2 = 28." },

{ q: "If y = x^(x^x), then dy/dx at x = 1 equals",
  o: ["0", "2", "e", "1"], a: 3,
  s: "ln y = xˣ ln x. Differentiating: y′/y = xˣ(1 + ln x) ln x + xˣ/x. At x = 1: y = 1, and y′/y = 1·(1 + 0)·0 + 1 = 1. So y′ = 1." },

{ q: "If y = eˣ cos x, then y″ − 2y′ + 2y equals",
  o: ["y", "2y", "0", "−y"], a: 2,
  s: "y′ = eˣ(cos x − sin x) and y″ = eˣ(−2 sin x) = −2eˣ sin x. Then y″ − 2y′ + 2y = eˣ[−2 sin x − 2 cos x + 2 sin x + 2 cos x] = 0." },

{ q: "If y = sin(ln x), then x²y″ + xy′ + y equals",
  o: ["0", "y", "−y", "2y"], a: 0,
  s: "y′ = cos(ln x)/x and y″ = [−sin(ln x) − cos(ln x)]/x². So x²y″ = −sin(ln x) − cos(ln x) and xy′ = cos(ln x). The sum x²y″ + xy′ + y = −sin(ln x) − cos(ln x) + cos(ln x) + sin(ln x) = 0." },

{ q: "d/dx [ln √((1 + sin x)/(1 − sin x))] equals",
  o: ["cos x", "sec x tan x", "cosec x", "sec x"], a: 3,
  s: "(1 + sin x)/(1 − sin x) = (1 + sin x)²/cos² x, so the expression is ln[(1 + sin x)/cos x] = ln(sec x + tan x) (for cos x > 0). Its derivative is sec x." },

{ q: "Let g be the inverse of f(x) = x³ + 3x + 2. Then g′(2) equals",
  o: ["3", "1/2", "2", "1/3"], a: 3,
  s: "f(0) = 2, so g(2) = 0. g′(2) = 1/f′(g(2)) = 1/f′(0). f′(x) = 3x² + 3, so f′(0) = 3 and g′(2) = 1/3." },

{ q: "The derivative of tan⁻¹ x with respect to sin⁻¹ x is",
  o: ["(1 + x²)/√(1 − x²)", "1/√(1 − x²)", "√(1 − x²)/(1 + x²)", "√(1 − x²)"], a: 2,
  s: "d(tan⁻¹ x)/d(sin⁻¹ x) = [1/(1 + x²)]/[1/√(1 − x²)] = √(1 − x²)/(1 + x²)." },

{ q: "If f(x) = logₓ(ln x), then f′(e) equals",
  o: ["e", "1", "0", "1/e"], a: 3,
  s: "f(x) = ln(ln x)/ln x. f′(x) = [(1/(x ln x)) · ln x − ln(ln x) · (1/x)]/(ln x)². At x = e (ln e = 1, ln ln e = 0): [1/e − 0]/1 = 1/e." },

{ q: "If y = sec(tan⁻¹ x), then dy/dx at x = 1 equals",
  o: ["√2", "1", "1/√2", "1/2"], a: 2,
  s: "sec(tan⁻¹ x) = √(1 + x²). Its derivative is x/√(1 + x²), which at x = 1 equals 1/√2." },

{ q: "If y = x³ ln x, then d²y/dx² at x = e equals",
  o: ["6e", "5e", "e", "11e"], a: 3,
  s: "y′ = 3x² ln x + x², and y″ = 6x ln x + 3x + 2x = 6x ln x + 5x. At x = e: 6e + 5e = 11e." },

]
},

{
title: "UNIT 07 : LIMIT, CONTINUITY AND DIFFERENTIABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: ROLLE'S AND LAGRANGE'S MEAN VALUE THEOREMS ",
    questions: [

/* ======================= SECTION E: ROLLE'S AND LAGRANGE'S MEAN VALUE THEOREMS (10) ======================= */

{ q: "For f(x) = (x − 1)(x − 2)(x − 3) on [1, 3], the value(s) of c in (1, 3) given by Rolle's theorem are",
  o: ["2 ± √3", "2 ± 1/√3", "2 ± 1/3", "2 only"], a: 1,
  s: "f(1) = f(3) = 0. f′(x) = 3x² − 12x + 11 = 0 gives x = [12 ± √(144 − 132)]/6 = 2 ± √12/6 = 2 ± 1/√3. Both lie in (1, 3)." },

{ q: "For f(x) = x³ on [1, 3], the value of c in Lagrange's mean value theorem is",
  o: ["2", "13/3", "√13", "√(13/3)"], a: 3,
  s: "[f(3) − f(1)]/(3 − 1) = 26/2 = 13. Setting f′(c) = 3c² = 13 gives c = √(13/3) ≈ 2.08, which lies in (1, 3)." },

{ q: "For f(x) = √x on [1, 4], the value of c in Lagrange's mean value theorem is",
  o: ["5/2", "2", "9/4", "3/2"], a: 2,
  s: "[f(4) − f(1)]/3 = (2 − 1)/3 = 1/3. Setting f′(c) = 1/(2√c) = 1/3 gives √c = 3/2 and c = 9/4." },

{ q: "For f(x) = ln x on [1, e], the value of c in Lagrange's mean value theorem is",
  o: ["e/2", "(e + 1)/2", "e − 1", "1/(e − 1)"], a: 2,
  s: "[f(e) − f(1)]/(e − 1) = 1/(e − 1). Setting f′(c) = 1/c = 1/(e − 1) gives c = e − 1 ≈ 1.72, which lies in (1, e)." },

{ q: "For f(x) = sin x/eˣ on [0, π], the value of c in Rolle's theorem is",
  o: ["π/4", "π/2", "π/3", "3π/4"], a: 0,
  s: "f(0) = f(π) = 0. f′(x) = (cos x − sin x)/eˣ = 0 gives tan x = 1, so c = π/4 in (0, π)." },

{ q: "Rolle's theorem is applicable to f(x) = x³ − 6x² + ax + b on [1, 3] with c = 2 + 1/√3. Then a equals",
  o: ["6", "−11", "12", "11"], a: 3,
  s: "Rolle's theorem requires f(1) = f(3): 1 − 6 + a + b = 27 − 54 + 3a + b, i.e. a − 5 = 3a − 27, so a = 11. (Check: f′(x) = 3x² − 12x + 11 = 0 gives x = 2 ± 1/√3.)" },

{ q: "Which of the following functions satisfies all the conditions of Rolle's theorem on [−1, 1]?",
  o: ["|x|", "1/x²", "tan x", "x² − 1"], a: 3,
  s: "|x| is not differentiable at 0. 1/x² is not defined (not continuous) at 0. tan x is continuous and differentiable on [−1, 1] but tan(−1) ≠ tan(1). x² − 1 is continuous and differentiable with f(−1) = f(1) = 0, so it satisfies Rolle's theorem." },

{ q: "Which of the following functions satisfies the conditions of Lagrange's mean value theorem on [0, 4]?",
  o: ["1/(x − 2)", "√x", "|x − 2|", "⌊x⌋"], a: 1,
  s: "LMVT needs continuity on [0, 4] and differentiability on (0, 4). 1/(x − 2) is discontinuous at 2. |x − 2| is not differentiable at 2. ⌊x⌋ is discontinuous at 1, 2, 3, 4. √x is continuous on [0, 4] and differentiable on (0, 4)." },

{ q: "A differentiable function f satisfies f(0) = −3 and f′(x) ≤ 5 for all real x. The greatest possible value of f(2) is",
  o: ["7", "10", "5", "2"], a: 0,
  s: "By the mean value theorem, f(2) − f(0) = 2f′(c) for some c in (0, 2), and 2f′(c) ≤ 10. So f(2) ≤ −3 + 10 = 7." },

{ q: "A differentiable function f satisfies 2 ≤ f′(x) ≤ 4 for all x in [1, 4] and f(1) = 3. Then f(4) lies in the interval",
  o: ["[6, 12]", "[9, 15]", "[5, 11]", "[9, 12]"], a: 1,
  s: "By the mean value theorem, f(4) − f(1) = 3f′(c) with 2 ≤ f′(c) ≤ 4, so 6 ≤ f(4) − 3 ≤ 12, i.e. 9 ≤ f(4) ≤ 15." },

]
},


{
title: "UNIT 08 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: INDEFINITE INTEGRALS (SUBSTITUTION, PARTS, PARTIAL FRACTIONS) ",
    questions: [

/* ======================= SECTION A: INDEFINITE INTEGRALS (SUBSTITUTION, PARTS, PARTIAL FRACTIONS) (22) ======================= */

{ q: "∫ dx/(x(x⁷ + 1)) equals",
  o: ["(1/7) ln(x⁷/(x⁷ + 1)) + C", "7 ln(x⁷/(x⁷ + 1)) + C", "(1/7) ln((x⁷ + 1)/x⁷) + C", "(1/7) ln(x⁷ + 1) + C"], a: 0,
  s: "Write 1/(x(x⁷ + 1)) = x⁶/(x⁷(x⁷ + 1)). Put t = x⁷, so dt = 7x⁶ dx. The integral becomes (1/7)∫ dt/(t(t + 1)) = (1/7) ln(t/(t + 1)) + C = (1/7) ln(x⁷/(x⁷ + 1)) + C." },

{ q: "∫ eˣ(1 + x)/cos²(x eˣ) dx equals",
  o: ["cot(x eˣ) + C", "sec(x eˣ) + C", "eˣ tan x + C", "tan(x eˣ) + C"], a: 3,
  s: "Put u = x eˣ, so du = (1 + x)eˣ dx. The integral becomes ∫ sec² u du = tan u + C = tan(x eˣ) + C." },

{ q: "∫ eˣ (1/x − 1/x²) dx equals",
  o: ["eˣ ln x + C", "−eˣ/x + C", "eˣ/x + C", "eˣ/x² + C"], a: 2,
  s: "Use ∫ eˣ[f(x) + f′(x)] dx = eˣ f(x) + C with f(x) = 1/x, f′(x) = −1/x². The result is eˣ/x + C." },

{ q: "∫ eˣ (sin x + cos x) dx equals",
  o: ["eˣ cos x + C", "eˣ(sin x − cos x)/2 + C", "eˣ sin x cos x + C", "eˣ sin x + C"], a: 3,
  s: "With f(x) = sin x, f′(x) = cos x, so ∫ eˣ[f + f′] dx = eˣ f = eˣ sin x + C." },

{ q: "∫ dx/(sin²x cos²x) equals",
  o: ["tan x + cot x + C", "tan x − cot x + C", "cot x − tan x + C", "sec x − cosec x + C"], a: 1,
  s: "1/(sin²x cos²x) = (sin²x + cos²x)/(sin²x cos²x) = sec²x + cosec²x. Integrating: tan x − cot x + C." },

{ q: "∫ cos 2x/(sin²x cos²x) dx equals",
  o: ["cot x + tan x + C", "−cot x − tan x + C", "tan x − cot x + C", "−cot x + tan x + C"], a: 1,
  s: "cos 2x = cos²x − sin²x, so the integrand is cosec²x − sec²x. Integrating: −cot x − tan x + C." },

{ q: "∫ dx/(1 + cos x) equals",
  o: ["cot(x/2) + C", "2 tan(x/2) + C", "−cot(x/2) + C", "tan(x/2) + C"], a: 3,
  s: "1 + cos x = 2cos²(x/2), so the integrand is (1/2) sec²(x/2). Integrating: tan(x/2) + C." },

{ q: "∫ dx/(x(x² + 1)) equals",
  o: ["ln|x| + (1/2) ln(x² + 1) + C", "ln|x| − ln(x² + 1) + C", "tan⁻¹ x + ln|x| + C", "ln|x| − (1/2) ln(x² + 1) + C"], a: 3,
  s: "By partial fractions, 1/(x(x² + 1)) = 1/x − x/(x² + 1). Integrating: ln|x| − (1/2) ln(x² + 1) + C." },

{ q: "∫ x³ e^(x²) dx equals",
  o: ["(1/2) e^(x²)(x² + 1) + C", "(1/2) e^(x²)(x² − 1) + C", "e^(x²)(x² − 1) + C", "(1/4) x⁴ e^(x²) + C"], a: 1,
  s: "Put u = x², du = 2x dx. The integral is (1/2)∫ u eᵘ du = (1/2)(u − 1)eᵘ + C = (1/2)e^(x²)(x² − 1) + C." },

{ q: "∫ x² ln x dx equals",
  o: ["(x³/3)(ln x + 1/3) + C", "(x³/3) ln x + C", "(x³/3)(ln x − 1/3) + C", "x³(ln x − 1/3) + C"], a: 2,
  s: "By parts: ∫ x² ln x dx = (x³/3) ln x − ∫ (x³/3)(1/x) dx = (x³/3) ln x − x³/9 + C = (x³/3)(ln x − 1/3) + C." },

{ q: "∫ sin⁻¹ x dx equals",
  o: ["x sin⁻¹ x + √(1 − x²) + C", "x sin⁻¹ x − √(1 − x²) + C", "sin⁻¹ x/√(1 − x²) + C", "x sin⁻¹ x + C"], a: 0,
  s: "By parts: ∫ sin⁻¹ x dx = x sin⁻¹ x − ∫ x/√(1 − x²) dx = x sin⁻¹ x + √(1 − x²) + C." },

{ q: "∫ tan⁻¹ x dx equals",
  o: ["x tan⁻¹ x + (1/2) ln(1 + x²) + C", "x tan⁻¹ x − ln(1 + x²) + C", "tan⁻¹ x/(1 + x²) + C", "x tan⁻¹ x − (1/2) ln(1 + x²) + C"], a: 3,
  s: "By parts: ∫ tan⁻¹ x dx = x tan⁻¹ x − ∫ x/(1 + x²) dx = x tan⁻¹ x − (1/2) ln(1 + x²) + C." },

{ q: "∫ dx/√(9 − 4x²) equals",
  o: ["sin⁻¹(2x/3) + C", "(1/2) sin⁻¹(2x/3) + C", "(1/3) sin⁻¹(2x/3) + C", "(1/2) sin⁻¹(3x/2) + C"], a: 1,
  s: "9 − 4x² = 4(9/4 − x²), so the integral is (1/2)∫ dx/√((3/2)² − x²) = (1/2) sin⁻¹(x/(3/2)) + C = (1/2) sin⁻¹(2x/3) + C." },

{ q: "∫ dx/(x² + 2x + 5) equals",
  o: ["tan⁻¹((x + 1)/2) + C", "(1/2) tan⁻¹(x + 1) + C", "(1/2) tan⁻¹((x + 1)/2) + C", "(1/4) tan⁻¹((x + 1)/2) + C"], a: 2,
  s: "x² + 2x + 5 = (x + 1)² + 2². Using ∫ dx/(u² + a²) = (1/a) tan⁻¹(u/a) + C with a = 2: (1/2) tan⁻¹((x + 1)/2) + C." },

{ q: "∫ √(1 − x²) dx equals",
  o: ["(x/2)√(1 − x²) + (1/2) sin⁻¹ x + C", "(x/2)√(1 − x²) − (1/2) sin⁻¹ x + C", "(1/3)(1 − x²)^(3/2) + C", "x√(1 − x²) + sin⁻¹ x + C"], a: 0,
  s: "The standard result is ∫ √(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C. With a = 1 this gives the stated answer." },

{ q: "∫ dx/(1 + eˣ) equals",
  o: ["x − ln(1 + eˣ) + C", "ln(1 + eˣ) + C", "x + ln(1 + eˣ) + C", "ln(1 + eˣ) − x + C"], a: 0,
  s: "1/(1 + eˣ) = 1 − eˣ/(1 + eˣ). Integrating: x − ln(1 + eˣ) + C." },

{ q: "∫ dx/(√x + √(x + 1)) equals",
  o: ["(2/3)[(x + 1)^(3/2) + x^(3/2)] + C", "2[√(x + 1) − √x] + C", "(2/3)[(x + 1)^(3/2) − x^(3/2)] + C", "(2/3)(x + 1)^(3/2) + C"], a: 2,
  s: "Rationalise: 1/(√x + √(x + 1)) = √(x + 1) − √x. Integrating: (2/3)(x + 1)^(3/2) − (2/3)x^(3/2) + C." },

{ q: "∫ sin 3x sin 2x dx equals",
  o: ["sin x/2 + sin 5x/10 + C", "sin 5x/10 − sin x/2 + C", "cos x/2 − cos 5x/10 + C", "sin x/2 − sin 5x/10 + C"], a: 3,
  s: "sin 3x sin 2x = (1/2)[cos x − cos 5x]. Integrating: (1/2)[sin x − sin 5x/5] + C = sin x/2 − sin 5x/10 + C." },

{ q: "∫ dx/(x²(x⁴ + 1)^(3/4)) equals",
  o: ["−(x⁴ + 1)^(1/4)/x + C", "(x⁴ + 1)^(1/4)/x + C", "−(x⁴ + 1)^(1/4)/(4x) + C", "−(x⁴ + 1)^(−3/4)/x + C"], a: 0,
  s: "Write the integrand as x⁻⁵(1 + x⁻⁴)^(−3/4). Put t = 1 + x⁻⁴, dt = −4x⁻⁵ dx. The integral is −(1/4)∫ t^(−3/4) dt = −t^(1/4) + C = −(1 + x⁻⁴)^(1/4) + C = −(x⁴ + 1)^(1/4)/x + C." },

{ q: "∫ (x² − 1)/(x⁴ + x² + 1) dx equals",
  o: ["(1/2) ln|(x² + x + 1)/(x² − x + 1)| + C", "ln|(x² − x + 1)/(x² + x + 1)| + C", "(1/2) tan⁻¹((x² − 1)/x) + C", "(1/2) ln|(x² − x + 1)/(x² + x + 1)| + C"], a: 3,
  s: "Divide numerator and denominator by x²: (1 − 1/x²)/(x² + 1 + 1/x²). Put t = x + 1/x, dt = (1 − 1/x²)dx, and x² + 1/x² = t² − 2, so the denominator is t² − 1. The integral is ∫ dt/(t² − 1) = (1/2) ln|(t − 1)/(t + 1)| + C, and (t − 1)/(t + 1) = (x² − x + 1)/(x² + x + 1)." },

{ q: "∫ dx/((x − 1)(x − 2)) equals",
  o: ["ln|(x − 2)/(x − 1)| + C", "ln|(x − 1)/(x − 2)| + C", "ln|(x − 1)(x − 2)| + C", "(1/2) ln|(x − 2)/(x − 1)| + C"], a: 0,
  s: "1/((x − 1)(x − 2)) = 1/(x − 2) − 1/(x − 1). Integrating: ln|x − 2| − ln|x − 1| + C = ln|(x − 2)/(x − 1)| + C." },

{ q: "∫ (3x + 2)/((x + 1)(x + 2)) dx equals",
  o: ["ln|x + 1| + 4 ln|x + 2| + C", "−ln|x + 1| + 3 ln|x + 2| + C", "4 ln|x + 1| − ln|x + 2| + C", "−ln|x + 1| + 4 ln|x + 2| + C"], a: 3,
  s: "Partial fractions: (3x + 2)/((x + 1)(x + 2)) = A/(x + 1) + B/(x + 2). At x = −1: A = (−1)/(1) = −1. At x = −2: B = (−4)/(−1) = 4. Integrating: −ln|x + 1| + 4 ln|x + 2| + C." },

]
},


{
title: "UNIT 08 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: DEFINITE INTEGRALS AND THEIR PROPERTIES ",
    questions: [

/* ======================= SECTION B: DEFINITE INTEGRALS AND THEIR PROPERTIES (18) ======================= */

{ q: "∫₀^(π/2) sin x/(sin x + cos x) dx equals",
  o: ["π/2", "π/8", "1", "π/4"], a: 3,
  s: "Let I = ∫₀^(π/2) sin x/(sin x + cos x) dx. Replacing x by π/2 − x gives I = ∫₀^(π/2) cos x/(sin x + cos x) dx. Adding: 2I = ∫₀^(π/2) 1 dx = π/2, so I = π/4." },

{ q: "∫₀^π x sin x/(1 + cos²x) dx equals",
  o: ["π²/2", "π/4", "π²/8", "π²/4"], a: 3,
  s: "Replace x by π − x: I = ∫₀^π (π − x) sin x/(1 + cos²x) dx. Adding: 2I = π∫₀^π sin x/(1 + cos²x) dx = π[−tan⁻¹(cos x)]₀^π = π(π/4 + π/4) = π²/2. So I = π²/4." },

{ q: "∫ from −π/4 to π/4 of (x³ + x cos x + tan⁵x + 1) dx equals",
  o: ["π", "π/2", "0", "π/4"], a: 1,
  s: "x³, x cos x and tan⁵x are odd functions, so their integrals over the symmetric interval vanish. The remaining integral is ∫ from −π/4 to π/4 of 1 dx = π/2." },

{ q: "∫₀¹ x(1 − x)¹⁰ dx equals",
  o: ["1/110", "1/132", "1/121", "1/12"], a: 1,
  s: "Put u = 1 − x: ∫₀¹ (1 − u)u¹⁰ du = 1/11 − 1/12 = 1/132." },

{ q: "∫₀^(π/2) ln(sin x) dx equals",
  o: ["(π/2) ln 2", "−(π/2) ln 2", "−π ln 2", "0"], a: 1,
  s: "Let I = ∫₀^(π/2) ln sin x dx = ∫₀^(π/2) ln cos x dx. Then 2I = ∫₀^(π/2) ln(sin x cos x) dx = ∫₀^(π/2) ln(sin 2x) dx − (π/2) ln 2. And ∫₀^(π/2) ln sin 2x dx = I (substituting 2x = t and using symmetry). So 2I = I − (π/2) ln 2, giving I = −(π/2) ln 2." },

{ q: "∫₀⁴ √x/(√x + √(4 − x)) dx equals",
  o: ["2", "4", "1", "4/3"], a: 0,
  s: "Let f(x) = √x/(√x + √(4 − x)). Then f(x) + f(4 − x) = 1. So 2I = ∫₀⁴ 1 dx = 4 and I = 2." },

{ q: "∫₀^(π/2) sin⁶x dx equals",
  o: ["5π/16", "5π/32", "3π/16", "15π/32"], a: 1,
  s: "By Wallis's formula for even n: ∫₀^(π/2) sinⁿx dx = [(n − 1)(n − 3)...1]/[n(n − 2)...2] · π/2. For n = 6: (5 · 3 · 1)/(6 · 4 · 2) · π/2 = (15/48)(π/2) = 5π/32." },

{ q: "∫₀^(π/4) ln(1 + tan x) dx equals",
  o: ["(π/4) ln 2", "(π/2) ln 2", "(π/8) ln 2", "ln 2"], a: 2,
  s: "Replace x by π/4 − x: 1 + tan(π/4 − x) = 2/(1 + tan x). So I = ∫₀^(π/4) [ln 2 − ln(1 + tan x)] dx = (π/4) ln 2 − I. Hence 2I = (π/4) ln 2 and I = (π/8) ln 2." },

{ q: "∫ from −2 to 2 of |x² − 1| dx equals",
  o: ["2", "4", "8/3", "16/3"], a: 1,
  s: "The integrand is even, so the integral is 2∫₀² |x² − 1| dx = 2[∫₀¹ (1 − x²) dx + ∫₁² (x² − 1) dx] = 2[2/3 + 4/3] = 4." },

{ q: "∫₀² ⌊x²⌋ dx, where ⌊·⌋ is the greatest integer function, equals",
  o: ["5 − √2 − √3", "4 − √2 − √3", "6 − √2 − √3", "5 − √3"], a: 0,
  s: "On [0, 1) the integrand is 0; on [1, √2) it is 1; on [√2, √3) it is 2; on [√3, 2) it is 3. Integral = (√2 − 1) + 2(√3 − √2) + 3(2 − √3) = 5 − √2 − √3." },

{ q: "∫ from −1 to 1 of ln((2 − x)/(2 + x)) dx equals",
  o: ["ln 3", "2 ln 3", "−ln 3", "0"], a: 3,
  s: "Let f(x) = ln((2 − x)/(2 + x)). Then f(−x) = ln((2 + x)/(2 − x)) = −f(x), so f is odd. The integral over [−1, 1] is 0." },

{ q: "∫₀^(π/2) sin 2x · ln(tan x) dx equals",
  o: ["π/2", "0", "−π/4", "1"], a: 1,
  s: "Replace x by π/2 − x: sin 2x is unchanged and ln(tan x) becomes ln(cot x) = −ln(tan x). So I = −I and I = 0." },

{ q: "∫₀^(π/2) sin x cos x/(sin⁴x + cos⁴x) dx equals",
  o: ["π/4", "π/2", "π/8", "1"], a: 0,
  s: "Put u = sin²x, du = 2 sin x cos x dx. Then sin⁴x + cos⁴x = u² + (1 − u)² = 2u² − 2u + 1 = 2[(u − 1/2)² + 1/4]. I = (1/2)∫₀¹ du/(2[(u − 1/2)² + 1/4]) = (1/4)∫₀¹ du/((u − 1/2)² + 1/4) = (1/4) · 2 [tan⁻¹(2u − 1)]₀¹ = (1/2)(π/4 + π/4) = π/4." },

{ q: "∫₀^(10π) |sin x| dx equals",
  o: ["10", "40", "20", "0"], a: 2,
  s: "|sin x| has period π and ∫₀^π sin x dx = 2. Over 10π there are 10 periods, so the integral is 10 × 2 = 20." },

{ q: "∫₀¹ x eˣ dx equals",
  o: ["e", "e − 1", "e + 1", "1"], a: 3,
  s: "By parts: ∫ x eˣ dx = x eˣ − eˣ. So [x eˣ − eˣ]₀¹ = (e − e) − (0 − 1) = 1." },

{ q: "∫₀^(π/2) cos x/(1 + sin x) dx equals",
  o: ["1", "ln 2", "ln 3", "π/4"], a: 1,
  s: "Put u = 1 + sin x, du = cos x dx. The integral is ∫₁² du/u = ln 2." },

{ q: "∫ from −1 to 1 of (x⁴ + x³ + x² + x + 1) dx equals",
  o: ["23/15", "2", "46/15", "46/5"], a: 2,
  s: "The odd terms x³ and x integrate to 0 over [−1, 1]. The even terms give 2∫₀¹ (x⁴ + x² + 1) dx = 2(1/5 + 1/3 + 1) = 2 × 23/15 = 46/15." },

{ q: "Let f(x) = x² for 0 ≤ x < 1 and f(x) = 2 − x for 1 ≤ x ≤ 2. Then ∫₀² f(x) dx equals",
  o: ["5/6", "1/3", "7/6", "1"], a: 0,
  s: "∫₀¹ x² dx = 1/3 and ∫₁² (2 − x) dx = [2x − x²/2]₁² = (4 − 2) − (2 − 1/2) = 1/2. Total = 1/3 + 1/2 = 5/6." },


]
},

{
title: "UNIT 08 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: FUNDAMENTAL THEOREM, LEIBNIZ RULE, LIMIT OF A SUM ",
    questions: [


/* ======================= SECTION C: FUNDAMENTAL THEOREM, LEIBNIZ RULE, LIMIT OF A SUM (10) ======================= */

{ q: "If F(x) = ∫₀^(x²) √(1 + t²) dt, then F′(1) equals",
  o: ["√2", "2", "2√2", "4√2"], a: 2,
  s: "By the fundamental theorem and the chain rule, F′(x) = √(1 + (x²)²) · 2x = 2x√(1 + x⁴). At x = 1: 2√2." },

{ q: "lim (x → 0) (1/x³) ∫₀^x t ln(1 + t) dt equals",
  o: ["1", "1/2", "0", "1/3"], a: 3,
  s: "Both numerator and denominator → 0. By L′Hôpital's rule: lim x ln(1 + x)/(3x²) = lim (1/3) · ln(1 + x)/x = 1/3." },

{ q: "lim (x → 0) (∫₀^x cos t² dt)/x equals",
  o: ["0", "1", "1/2", "∞"], a: 1,
  s: "The form is 0/0. By L′Hôpital's rule the limit is lim cos x² = 1." },

{ q: "A function f satisfies f(x) = x + 2∫₀¹ f(t) dt for all x. Then f(2) equals",
  o: ["2", "1", "0", "−1"], a: 1,
  s: "Let c = ∫₀¹ f(t) dt, so f(x) = x + 2c. Then c = ∫₀¹ (t + 2c) dt = 1/2 + 2c, so c = −1/2. Hence f(x) = x − 1 and f(2) = 1." },

{ q: "If G(x) = ∫ from x to x² of eᵗ dt, then G′(1) equals",
  o: ["2e", "0", "e²", "e"], a: 3,
  s: "By Leibniz's rule, G′(x) = e^(x²) · 2x − eˣ · 1. At x = 1: 2e − e = e." },

{ q: "For x > 0, let f(x) = ∫₁^x (ln t)/(1 + t) dt. Then f(e) + f(1/e) equals",
  o: ["1/2", "1", "0", "1/4"], a: 0,
  s: "In f(1/x) put t = 1/u: f(1/x) = ∫₁^x ln u/(u(u + 1)) du. So f(x) + f(1/x) = ∫₁^x ln u [1/(1 + u) + 1/(u(u + 1))] du = ∫₁^x (ln u)/u du = (1/2) ln² x. At x = e this equals 1/2." },

{ q: "lim (n → ∞) Σ (r = 1 to n) r/(n² + r²) equals",
  o: ["ln 2", "π/4", "1/2", "(1/2) ln 2"], a: 3,
  s: "Σ r/(n² + r²) = (1/n) Σ (r/n)/(1 + (r/n)²) → ∫₀¹ x/(1 + x²) dx = (1/2) ln(1 + x²)|₀¹ = (1/2) ln 2." },

{ q: "lim (n → ∞) Σ (r = 0 to n − 1) n/(n² + r²) equals",
  o: ["π/2", "π/4", "ln 2", "1"], a: 1,
  s: "Σ n/(n² + r²) = (1/n) Σ 1/(1 + (r/n)²) → ∫₀¹ dx/(1 + x²) = π/4." },

{ q: "lim (n → ∞) Σ (k = 1 to n) 1/√(n² + kn) equals",
  o: ["2(√2 − 1)", "√2 − 1", "2√2", "2"], a: 0,
  s: "Σ 1/√(n² + kn) = (1/n) Σ 1/√(1 + k/n) → ∫₀¹ dx/√(1 + x) = 2√(1 + x)|₀¹ = 2(√2 − 1)." },

{ q: "lim (n → ∞) [(n + 1)(n + 2)...(2n)]^(1/n)/n equals",
  o: ["e/4", "2/e", "1", "4/e"], a: 3,
  s: "The expression is [Π (k = 1 to n) (1 + k/n)]^(1/n). Its logarithm is (1/n) Σ ln(1 + k/n) → ∫₀¹ ln(1 + x) dx = 2 ln 2 − 1. So the limit is e^(2 ln 2 − 1) = 4/e." },


]
},

{
title: "UNIT 08 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: "  SECTION D: AREA UNDER CURVES  ",
    questions: [


/* ======================= SECTION D: AREA UNDER CURVES (14) ======================= */

{ q: "The area enclosed by y = x² and y = x is",
  o: ["1/3", "1/6", "1/2", "1/12"], a: 1,
  s: "The curves meet at x = 0 and x = 1. Area = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6." },

{ q: "The area of the ellipse x²/4 + y²/9 = 1 is",
  o: ["6π", "12π", "3π", "13π"], a: 0,
  s: "The area of an ellipse x²/a² + y²/b² = 1 is πab. Here a = 2, b = 3, so the area is 6π." },

{ q: "The area enclosed by the parabolas y² = 4x and x² = 4y is",
  o: ["8/3", "32/3", "16/3", "4"], a: 2,
  s: "The curves meet at (0, 0) and (4, 4). Area = ∫₀⁴ (2√x − x²/4) dx = [(4/3)x^(3/2) − x³/12]₀⁴ = 32/3 − 16/3 = 16/3." },

{ q: "The area bounded by y = sin x, y = cos x, x = 0 and x = π/4 is",
  o: ["√2", "1/√2", "√2 − 1", "2(√2 − 1)"], a: 2,
  s: "On [0, π/4], cos x ≥ sin x. Area = ∫₀^(π/4) (cos x − sin x) dx = [sin x + cos x]₀^(π/4) = √2 − 1." },

{ q: "The area of the region enclosed by y = |x| and y = 2 − x² is",
  o: ["14/3", "5/3", "3", "7/3"], a: 3,
  s: "They meet where |x| = 2 − x², i.e. x = ±1. By symmetry, Area = 2∫₀¹ (2 − x² − x) dx = 2(2 − 1/3 − 1/2) = 2 × 7/6 = 7/3." },

{ q: "The area bounded by y = ln x, the x-axis and the line x = e is",
  o: ["e", "e − 1", "1", "1/2"], a: 2,
  s: "Area = ∫₁^e ln x dx = [x ln x − x]₁^e = (e − e) − (0 − 1) = 1." },

{ q: "The area bounded by y = eˣ, y = e⁻ˣ and the line x = 1 is",
  o: ["e − 1/e", "e + 1/e", "e + 1/e − 2", "e − 1"], a: 2,
  s: "The curves meet at x = 0, and eˣ ≥ e⁻ˣ for x ≥ 0. Area = ∫₀¹ (eˣ − e⁻ˣ) dx = [eˣ + e⁻ˣ]₀¹ = (e + 1/e) − 2." },

{ q: "The area bounded by the parabola y² = x and the line y = x − 2 is",
  o: ["9", "7/2", "9/2", "11/2"], a: 2,
  s: "Substitute x = y²: y² = y + 2 gives y = 2 or y = −1. Integrating with respect to y: Area = ∫ from −1 to 2 of [(y + 2) − y²] dy = [y²/2 + 2y − y³/3] from −1 to 2 = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 10/3 − (−7/6) = 9/2." },

{ q: "The area enclosed by |x| + |y| = 2 is",
  o: ["4", "16", "8", "4√2"], a: 2,
  s: "The curve is a square with vertices (±2, 0), (0, ±2). Its diagonals are 4, so its area is (1/2) × 4 × 4 = 8." },

{ q: "The area of the region {(x, y): 0 ≤ y ≤ x² + 1, 0 ≤ y ≤ x + 1, 0 ≤ x ≤ 2} is",
  o: ["23/6", "21/6", "17/6", "25/6"], a: 0,
  s: "The curves y = x² + 1 and y = x + 1 meet at x = 0 and x = 1. For 0 < x < 1, x² < x, so x² + 1 is the lower curve. For x > 1, x + 1 is the lower curve. The region lies below both curves, so its upper boundary is the lower of the two: x² + 1 on [0, 1] and x + 1 on [1, 2]. Area = ∫₀¹ (x² + 1) dx + ∫₁² (x + 1) dx = 4/3 + 5/2 = 23/6." },

{ q: "The area enclosed by y = x³ and y = x is",
  o: ["1/4", "1", "1/2", "3/4"], a: 2,
  s: "The curves meet at x = −1, 0, 1. By symmetry, Area = 2∫₀¹ (x − x³) dx = 2(1/2 − 1/4) = 1/2." },

{ q: "The area bounded by y = sin x and y = cos x between two consecutive intersection points x = π/4 and x = 5π/4 is",
  o: ["√2", "4", "2√2", "2"], a: 2,
  s: "On [π/4, 5π/4], sin x ≥ cos x. Area = ∫ (sin x − cos x) dx = [−cos x − sin x] from π/4 to 5π/4 = (√2/2 + √2/2) − (−√2/2 − √2/2) = 2√2." },

{ q: "The area of the part of the circle x² + y² = 4 that lies above the line y = 1 is",
  o: ["4π/3 − √3", "2π/3 − √3", "4π/3 + √3", "π − √3"], a: 0,
  s: "The line meets the circle where x² = 3, i.e. x = ±√3. Area = ∫ from −√3 to √3 of (√(4 − x²) − 1) dx = [(x/2)√(4 − x²) + 2 sin⁻¹(x/2) − x] from −√3 to √3 = 2[√3/2 + 2π/3 − √3] = 4π/3 − √3." },

{ q: "The area bounded by y = sin x and the x-axis between x = 0 and x = 2π is",
  o: ["0", "4", "2", "8"], a: 1,
  s: "The curve lies above the axis on [0, π] and below on [π, 2π]. Area = ∫₀^(2π) |sin x| dx = 2 + 2 = 4." },

]
},

{
title: "UNIT 08 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: MODULUS, FRACTIONAL-PART AND GREATEST-INTEGER INTEGRALS  ",
    questions: [


/* ======================= SECTION E: MODULUS, FRACTIONAL-PART AND GREATEST-INTEGER INTEGRALS (5) ======================= */

{ q: "∫₀³ {x} dx, where {x} is the fractional part of x, equals",
  o: ["3", "3/2", "1", "1/2"], a: 1,
  s: "{x} has period 1 and ∫₀¹ x dx = 1/2. Over [0, 3] there are 3 periods, so the integral is 3 × 1/2 = 3/2." },

{ q: "∫₀³ (|x − 1| + |x − 2|) dx equals",
  o: ["3", "4", "5", "6"], a: 2,
  s: "∫₀³ |x − 1| dx = 1/2 + 2 = 5/2 and ∫₀³ |x − 2| dx = 2 + 1/2 = 5/2. The sum is 5." },

{ q: "∫₀^π √(1 + cos 2x) dx equals",
  o: ["2√2", "√2", "4", "2"], a: 0,
  s: "1 + cos 2x = 2cos²x, so the integrand is √2 |cos x|. ∫₀^π |cos x| dx = 2, so the integral is 2√2." },

{ q: "∫₀^(π/2) √(1 − sin 2x) dx equals",
  o: ["2(√2 − 1)", "√2 − 1", "2√2", "2"], a: 0,
  s: "1 − sin 2x = (cos x − sin x)², so the integrand is |cos x − sin x|. ∫₀^(π/4) (cos x − sin x) dx = √2 − 1 and ∫_(π/4)^(π/2) (sin x − cos x) dx = √2 − 1. Total = 2(√2 − 1)." },

{ q: "∫₀² x⌊x⌋ dx, where ⌊·⌋ is the greatest integer function, equals",
  o: ["3/2", "2", "1", "3"], a: 0,
  s: "On [0, 1), ⌊x⌋ = 0, so the integrand is 0. On [1, 2), ⌊x⌋ = 1, so the integral is ∫₁² x dx = (4 − 1)/2 = 3/2." },

]
},



{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: ORDER AND DEGREE ",
    questions: [

/* ======================= SECTION A: ORDER AND DEGREE (8) ======================= */

{ q: "The order and degree of (d³y/dx³)² + (d²y/dx²)³ + (dy/dx)⁴ + y⁵ = 0 are respectively",
  o: ["3 and 3", "2 and 3", "3 and 5", "3 and 2"], a: 3,
  s: "The highest derivative is d³y/dx³, so the order is 3. It appears with power 2, and the equation is a polynomial in the derivatives, so the degree is 2." },

{ q: "The order and degree of d²y/dx² = [1 + (dy/dx)²]^(3/2) are respectively",
  o: ["2 and 3/2", "2 and 3", "2 and 2", "1 and 2"], a: 2,
  s: "Order = 2. To find the degree, remove the fractional power by squaring: (d²y/dx²)² = [1 + (dy/dx)²]³. The highest derivative d²y/dx² now has power 2, so the degree is 2." },

{ q: "The order and degree of (1 + 3 dy/dx)^(2/3) = 4 d³y/dx³ are respectively",
  o: ["3 and 3", "3 and 2", "1 and 2", "3 and 2/3"], a: 0,
  s: "Cube both sides to clear the fractional power: (1 + 3 dy/dx)² = 64 (d³y/dx³)³. The highest derivative is d³y/dx³ (order 3), and it appears with power 3, so the degree is 3." },

{ q: "The order and degree of y = x (dy/dx) + √(1 + (dy/dx)²) are respectively",
  o: ["1 and 1", "2 and 1", "1 and 1/2", "1 and 2"], a: 3,
  s: "Isolate the radical and square: (y − x dy/dx)² = 1 + (dy/dx)². This is a polynomial in dy/dx whose highest power is 2. The order is 1 and the degree is 2." },

{ q: "The order and degree of d²y/dx² + sin(dy/dx) = 0 are respectively",
  o: ["2 and not defined", "2 and 1", "1 and 2", "2 and 2"], a: 0,
  s: "The order is 2. The term sin(dy/dx) cannot be written as a polynomial in dy/dx, so the equation is not a polynomial in the derivatives and its degree is not defined." },

{ q: "The order and degree of d²y/dx² = (dy/dx)^(1/3) are respectively",
  o: ["2 and 1/3", "1 and 3", "2 and 2", "2 and 3"], a: 3,
  s: "Cube both sides: (d²y/dx²)³ = dy/dx. The highest derivative d²y/dx² has power 3, so the order is 2 and the degree is 3." },

{ q: "The general solution of a differential equation of order 4 contains how many arbitrary constants?",
  o: ["3", "4", "5", "1"], a: 1,
  s: "The general solution of an nth order differential equation contains n independent arbitrary constants. So an order-4 equation has 4." },

{ q: "Which of the following is a linear differential equation?",
  o: ["dy/dx = y²", "dy/dx + sin y = x", "dy/dx + y/x = x²", "(dy/dx)² + y = 0"], a: 2,
  s: "A linear equation has y and its derivatives only to the first power and not multiplied together or inside other functions. dy/dx + y/x = x² has this form. y², sin y and (dy/dx)² make the other three non-linear." },

]
},


{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: FORMATION OF DIFFERENTIAL EQUATIONS ",
    questions: [


/* ======================= SECTION B: FORMATION OF DIFFERENTIAL EQUATIONS (14) ======================= */

{ q: "The differential equation of the family y = a e²ˣ + b e⁻³ˣ is",
  o: ["y″ − y′ − 6y = 0", "y″ + y′ + 6y = 0", "y″ − 6y = 0", "y″ + y′ − 6y = 0"], a: 3,
  s: "y′ = 2ae²ˣ − 3be⁻³ˣ and y″ = 4ae²ˣ + 9be⁻³ˣ. The roots of the characteristic equation are 2 and −3, so (r − 2)(r + 3) = r² + r − 6. The equation is y″ + y′ − 6y = 0. (Check: y″ + y′ − 6y = (4 + 2 − 6)ae²ˣ + (9 − 3 − 6)be⁻³ˣ = 0.)" },

{ q: "The differential equation of the family y = Ax² + B (A, B arbitrary constants) is",
  o: ["x y″ − y′ = 0", "x y″ + y′ = 0", "y″ − 2y = 0", "y″ = 2"], a: 0,
  s: "y′ = 2Ax and y″ = 2A. Eliminating A: y′ = x y″, i.e. x y″ − y′ = 0." },

{ q: "The differential equation of the family y = a cos(x + b) is",
  o: ["y″ − y = 0", "y′ + y = 0", "y″ + y′ = 0", "y″ + y = 0"], a: 3,
  s: "y′ = −a sin(x + b) and y″ = −a cos(x + b) = −y. So y″ + y = 0." },

{ q: "The differential equation of the family y = eˣ(A cos x + B sin x) is",
  o: ["y″ − 2y′ + 2y = 0", "y″ + 2y′ + 2y = 0", "y″ − 2y′ − 2y = 0", "y″ − y′ + 2y = 0"], a: 0,
  s: "The functions eˣ cos x and eˣ sin x correspond to the characteristic roots 1 ± i. The characteristic polynomial is (r − 1)² + 1 = r² − 2r + 2, so the equation is y″ − 2y′ + 2y = 0." },

{ q: "The differential equation of the family y = ax + b/x is",
  o: ["x²y″ + xy′ − y = 0", "x²y″ − xy′ + y = 0", "x²y″ + xy′ + y = 0", "xy″ + y′ − y = 0"], a: 0,
  s: "y′ = a − b/x² and y″ = 2b/x³. So x²y″ = 2b/x and xy′ = ax − b/x. Then x²y″ + xy′ = ax + b/x = y, i.e. x²y″ + xy′ − y = 0." },

{ q: "The differential equation of the family of all circles x² + y² = a² (centre at the origin) is",
  o: ["x − y y′ = 0", "x + y y′ = 0", "y + x y′ = 0", "y − x y′ = 0"], a: 1,
  s: "Differentiating x² + y² = a²: 2x + 2y y′ = 0, so x + y y′ = 0." },

{ q: "The differential equation of the family of parabolas with vertex at the origin and axis along the x-axis is",
  o: ["2x y′ − y = 0", "x y′ − 2y = 0", "2x y′ + y = 0", "y′ = 2xy"], a: 0,
  s: "The family is y² = 4ax. Differentiating: 2y y′ = 4a. Substituting 4a = y²/x: 2y y′ = y²/x, so 2x y′ = y, i.e. 2x y′ − y = 0." },

{ q: "The differential equation of the family of circles touching the x-axis at the origin is",
  o: ["(x² − y²) y′ = −2xy", "(x² + y²) y′ = 2xy", "(x² − y²) y′ = xy", "(x² − y²) y′ = 2xy"], a: 3,
  s: "The family is x² + y² = 2ay, i.e. a = (x² + y²)/(2y). Differentiating x² + y² = 2ay: 2x + 2y y′ = 2a y′, so a = (x + y y′)/y′. Equating the two expressions for a: (x² + y²) y′ = 2y(x + y y′), so x²y′ − y²y′ = 2xy, i.e. (x² − y²) y′ = 2xy." },

{ q: "The differential equation of the family of circles with centres on the x-axis and passing through the origin is",
  o: ["2xy y′ = x² − y²", "2xy y′ = x² + y²", "2xy y′ = y² − x²", "xy y′ = y² − x²"], a: 2,
  s: "The family is x² + y² = 2ax. Differentiating: 2x + 2y y′ = 2a, so a = x + y y′. Substituting: x² + y² = 2x(x + y y′) = 2x² + 2xy y′, so y² − x² = 2xy y′." },

{ q: "The differential equation of the family of curves y = cx + c² is",
  o: ["y = x y′ − (y′)²", "y = x y′ + y′", "y = x y′ + (y′)²", "y′ = x + y"], a: 2,
  s: "y′ = c. Substituting c = y′ in y = cx + c²: y = x y′ + (y′)²." },

{ q: "The differential equation of all straight lines which are at a unit distance from the origin is",
  o: ["(y − x y′)² = 1 − (y′)²", "(y + x y′)² = 1 + (y′)²", "(y − x y′)² = 1 + (y′)²", "y − x y′ = 1 + y′"], a: 2,
  s: "A line y = mx + c is at unit distance from the origin when |c|/√(1 + m²) = 1, i.e. c² = 1 + m². Here m = y′ and c = y − x y′. So (y − x y′)² = 1 + (y′)²." },

{ q: "The differential equation of all parabolas y² = 4a(x − b) (a and b arbitrary constants) is",
  o: ["y y″ − (y′)² = 0", "y″ = 2a", "y y″ + (y′)² = 0", "y y′ = 2a"], a: 2,
  s: "Differentiating: 2y y′ = 4a. Differentiating again: 2(y′)² + 2y y″ = 0, so y y″ + (y′)² = 0. The two constants a, b are eliminated, giving a second-order equation." },

{ q: "The differential equation of all straight lines passing through the origin is",
  o: ["y = −x y′", "y y′ = x", "y = x y′", "y′ = 0"], a: 2,
  s: "The family is y = mx. Differentiating: y′ = m. Substituting: y = x y′." },

{ q: "The differential equation of all straight lines in the plane is",
  o: ["y′ = 0", "y‴ = 0", "y″ = 1", "y″ = 0"], a: 3,
  s: "The family is y = mx + c with two arbitrary constants. Differentiating twice gives y″ = 0." },

]
},

{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: VARIABLE SEPARABLE EQUATIONS  ",
    questions: [


/* ======================= SECTION C: VARIABLE SEPARABLE EQUATIONS (14) ======================= */

{ q: "The general solution of dy/dx = (1 + y²)/(1 + x²) is",
  o: ["(y − x)/(1 + xy) = C", "(y + x)/(1 − xy) = C", "y − x = C", "tan⁻¹ y + tan⁻¹ x = C"], a: 0,
  s: "Separate: dy/(1 + y²) = dx/(1 + x²). Integrating: tan⁻¹ y − tan⁻¹ x = c. Taking tan of both sides: (y − x)/(1 + xy) = tan c = C." },

{ q: "The general solution of dy/dx = e^(x + y) is",
  o: ["eˣ + e⁻ʸ = C", "eˣ − e⁻ʸ = C", "eˣ + eʸ = C", "e⁻ˣ + e⁻ʸ = C"], a: 0,
  s: "Write dy/dx = eˣ eʸ, so e⁻ʸ dy = eˣ dx. Integrating: −e⁻ʸ = eˣ + c, i.e. eˣ + e⁻ʸ = C." },

{ q: "If dy/dx = xy and y(0) = 1, then y(2) equals",
  o: ["e²", "e", "e⁴", "2"], a: 0,
  s: "dy/y = x dx gives ln y = x²/2 + c. y(0) = 1 gives c = 0, so y = e^(x²/2). Then y(2) = e²." },

{ q: "If dy/dx = y tan x and y(0) = 1, then y(π/3) equals",
  o: ["1/2", "√3", "2", "√3/2"], a: 2,
  s: "dy/y = tan x dx gives ln y = −ln|cos x| + c, so y = C sec x. y(0) = 1 gives C = 1, so y = sec x. Then y(π/3) = 2." },

{ q: "If dy/dx = (y + 1)/(x − 1) and y(2) = 3, then y(3) equals",
  o: ["7", "5", "9", "4"], a: 0,
  s: "dy/(y + 1) = dx/(x − 1) gives y + 1 = C(x − 1). y(2) = 3 gives 4 = C, so y = 4x − 5. Then y(3) = 7." },

{ q: "If dy/dx = y² and y(0) = 1, then y(1/2) equals",
  o: ["1", "2", "1/2", "e^(1/2)"], a: 1,
  s: "dy/y² = dx gives −1/y = x + c. y(0) = 1 gives c = −1, so y = 1/(1 − x). Then y(1/2) = 1/(1/2) = 2." },

{ q: "The general solution of dy/dx = (x + 1)/(2 − y) is",
  o: ["x² − y² + 2x − 4y = C", "x² + y² + 2x + 4y = C", "x² + y² − 2x − 4y = C", "x² + y² + 2x − 4y = C"], a: 3,
  s: "(2 − y) dy = (x + 1) dx. Integrating: 2y − y²/2 = x²/2 + x + c. Multiply by 2: 4y − y² = x² + 2x + c′, i.e. x² + y² + 2x − 4y = C." },

{ q: "The general solution of dy/dx = sin(x + y) + cos(x + y) is",
  o: ["ln|1 − tan((x + y)/2)| = x + C", "ln|tan((x + y)/2)| = x + C", "ln|1 + tan(x + y)| = x + C", "ln|1 + tan((x + y)/2)| = x + C"], a: 3,
  s: "Put z = x + y, so dz/dx = 1 + sin z + cos z. With t = tan(z/2): sin z = 2t/(1 + t²), cos z = (1 − t²)/(1 + t²), so 1 + sin z + cos z = 2(1 + t)/(1 + t²). Also dz = 2 dt/(1 + t²). Hence 2 dt/(1 + t²) = 2(1 + t)/(1 + t²) dx, so dt/(1 + t) = dx, giving ln|1 + t| = x + C." },

{ q: "If dy/dx = (x + y)² and y(0) = 0, then y(π/4) equals",
  o: ["π/4 − 1", "1 + π/4", "1 − π/4", "1"], a: 2,
  s: "Put z = x + y, so dz/dx = 1 + z². Then tan⁻¹ z = x + c. At x = 0, z = 0, so c = 0 and z = tan x. Hence y = tan x − x, and y(π/4) = 1 − π/4." },

{ q: "If (1 + e²ˣ) dy + (1 + y²) eˣ dx = 0 and y(0) = 1, then y(1) equals",
  o: ["1/e", "e", "1", "1/e²"], a: 0,
  s: "Separate: dy/(1 + y²) = −eˣ dx/(1 + e²ˣ). Integrating: tan⁻¹ y = −tan⁻¹(eˣ) + c. At (0, 1): π/4 = −π/4 + c, so c = π/2. Then tan⁻¹ y = π/2 − tan⁻¹(eˣ) = tan⁻¹(e⁻ˣ), so y = e⁻ˣ and y(1) = 1/e." },

{ q: "The general solution of dy/dx = e^(x − y) + x² e^(−y) is",
  o: ["eʸ = eˣ + x² + C", "eʸ = eˣ + x³/3 + C", "e⁻ʸ = eˣ + x³/3 + C", "eʸ = e⁻ˣ + x³/3 + C"], a: 1,
  s: "dy/dx = e⁻ʸ (eˣ + x²), so eʸ dy = (eˣ + x²) dx. Integrating: eʸ = eˣ + x³/3 + C." },

{ q: "The general solution of dy/dx = 2^(y − x) is",
  o: ["2ˣ − 2ʸ = C", "2⁻ˣ + 2⁻ʸ = C", "2⁻ˣ − 2⁻ʸ = C", "2^(y − x) = C"], a: 2,
  s: "dy/dx = 2ʸ/2ˣ, so 2⁻ʸ dy = 2⁻ˣ dx. Integrating: −2⁻ʸ/ln 2 = −2⁻ˣ/ln 2 + c, so 2⁻ˣ − 2⁻ʸ = C." },

{ q: "The general solution of dy/dx + sin((x + y)/2) = sin((x − y)/2) is",
  o: ["ln tan(y/2) + 2 sin(x/2) = C", "ln tan(y/4) − 2 sin(x/2) = C", "ln tan(y/4) + sin(x/2) = C", "ln tan(y/4) + 2 sin(x/2) = C"], a: 3,
  s: "dy/dx = sin((x − y)/2) − sin((x + y)/2) = −2 cos(x/2) sin(y/2). So dy/sin(y/2) = −2 cos(x/2) dx. Integrating: 2 ln tan(y/4) = −4 sin(x/2) + c, i.e. ln tan(y/4) + 2 sin(x/2) = C." },

{ q: "The general solution of dy/dx = √(1 − y²)/√(1 − x²) is",
  o: ["sin⁻¹ x − sin⁻¹ y = C", "sin⁻¹ x + sin⁻¹ y = C", "cos⁻¹ x − sin⁻¹ y = C", "x − y = C"], a: 0,
  s: "dy/√(1 − y²) = dx/√(1 − x²). Integrating: sin⁻¹ y = sin⁻¹ x + c, so sin⁻¹ x − sin⁻¹ y = C." },


]
},

{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: HOMOGENEOUS EQUATIONS ",
    questions: [


/* ======================= SECTION D: HOMOGENEOUS EQUATIONS (9) ======================= */

{ q: "The general solution of dy/dx = (x + y)/x is",
  o: ["y = x(ln|x| + C)", "y = x ln|x| + C", "y = Cx ln x", "y = x + C ln x"], a: 0,
  s: "Put y = vx: v + x dv/dx = 1 + v, so x dv/dx = 1 and dv = dx/x. Then v = ln|x| + C and y = x(ln|x| + C)." },

{ q: "The general solution of dy/dx = (x² + y²)/(xy) is",
  o: ["y² = x² ln|x| + Cx²", "y² = 2x ln|x| + Cx", "y = x ln|x| + Cx", "y² = 2x² ln|x| + Cx²"], a: 3,
  s: "Put y = vx: v + x dv/dx = (1 + v²)/v = 1/v + v, so x dv/dx = 1/v and v dv = dx/x. Then v²/2 = ln|x| + c, i.e. y²/x² = 2 ln|x| + C, so y² = 2x² ln|x| + Cx²." },

{ q: "The general solution of dy/dx = (x − y)/(x + y) is",
  o: ["x² − 2xy − y² = C", "x² + 2xy − y² = C", "x² − 2xy + y² = C", "x² − xy − y² = C"], a: 0,
  s: "Put y = vx: v + x dv/dx = (1 − v)/(1 + v), so x dv/dx = (1 − 2v − v²)/(1 + v). Then (1 + v) dv/(1 − 2v − v²) = dx/x, which integrates to −(1/2) ln|1 − 2v − v²| = ln|x| + c. So x²(1 − 2v − v²) = C, i.e. x² − 2xy − y² = C." },

{ q: "The general solution of dy/dx = y/x + tan(y/x) is",
  o: ["cos(y/x) = Cx", "sin(y/x) = C", "tan(y/x) = Cx", "sin(y/x) = Cx"], a: 3,
  s: "Put y = vx: v + x dv/dx = v + tan v, so x dv/dx = tan v. Then cot v dv = dx/x, giving ln|sin v| = ln|x| + c. So sin(y/x) = Cx." },

{ q: "The solution of x dy − y dx = √(x² + y²) dx for x > 0 is",
  o: ["y + √(x² + y²) = Cx", "y + √(x² + y²) = Cx²", "y − √(x² + y²) = Cx²", "y + √(x² + y²) = C"], a: 1,
  s: "Put y = vx: x² dv = x√(1 + v²) dx (x > 0), so dv/√(1 + v²) = dx/x. Integrating: sinh⁻¹ v = ln x + c, i.e. v + √(1 + v²) = Cx. Multiplying by x: y + √(x² + y²) = Cx²." },

{ q: "The general solution of x dy/dx = y(ln y − ln x + 1) is",
  o: ["y = x e^C", "y = C eˣ", "y = x e^(Cx)", "y = x ln(Cx)"], a: 2,
  s: "Put y = vx: v + x dv/dx = v(ln v + 1), so x dv/dx = v ln v. Then dv/(v ln v) = dx/x, giving ln(ln v) = ln x + c. So ln v = Cx and y = x e^(Cx)." },

{ q: "If dy/dx = (x² + y²)/(2xy), y(1) = 0 and y > 0, then y(2) equals",
  o: ["2", "√3", "1", "√2"], a: 3,
  s: "Put y = vx: v + x dv/dx = (1 + v²)/(2v), so x dv/dx = (1 − v²)/(2v). Then 2v dv/(1 − v²) = dx/x, giving −ln|1 − v²| = ln x + c, i.e. x(1 − v²) = C, which is x² − y² = Cx. At (1, 0): C = 1, so y² = x² − x. Then y(2) = √(4 − 2) = √2." },

{ q: "The general solution of dy/dx = (x + 2y)/(2x − y) is",
  o: ["ln(x² + y²) = 2 tan⁻¹(y/x) + C", "ln(x² + y²) = 4 tan⁻¹(y/x) + C", "ln(x² + y²) = tan⁻¹(y/x) + C", "ln(x² + y²) = 4 tan⁻¹(x/y) + C"], a: 1,
  s: "Put y = vx: v + x dv/dx = (1 + 2v)/(2 − v), so x dv/dx = (1 + v²)/(2 − v). Then (2 − v)dv/(1 + v²) = dx/x, giving 2 tan⁻¹ v − (1/2) ln(1 + v²) = ln x + c. Since ln x + (1/2) ln(1 + v²) = (1/2) ln(x² + y²), this is 2 tan⁻¹(y/x) = (1/2) ln(x² + y²) + c, i.e. ln(x² + y²) = 4 tan⁻¹(y/x) + C." },

{ q: "Which of the following differential equations is homogeneous?",
  o: ["dy/dx = (x + y²)/x", "dy/dx = (x² + y²)/(xy)", "dy/dx = (x² + y)/x", "dy/dx = (x + 1)/y"], a: 1,
  s: "dy/dx = f(x, y) is homogeneous if f(λx, λy) = f(x, y). For (x² + y²)/(xy), replacing x, y by λx, λy gives λ²(x² + y²)/(λ²xy) = the same expression, so it is homogeneous of degree 0. In the other three the terms have different degrees." },


]
},

{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: LINEAR EQUATIONS (INTEGRATING FACTOR) ",
    questions: [


/* ======================= SECTION E: LINEAR EQUATIONS (INTEGRATING FACTOR) (13) ======================= */

{ q: "If dy/dx + y = e⁻ˣ and y(0) = 1, then y(1) equals",
  o: ["2/e", "1/e", "e", "2e"], a: 0,
  s: "I.F. = eˣ, so d(y eˣ)/dx = 1 and y eˣ = x + C. y(0) = 1 gives C = 1, so y = (x + 1)e⁻ˣ. Then y(1) = 2/e." },

{ q: "The general solution of dy/dx + (2/x) y = x² is",
  o: ["y = x³/3 + C/x²", "y = x³/5 + C/x²", "y = x³/5 + C/x", "y = x³/5 + Cx²"], a: 1,
  s: "I.F. = e^(∫2/x dx) = x². So d(x²y)/dx = x⁴ and x²y = x⁵/5 + C. Hence y = x³/5 + C/x²." },

{ q: "If dy/dx + y tan x = sin x and y(0) = 0, then y(π/3) equals",
  o: ["ln 2", "1/2", "−(ln 2)/2", "(ln 2)/2"], a: 3,
  s: "I.F. = e^(∫tan x dx) = sec x. So d(y sec x)/dx = sin x sec x = tan x, and y sec x = −ln|cos x| + C. y(0) = 0 gives C = 0, so y = −cos x ln(cos x). At x = π/3: −(1/2) ln(1/2) = (ln 2)/2." },

{ q: "If x dy/dx + 2y = x² (x ≠ 0) and y(1) = 1, then y(1/2) equals",
  o: ["3/4", "1/16", "49/16", "7/4"], a: 2,
  s: "Divide by x: dy/dx + 2y/x = x. I.F. = x², so d(x²y)/dx = x³ and x²y = x⁴/4 + C. y(1) = 1 gives C = 3/4. So y = x²/4 + 3/(4x²). At x = 1/2: 1/16 + 3/(4 × 1/4) = 1/16 + 3 = 49/16." },

{ q: "The general solution of (1 + x²) dy/dx + 2xy = cot x is",
  o: ["y = (ln|cos x| + C)/(1 + x²)", "y = (ln|sin x| + C)/(1 + x²)", "y = (ln|sin x| + C)(1 + x²)", "y = ln|sin x| + C/(1 + x²)"], a: 1,
  s: "The left side is d[(1 + x²)y]/dx. So (1 + x²)y = ∫ cot x dx = ln|sin x| + C, giving y = (ln|sin x| + C)/(1 + x²)." },

{ q: "The general solution of dy/dx + y cot x = 2 cos x is",
  o: ["y = cos x + C/sin x", "y = sin x + C/sin x", "y = sin x + C sin x", "y = 2 sin x + C/sin x"], a: 1,
  s: "I.F. = e^(∫cot x dx) = sin x. So d(y sin x)/dx = 2 sin x cos x = sin 2x, giving y sin x = sin²x + C. Hence y = sin x + C/sin x." },

{ q: "The general solution of dy/dx = 1/(x + y) is",
  o: ["x = Ce^y + y + 1", "x = Ce^(−y) − y − 1", "x = Ce^y − y − 1", "y = Ce^x − x − 1"], a: 2,
  s: "Take x as the dependent variable: dx/dy = x + y, i.e. dx/dy − x = y. I.F. = e^(−y), so d(x e^(−y))/dy = y e^(−y), which integrates to x e^(−y) = −(y + 1)e^(−y) + C. So x = Ce^y − y − 1." },

{ q: "The general solution of dy/dx = y/(2y ln y + y − x) is",
  o: ["x = y ln y + Cy", "x = y ln y + C/y", "x = 2y ln y + C/y", "x = ln y + C/y"], a: 1,
  s: "Take x as dependent: dx/dy = (2y ln y + y − x)/y = 2 ln y + 1 − x/y, so dx/dy + x/y = 2 ln y + 1. I.F. = y, so d(xy)/dy = 2y ln y + y, giving xy = y² ln y + C. So x = y ln y + C/y." },

{ q: "The integrating factor of the equation x ln x · dy/dx + y = 2 ln x is",
  o: ["x ln x", "ln x", "eˣ", "1/ln x"], a: 1,
  s: "Divide by x ln x: dy/dx + y/(x ln x) = 2/x. I.F. = e^(∫dx/(x ln x)) = e^(ln ln x) = ln x." },

{ q: "The integrating factor of the equation (1 + x²) dy/dx + y = tan⁻¹ x is",
  o: ["tan⁻¹ x", "1 + x²", "eˣ", "e^(tan⁻¹ x)"], a: 3,
  s: "Divide by (1 + x²): dy/dx + y/(1 + x²) = tan⁻¹x/(1 + x²). I.F. = e^(∫dx/(1 + x²)) = e^(tan⁻¹ x)." },

{ q: "The integrating factor of dy/dx + y cot x = 2 cos x is",
  o: ["cos x", "sin x", "cosec x", "tan x"], a: 1,
  s: "I.F. = e^(∫cot x dx) = e^(ln|sin x|) = sin x." },

{ q: "If dy/dx = x + y and y(0) = 0, then y(1) equals",
  o: ["e − 1", "e", "e − 2", "e − 3"], a: 2,
  s: "dy/dx − y = x. I.F. = e⁻ˣ, so d(y e⁻ˣ)/dx = x e⁻ˣ, giving y e⁻ˣ = −(x + 1)e⁻ˣ + C. So y = −x − 1 + Ceˣ. y(0) = 0 gives C = 1, so y = eˣ − x − 1 and y(1) = e − 2." },

{ q: "The general solution of dy/dx + 3y = x e⁻³ˣ is",
  o: ["y = (x²/2 + C) e³ˣ", "y = (x + C) e⁻³ˣ", "y = (x²/2 + C) e⁻³ˣ", "y = (x²/2 + C) e⁻ˣ"], a: 2,
  s: "I.F. = e³ˣ, so d(y e³ˣ)/dx = x, giving y e³ˣ = x²/2 + C. Hence y = (x²/2 + C)e⁻³ˣ." },

]
},

{
title: "UNIT 09 : INTEGRAL CALCULUS ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: APPLICATIONS AND CURVES ",
    questions: [


/* ======================= SECTION F: APPLICATIONS AND CURVES (7) ======================= */

{ q: "The rate of growth of a population is proportional to the population present. If the population doubles in 5 years, then in 15 years it becomes how many times the original?",
  o: ["6", "8", "9", "10"], a: 1,
  s: "dP/dt = kP gives P = P₀eᵏᵗ. Doubling in 5 years means e^(5k) = 2. At 15 years: e^(15k) = (e^(5k))³ = 8. So the population is 8 times the original." },

{ q: "A body at 100°C cools to 70°C in 10 minutes in a room at 20°C. Using Newton's law of cooling, its temperature after a further 10 minutes (20 minutes in all) is",
  o: ["50°C", "51.25°C", "45°C", "55°C"], a: 1,
  s: "T − 20 = 80 e^(−kt). At t = 10: 50 = 80 e^(−10k), so e^(−10k) = 5/8. At t = 20: T − 20 = 80 (5/8)² = 80 × 25/64 = 31.25. So T = 51.25°C." },

{ q: "A curve passes through (1, 1) and the intercept made by its tangent at any point P(x, y) on the y-axis equals the abscissa x of P. Then y(e²) equals",
  o: ["e²", "−e", "−e²", "0"], a: 2,
  s: "The tangent's y-intercept is y − x y′ = x, so dy/dx − y/x = −1. I.F. = 1/x, so d(y/x)/dx = −1/x and y/x = −ln x + C. Through (1, 1): C = 1, so y = x(1 − ln x). Then y(e²) = e²(1 − 2) = −e²." },

{ q: "A curve passes through (3, 4), and the normal at every point of it passes through the origin. The curve is",
  o: ["x² − y² = −7", "xy = 12", "x² + y² = 7", "x² + y² = 25"], a: 3,
  s: "The normal at (x, y) has slope −1/y′ and passes through the origin, so −1/y′ = y/x, giving y′ = −x/y. Then y dy = −x dx, so x² + y² = C. Through (3, 4): C = 25." },

{ q: "The slope of the tangent to a curve at (x, y) is (y − 1)/(x² + x), and the curve passes through (1, 0). Then y(2) equals",
  o: ["−1/3", "1/3", "−2/3", "1"], a: 0,
  s: "dy/(y − 1) = dx/(x(x + 1)) = [1/x − 1/(x + 1)]dx. Integrating: ln|y − 1| = ln|x/(x + 1)| + c, so y − 1 = Cx/(x + 1). Through (1, 0): −1 = C/2, so C = −2. Then y(2) = 1 − 2 × 2/3 = −1/3." },

{ q: "If dy/dx + y = sin x and y(0) = 1, then y(π) equals",
  o: ["1/2 − (3/2)e^(−π)", "1/2 + (3/2)e^(−π)", "1/2 + (3/2)e^(π)", "(3/2)e^(−π)"], a: 1,
  s: "I.F. = eˣ, so d(y eˣ)/dx = eˣ sin x, and y eˣ = eˣ(sin x − cos x)/2 + C. y(0) = 1 gives 1 = −1/2 + C, so C = 3/2. So y = (sin x − cos x)/2 + (3/2)e⁻ˣ. At x = π: (0 + 1)/2 + (3/2)e^(−π)." },

{ q: "The slope of the tangent at any point (x, y) of a curve is 2y/x, and the curve passes through (1, 3). Then y(2) equals",
  o: ["12", "6", "9", "24"], a: 0,
  s: "dy/y = 2 dx/x gives ln y = 2 ln x + c, so y = Cx². Through (1, 3): C = 3, so y = 3x². Then y(2) = 12." },

]
},



{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: STRAIGHT LINES ",
    questions: [

/* ======================= SECTION A: STRAIGHT LINES (20) ======================= */

{ q: "The point which divides the line segment joining (1, 2) and (7, 5) internally in the ratio 2 : 1 is",
  o: ["(3, 3)", "(4, 7/2)", "(13, 8)", "(5, 4)"], a: 3,
  s: "For internal division in the ratio m : n, the point is ((m x₂ + n x₁)/(m + n), (m y₂ + n y₁)/(m + n)). With m = 2, n = 1: ((14 + 1)/3, (10 + 2)/3) = (5, 4)." },

{ q: "The orthocentre of the triangle with vertices (0, 0), (4, 0) and (1, 3) is",
  o: ["(1, 1)", "(5/3, 1)", "(2, 1)", "(1, 3/2)"], a: 0,
  s: "The altitude from (1, 3) to the side on the x-axis is x = 1. The side from (4, 0) to (1, 3) has slope −1, so the altitude from (0, 0) has slope 1: y = x. They meet at (1, 1). (The centroid is (5/3, 1) and the circumcentre is (2, 1).)" },

{ q: "The tangent of the acute angle between the lines 2x + y = 3 and x − 3y = 1 is",
  o: ["7", "1/7", "3", "5"], a: 0,
  s: "The slopes are m₁ = −2 and m₂ = 1/3. tan θ = |(m₁ − m₂)/(1 + m₁m₂)| = |(−2 − 1/3)/(1 − 2/3)| = |(−7/3)/(1/3)| = 7." },

{ q: "The equation of the line through (2, 3) which makes equal non-zero intercepts on the axes is",
  o: ["x + y = 5", "x − y + 1 = 0", "2x + 3y = 13", "3x + 2y = 12"], a: 0,
  s: "A line with equal non-zero intercepts has the form x + y = k. Passing through (2, 3): k = 5. So x + y = 5." },

{ q: "The perpendicular distance of the point (3, 4) from the line 3x − 4y + 5 = 0 is",
  o: ["2/5", "2", "14/5", "1"], a: 0,
  s: "Distance = |3(3) − 4(4) + 5|/√(9 + 16) = |9 − 16 + 5|/5 = 2/5." },

{ q: "The distance between the parallel lines 3x + 4y + 5 = 0 and 3x + 4y − 10 = 0 is",
  o: ["3", "5", "15", "1"], a: 0,
  s: "Distance = |c₁ − c₂|/√(a² + b²) = |5 − (−10)|/5 = 15/5 = 3." },

{ q: "The image (reflection) of the point (1, 0) in the line x − y + 1 = 0 is",
  o: ["(−1, −2)", "(1, −2)", "(2, −1)", "(−1, 2)"], a: 3,
  s: "For the line ax + by + c = 0 with value k = a x₁ + b y₁ + c at the point, the image is (x₁ − 2ak/(a² + b²), y₁ − 2bk/(a² + b²)). Here a = 1, b = −1, c = 1 and k = 2: image = (1 − 2·1·2/2, 0 − 2·(−1)·2/2) = (−1, 2)." },

{ q: "If a, b, c are in A.P., the straight line ax + by + c = 0 always passes through the point",
  o: ["(−1, 2)", "(1, 2)", "(2, −1)", "(1, −2)"], a: 3,
  s: "In an A.P., 2b = a + c, i.e. a − 2b + c = 0. This says that x = 1, y = −2 satisfies ax + by + c = 0 for every such a, b, c. So the line passes through (1, −2)." },

{ q: "The line through the intersection of x + y = 4 and 2x − y = 2 and perpendicular to 3x + 4y = 7 has the equation",
  o: ["3x + 4y − 14 = 0", "4x − 3y − 2 = 0", "4x + 3y − 14 = 0", "3x − 4y + 2 = 0"], a: 1,
  s: "The lines x + y = 4 and 2x − y = 2 meet at (2, 2). The slope of 3x + 4y = 7 is −3/4, so a perpendicular line has slope 4/3. Equation: y − 2 = (4/3)(x − 2), i.e. 4x − 3y − 2 = 0." },

{ q: "The area of the triangle formed by the lines x − y = 0, x + y = 4 and y = 0 is",
  o: ["4", "2", "8", "16"], a: 0,
  s: "The vertices are (0, 0) [x − y = 0 and y = 0], (4, 0) [x + y = 4 and y = 0] and (2, 2) [x − y = 0 and x + y = 4]. Area = (1/2) × base 4 × height 2 = 4." },

{ q: "The locus of the midpoint of a line segment of length 6 whose ends lie on the two coordinate axes is",
  o: ["x² + y² = 9", "x² + y² = 36", "x² + y² = 3", "x² + y² = 18"], a: 0,
  s: "Let the ends be (a, 0) and (0, b) with a² + b² = 36. The midpoint is (x, y) = (a/2, b/2), so a = 2x and b = 2y. Then 4x² + 4y² = 36, i.e. x² + y² = 9." },

{ q: "The equation of the bisector of the acute angle between the lines 3x − 4y + 7 = 0 and 12x + 5y − 2 = 0 is",
  o: ["11x − 3y + 9 = 0", "21x + 77y − 101 = 0", "11x + 3y + 9 = 0", "3x − 11y + 9 = 0"], a: 0,
  s: "The bisectors satisfy (3x − 4y + 7)/5 = ±(12x + 5y − 2)/13. Making c₂ positive (multiply the second line by −1): −12x − 5y + 2. Then a₁a₂ + b₁b₂ = −36 + 20 = −16 < 0, so the acute-angle bisector takes the + sign: 13(3x − 4y + 7) = 5(−12x − 5y + 2), which gives 99x − 27y + 81 = 0, i.e. 11x − 3y + 9 = 0. (Check: the slopes of the lines are 3/4 and −12/5, whose directions are 36.87° and 112.62°, with average 74.74°, and tan 74.74° = 11/3.)" },

{ q: "The points (a, 0), (0, b) and (1, 1) are collinear (ab ≠ 0). Then",
  o: ["1/a + 1/b = 1", "a + b = 1", "ab = 1", "1/a − 1/b = 1"], a: 0,
  s: "The line through (a, 0) and (0, b) is x/a + y/b = 1. The point (1, 1) lies on it iff 1/a + 1/b = 1." },

{ q: "The length of the median from the vertex (0, 0) of the triangle with vertices (0, 0), (4, 0) and (0, 6) is",
  o: ["√13", "13", "5", "√5"], a: 0,
  s: "The median goes to the midpoint of the opposite side, which is (2, 3). Length = √(2² + 3²) = √13." },

{ q: "The equations of the lines through (2, 3) which make an angle of 45° with the line x − y = 1 are",
  o: ["x = 3 and y = 2", "x + y = 5 and x − y = −1", "x = 2 and y = 3", "x = 2 and y = 2"], a: 2,
  s: "The line x − y = 1 has slope 1, i.e. inclination 45°. Lines at 45° to it have inclination 90° or 0°, i.e. a vertical line and a horizontal line. Through (2, 3): x = 2 and y = 3." },

{ q: "The number of straight lines passing through the point (1, 1) at a distance √2 from the origin is",
  o: ["0", "2", "infinitely many", "1"], a: 3,
  s: "The point (1, 1) is itself at distance √2 from the origin. A line through it is at distance √2 from the origin only if it is perpendicular to the line joining the point to the origin (that distance is the maximum). So there is exactly one such line, x + y = 2." },

{ q: "The number of straight lines passing through the point (2, 3) at a distance 1 from the origin is",
  o: ["0", "1", "3", "2"], a: 3,
  s: "The point is at distance √13 > 1 from the origin, so there are exactly two tangent lines from the point to the circle x² + y² = 1. So there are 2 such lines." },

{ q: "The equation of the line with x-intercept 4 and y-intercept −3 is",
  o: ["3x + 4y − 12 = 0", "4x − 3y − 12 = 0", "3x − 4y − 12 = 0", "3x − 4y + 12 = 0"], a: 2,
  s: "Intercept form: x/4 + y/(−3) = 1. Multiply by 12: 3x − 4y = 12, i.e. 3x − 4y − 12 = 0." },

{ q: "The foot of the perpendicular from the point (3, 4) to the line x + y = 3 is",
  o: ["(2, 1)", "(0, 3)", "(1, 2)", "(−1, 4)"], a: 2,
  s: "The value of x + y − 3 at (3, 4) is 4. The foot is (3, 4) − [4/(1² + 1²)](1, 1) = (3 − 2, 4 − 2) = (1, 2)." },

{ q: "The lines x + 2y − 3 = 0, 2x + 3y − 5 = 0 and 3x + ky − 7 = 0 are concurrent. Then k equals",
  o: ["3", "5", "4", "7"], a: 2,
  s: "The first two lines meet where x + 2y = 3 and 2x + 3y = 5, giving x = 1, y = 1. The third line passes through (1, 1): 3 + k − 7 = 0, so k = 4." },


]
},


{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: CIRCLES ",
    questions: [

/* ======================= SECTION B: CIRCLES (17) ======================= */

{ q: "The radius of the circle x² + y² − 6x + 4y − 12 = 0 is",
  o: ["5", "√13", "25", "7"], a: 0,
  s: "The centre is (3, −2). Radius = √(g² + f² − c) = √(9 + 4 + 12) = 5." },

{ q: "The equation of the circle passing through (0, 0), (4, 0) and (0, 6) is",
  o: ["x² + y² + 4x + 6y = 0", "x² + y² − 4x − 6y + 13 = 0", "x² + y² − 4x − 6y = 0", "x² + y² − 8x − 12y = 0"], a: 2,
  s: "Since (0, 0) lies on the circle, c = 0. Substituting (4, 0): 16 + 2g·4 = 0 gives g = −2. Substituting (0, 6): 36 + 2f·6 = 0 gives f = −3. The circle is x² + y² − 4x − 6y = 0." },

{ q: "The equation of the circle having the points (1, 2) and (5, 6) as the ends of a diameter is",
  o: ["x² + y² − 6x − 8y + 17 = 0", "x² + y² − 6x − 8y + 7 = 0", "x² + y² + 6x + 8y + 17 = 0", "x² + y² − 3x − 4y + 17 = 0"], a: 0,
  s: "Diameter form: (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0. So (x − 1)(x − 5) + (y − 2)(y − 6) = 0, which is x² − 6x + 5 + y² − 8y + 12 = 0, i.e. x² + y² − 6x − 8y + 17 = 0." },

{ q: "The values of c for which the line y = x + c touches the circle x² + y² = 8 are",
  o: ["±2√2", "±2", "±4", "±8"], a: 2,
  s: "The line x − y + c = 0 touches the circle if its distance from the centre (0, 0) equals the radius 2√2: |c|/√2 = 2√2, so |c| = 4 and c = ±4." },

{ q: "The length of the tangent from the point (4, 6) to the circle x² + y² − 2x − 4y − 4 = 0 is",
  o: ["4", "16", "√20", "8"], a: 0,
  s: "Length of tangent = √S₁ where S₁ = x₁² + y₁² − 2x₁ − 4y₁ − 4 at (4, 6): 16 + 36 − 8 − 24 − 4 = 16. So the length is 4." },

{ q: "The equation of the tangent to x² + y² = 25 at the point (3, 4) is",
  o: ["4x + 3y = 25", "3x − 4y = 25", "3x + 4y = 25", "3x + 4y = 5"], a: 2,
  s: "The tangent at (x₁, y₁) to x² + y² = a² is x x₁ + y y₁ = a². So 3x + 4y = 25." },

{ q: "The equation of the chord of contact of the tangents drawn from (4, 0) to the circle x² + y² = 4 is",
  o: ["x = 1", "x = 4", "x = 2", "y = 1"], a: 0,
  s: "The chord of contact from (x₁, y₁) is T = 0: x x₁ + y y₁ = a². So 4x = 4, i.e. x = 1." },

{ q: "The radical axis of the circles x² + y² = 9 and x² + y² − 4x + 2y − 3 = 0 is",
  o: ["2x + y − 3 = 0", "2x − y − 3 = 0", "4x − 2y + 12 = 0", "2x − y + 3 = 0"], a: 1,
  s: "The radical axis is S₁ − S₂ = 0: (x² + y² − 9) − (x² + y² − 4x + 2y − 3) = 4x − 2y − 6 = 0, i.e. 2x − y − 3 = 0." },

{ q: "The circles x² + y² = 4 and x² + y² − 6x − 8y + k = 0 cut each other orthogonally. Then k equals",
  o: ["−4", "8", "0", "4"], a: 3,
  s: "Two circles x² + y² + 2g₁x + 2f₁y + c₁ = 0 and x² + y² + 2g₂x + 2f₂y + c₂ = 0 cut orthogonally iff 2(g₁g₂ + f₁f₂) = c₁ + c₂. Here g₁ = f₁ = 0 and c₁ = −4, c₂ = k. So 0 = −4 + k and k = 4." },

{ q: "Two circles pass through the point (1, 2) and touch both the coordinate axes. The sum of their radii is",
  o: ["5", "6", "4", "8"], a: 1,
  s: "A circle in the first quadrant touching both axes has centre (r, r) and radius r. Passing through (1, 2): (1 − r)² + (2 − r)² = r², so r² − 6r + 5 = 0 and r = 1 or 5. The sum of the radii is 6." },

{ q: "The length of the intercept made by the circle x² + y² − 6x − 8y + 9 = 0 on the y-axis is",
  o: ["√7", "6", "2√7", "8"], a: 2,
  s: "Putting x = 0: y² − 8y + 9 = 0. The roots differ by √(64 − 36) = √28 = 2√7. So the intercept has length 2√7. (Equivalently 2√(f² − c) = 2√(16 − 9).)" },

{ q: "The number of common tangents to the circles x² + y² = 9 and (x − 4)² + (y − 3)² = 4 is",
  o: ["2", "3", "4", "1"], a: 1,
  s: "The centres are (0, 0) and (4, 3), at distance 5. The radii are 3 and 2, with r₁ + r₂ = 5 = distance. The circles touch externally, so there are 3 common tangents." },

{ q: "The length of the common chord of the circles x² + y² = 25 and x² + y² − 6x − 16 = 0 is",
  o: ["√91/2", "√91", "9", "2√19"], a: 1,
  s: "The radical axis (the line of the common chord) is S₁ − S₂: 6x − 9 = 0, i.e. x = 3/2. Its distance from the origin (the centre of the first circle) is 3/2. Chord length = 2√(25 − 9/4) = 2√(91/4) = √91." },

{ q: "The equation of the circle passing through the origin and through the points of intersection of x² + y² = 4 and x + y = 2 is",
  o: ["x² + y² + 2x + 2y = 0", "x² + y² − x − y = 0", "x² + y² − 4x − 4y = 0", "x² + y² − 2x − 2y = 0"], a: 3,
  s: "The family is x² + y² − 4 + λ(x + y − 2) = 0. Passing through (0, 0): −4 − 2λ = 0, so λ = −2. The circle is x² + y² − 4 − 2x − 2y + 4 = 0, i.e. x² + y² − 2x − 2y = 0." },

{ q: "The locus of the midpoints of the chords of the circle x² + y² = 16 that pass through the point (4, 0) is",
  o: ["x² + y² − 8x = 0", "x² + y² − 2x = 0", "x² + y² = 4", "x² + y² − 4x = 0"], a: 3,
  s: "If M is the midpoint of a chord through P(4, 0), then OM ⟂ PM (the line from the centre to the chord's midpoint is perpendicular to the chord). So M lies on the circle with diameter OP: x(x − 4) + y² = 0, i.e. x² + y² − 4x = 0." },

{ q: "The equation of the tangent to the circle x² + y² − 2x − 4y − 4 = 0 at the point (4, 2) is",
  o: ["x = 4", "y = 2", "x + y = 6", "3x + 2y = 16"], a: 0,
  s: "The tangent at (x₁, y₁) is x x₁ + y y₁ − (x + x₁) − 2(y + y₁) − 4 = 0. At (4, 2): 4x + 2y − x − 4 − 2y − 4 − 4 = 0, i.e. 3x − 12 = 0, so x = 4. (The centre is (1, 2), on the horizontal line through the point, so the tangent is vertical.)" },

{ q: "The area of the circle x² + y² − 4x + 6y = 3 is",
  o: ["4π", "16π", "25π", "3π"], a: 1,
  s: "The circle is (x − 2)² + (y + 3)² = 3 + 4 + 9 = 16, so r = 4. Area = π r² = 16π." },

]
},


{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: PARABOLA ",
    questions: [

/* ======================= SECTION C: PARABOLA (14) ======================= */

{ q: "The focus and the directrix of the parabola y² = 12x are",
  o: ["(−3, 0) and x = 3", "(3, 0) and x = −3", "(0, 3) and y = −3", "(6, 0) and x = −6"], a: 1,
  s: "y² = 4ax with 4a = 12 gives a = 3. The focus is (a, 0) = (3, 0) and the directrix is x = −a = −3." },

{ q: "The focus of the parabola x² = −16y is",
  o: ["(0, 4)", "(−4, 0)", "(4, 0)", "(0, −4)"], a: 3,
  s: "x² = −4ay with 4a = 16 gives a = 4. The parabola opens downward and the focus is (0, −a) = (0, −4)." },

{ q: "The equation of the parabola with focus (−2, 0) and directrix x = 2 is",
  o: ["y² = 8x", "y² = −8x", "x² = −8y", "y² = −4x"], a: 1,
  s: "A point (x, y) is equidistant from the focus and the directrix: (x + 2)² + y² = (x − 2)². So y² = (x − 2)² − (x + 2)² = −8x." },

{ q: "The equation of the tangent to the parabola y² = 8x having slope 2 is",
  o: ["y = 2x + 2", "y = 2x + 4", "y = 2x + 1/2", "y = 2x + 1"], a: 3,
  s: "For y² = 4ax with a = 2, the tangent with slope m is y = mx + a/m = 2x + 2/2 = 2x + 1." },

{ q: "The equation of the tangent to the parabola y² = 4x at the point (4, 4) is",
  o: ["x + 2y − 12 = 0", "2x − y − 4 = 0", "x − 2y − 4 = 0", "x − 2y + 4 = 0"], a: 3,
  s: "The tangent at (x₁, y₁) to y² = 4ax is y y₁ = 2a(x + x₁). With a = 1 and (4, 4): 4y = 2(x + 4), i.e. x − 2y + 4 = 0." },

{ q: "The equation of the normal to the parabola y² = 4x at the point (1, 2) is",
  o: ["x − y = −1", "x + y = 1", "2x + y = 4", "x + y = 3"], a: 3,
  s: "The tangent slope at (1, 2) is 2a/y₁ = 2/2 = 1. The normal slope is −1. Normal: y − 2 = −(x − 1), i.e. x + y = 3." },

{ q: "One end of a focal chord of the parabola y² = 4x is (4, 4). The other end is",
  o: ["(1/4, 1)", "(4, −4)", "(−1/4, 1)", "(1/4, −1)"], a: 3,
  s: "The point (4, 4) is (t², 2t) with t = 2. For a focal chord, t₁t₂ = −1, so t₂ = −1/2. The other end is (t₂², 2t₂) = (1/4, −1)." },

{ q: "The length of the focal chord of the parabola y² = 4x which is inclined at 45° to the axis is",
  o: ["4", "4√2", "8", "16"], a: 2,
  s: "A focal chord inclined at angle θ to the axis has length 4a/sin²θ. With a = 1 and θ = 45°: 4/(1/2) = 8." },

{ q: "The equation of the chord of the parabola y² = 8x whose midpoint is (4, 2) is",
  o: ["2x + y − 10 = 0", "2x − y − 6 = 0", "x − 2y = 0", "x − y − 2 = 0"], a: 1,
  s: "The chord with midpoint (x₁, y₁) is T = S₁: y y₁ − 4(x + x₁) = y₁² − 8x₁. With (4, 2): 2y − 4x − 16 = 4 − 32 = −28, so 2y − 4x + 12 = 0, i.e. 2x − y − 6 = 0." },

{ q: "The locus of a point which moves so that its distance from (3, 0) equals its distance from the line x = −3 is",
  o: ["y² = 6x", "x² = 12y", "y² = 12x", "y² = 3x"], a: 2,
  s: "(x − 3)² + y² = (x + 3)² gives y² = 12x." },

{ q: "The area bounded by the parabola y² = 4x and its latus rectum is",
  o: ["4/3", "8/3", "16/3", "2"], a: 1,
  s: "The latus rectum is x = 1. By symmetry, Area = 2∫₀¹ 2√x dx = 4 × (2/3) = 8/3." },

{ q: "The line y = x + c touches the parabola y² = 8x. Then c equals",
  o: ["1", "4", "2", "8"], a: 2,
  s: "For y² = 4ax with a = 2, the line y = mx + c is a tangent iff c = a/m. With m = 1: c = 2." },

{ q: "The number of real normals that can be drawn from the point (6, 0) to the parabola y² = 4x is",
  o: ["1", "3", "2", "4"], a: 1,
  s: "The normal with slope m is y = mx − 2m − m³. Passing through (6, 0): 0 = 6m − 2m − m³ = m(4 − m²), so m = 0, 2, −2. That gives 3 real normals." },

{ q: "The coordinates of the point(s) P on the parabola y² = 4x whose distance from the focus is 5 are",
  o: ["(3, ±2√3)", "(4, ±2)", "(5, ±2√5)", "(4, ±4)"], a: 3,
  s: "The focal distance of (x, y) on y² = 4x is x + a = x + 1. Setting x + 1 = 5 gives x = 4, and y² = 16 gives y = ±4." },

]
},


{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: ELLIPSE ",
    questions: [

/* ======================= SECTION D: ELLIPSE (11) ======================= */

{ q: "The eccentricity of the ellipse x²/25 + y²/16 = 1 is",
  o: ["3/5", "4/5", "3/4", "9/25"], a: 0,
  s: "a² = 25, b² = 16, so e = √(1 − b²/a²) = √(1 − 16/25) = 3/5." },

{ q: "The length of the latus rectum of the ellipse 9x² + 16y² = 144 is",
  o: ["9", "3", "9/4", "9/2"], a: 3,
  s: "Dividing by 144: x²/16 + y²/9 = 1, so a = 4, b = 3. Latus rectum = 2b²/a = 18/4 = 9/2." },

{ q: "The equation of the ellipse with foci (±4, 0) and eccentricity 4/5 is",
  o: ["x²/9 + y²/25 = 1", "x²/25 + y²/16 = 1", "x²/25 + y²/9 = 1", "x²/16 + y²/25 = 1"], a: 2,
  s: "ae = 4 with e = 4/5 gives a = 5. Then b² = a²(1 − e²) = 25 × 9/25 = 9. The ellipse is x²/25 + y²/9 = 1." },

{ q: "For any point P on the ellipse x²/36 + y²/20 = 1, the sum of its distances from the two foci is",
  o: ["6", "12", "10", "8"], a: 1,
  s: "The sum of the focal distances of any point on an ellipse is 2a. Here a = 6, so the sum is 12." },

{ q: "The line y = x + c touches the ellipse x²/9 + y²/4 = 1. Then c equals",
  o: ["±5", "±√13", "±√5", "±1"], a: 1,
  s: "The condition for y = mx + c to touch x²/a² + y²/b² = 1 is c² = a²m² + b². With m = 1: c² = 9 + 4 = 13, so c = ±√13." },

{ q: "The equation of the tangent to the ellipse x²/25 + y²/9 = 1 at the point (4, 9/5) is",
  o: ["4x − 5y = 25", "5x + 4y = 25", "4x + 5y = 5", "4x + 5y = 25"], a: 3,
  s: "The tangent at (x₁, y₁) is x x₁/25 + y y₁/9 = 1. With (4, 9/5): 4x/25 + y/5 = 1, i.e. 4x + 5y = 25. (Check: 16/25 + (81/25)/9 = 1.)" },

{ q: "An ellipse with centre at the origin and major axis along the x-axis has eccentricity 1/2 and latus rectum 3. Its equation is",
  o: ["x²/3 + y²/4 = 1", "x²/4 + y²/3 = 1", "x²/16 + y²/12 = 1", "x²/4 + y²/2 = 1"], a: 1,
  s: "b² = a²(1 − 1/4) = 3a²/4. Latus rectum = 2b²/a = 3a/2 = 3, so a = 2 and b² = 3. The ellipse is x²/4 + y²/3 = 1." },

{ q: "The equation of the director circle of the ellipse x²/9 + y²/4 = 1 is",
  o: ["x² + y² = 5", "x² + y² = 9", "x² + y² = 13", "x² + y² = 25"], a: 2,
  s: "The director circle of x²/a² + y²/b² = 1 is x² + y² = a² + b² = 9 + 4 = 13." },

{ q: "The point on the ellipse x²/16 + y²/9 = 1 with eccentric angle π/3 is",
  o: ["(2√3, 3/2)", "(2, 3√3/2)", "(4, 3√3/2)", "(2, 3/2)"], a: 1,
  s: "The point is (a cos θ, b sin θ) = (4 cos 60°, 3 sin 60°) = (2, 3√3/2)." },

{ q: "The locus of a point such that the sum of its distances from (3, 0) and (−3, 0) is 10 is",
  o: ["x²/16 + y²/25 = 1", "x²/25 + y²/9 = 1", "x²/25 + y²/16 = 1", "x²/100 + y²/91 = 1"], a: 2,
  s: "This is an ellipse with foci (±3, 0) and 2a = 10. So a = 5, c = 3 and b² = a² − c² = 16. The locus is x²/25 + y²/16 = 1." },

{ q: "The line y = x + k touches the ellipse x²/4 + y² = 1. Then k equals",
  o: ["±√5", "±5", "±3", "±2"], a: 0,
  s: "With a² = 4, b² = 1 and m = 1: k² = a²m² + b² = 4 + 1 = 5, so k = ±√5." },

]
},


{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: HYPERBOLA ",
    questions: [

/* ======================= SECTION E: HYPERBOLA (11) ======================= */

{ q: "The eccentricity of the hyperbola x²/9 − y²/16 = 1 is",
  o: ["4/3", "5/4", "3/5", "5/3"], a: 3,
  s: "a² = 9, b² = 16. e = √(1 + b²/a²) = √(1 + 16/9) = 5/3." },

{ q: "The equations of the asymptotes of the hyperbola x²/9 − y²/16 = 1 are",
  o: ["3x ± 4y = 0", "x ± y = 0", "4x ± 3y = 0", "16x ± 9y = 0"], a: 2,
  s: "The asymptotes of x²/a² − y²/b² = 1 are y = ±(b/a)x = ±(4/3)x, i.e. 4x ± 3y = 0." },

{ q: "The length of the latus rectum of the hyperbola x²/9 − y²/16 = 1 is",
  o: ["16/3", "32/3", "8/3", "64/3"], a: 1,
  s: "Latus rectum = 2b²/a = 2 × 16/3 = 32/3." },

{ q: "The eccentricity of the rectangular hyperbola x² − y² = a² is",
  o: ["√2", "2", "1", "√3"], a: 0,
  s: "Here a = b, so e = √(1 + b²/a²) = √2." },

{ q: "The line y = x + c touches the hyperbola x²/9 − y²/4 = 1. Then c equals",
  o: ["±√13", "±5", "±1", "±√5"], a: 3,
  s: "The condition for y = mx + c to touch x²/a² − y²/b² = 1 is c² = a²m² − b². With m = 1: c² = 9 − 4 = 5, so c = ±√5." },

{ q: "The equation of the tangent to the hyperbola x²/9 − y²/16 = 1 at the point (5, 16/3) is",
  o: ["5x − 3y = 9", "5x + 3y = 9", "3x − 5y = 9", "5x − 3y = 1"], a: 0,
  s: "The tangent at (x₁, y₁) is x x₁/9 − y y₁/16 = 1. With (5, 16/3): 5x/9 − y/3 = 1, i.e. 5x − 3y = 9. (Check: 25/9 − (256/9)/16 = 25/9 − 16/9 = 1.)" },

{ q: "The equation of the hyperbola with foci (0, ±5) and eccentricity 5/3 is",
  o: ["x²/9 − y²/16 = 1", "y²/9 − x²/16 = 1", "y²/16 − x²/9 = 1", "y²/25 − x²/9 = 1"], a: 1,
  s: "The foci are on the y-axis, so the transverse axis is vertical. ae = 5 with e = 5/3 gives a = 3. Then b² = a²(e² − 1) = 9 × 16/9 = 16. The hyperbola is y²/9 − x²/16 = 1." },

{ q: "For any point P on the hyperbola x²/16 − y²/9 = 1, |PF₁ − PF₂|, where F₁ and F₂ are the foci, equals",
  o: ["4", "8", "6", "10"], a: 1,
  s: "The absolute difference of the focal distances of a point on a hyperbola is the length of the transverse axis, 2a. Here a = 4, so the difference is 8." },

{ q: "The product of the perpendicular distances from any point on the hyperbola x²/9 − y²/16 = 1 to its asymptotes is",
  o: ["16/25", "9/25", "12/5", "144/25"], a: 3,
  s: "For x²/a² − y²/b² = 1 the product is a²b²/(a² + b²). Here a² = 9, b² = 16: 144/25." },

{ q: "The equation of the hyperbola with eccentricity 2 and distance between the foci 16 (transverse axis along the x-axis, centre at the origin) is",
  o: ["x²/48 − y²/16 = 1", "x²/16 − y²/12 = 1", "x²/16 − y²/48 = 1", "x²/64 − y²/192 = 1"], a: 2,
  s: "2ae = 16 with e = 2 gives a = 4. Then b² = a²(e² − 1) = 16 × 3 = 48. The hyperbola is x²/16 − y²/48 = 1." },

{ q: "The conjugate hyperbola of x²/9 − y²/16 = 1 is",
  o: ["x²/16 − y²/9 = 1", "y²/9 − x²/16 = 1", "y²/16 − x²/9 = 1", "x²/9 + y²/16 = 1"], a: 2,
  s: "The conjugate hyperbola of x²/a² − y²/b² = 1 is x²/a² − y²/b² = −1, i.e. y²/b² − x²/a² = 1. Here that is y²/16 − x²/9 = 1." },

]
},


{
title: "UNIT 10 : CO-ORDINATE GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: LOCUS AND MIXED CONIC PROBLEMS ",
    questions: [

/* ======================= SECTION F: LOCUS AND MIXED CONIC PROBLEMS (6) ======================= */

{ q: "The locus of a point P such that the sum of the squares of its distances from (1, 0) and (−1, 0) is 6 is",
  o: ["x² + y² = 4", "x² + y² = 2", "x² + y² = 6", "x² + y² = 3"], a: 1,
  s: "(x − 1)² + y² + (x + 1)² + y² = 6 gives 2x² + 2y² + 2 = 6, so x² + y² = 2." },

{ q: "The locus of a point P such that PA = 2 PB, where A = (0, 0) and B = (3, 0), is",
  o: ["x² + y² + 8x + 12 = 0", "x² + y² − 6x + 9 = 0", "x² + y² − 8x + 12 = 0", "x² + y² − 8x − 12 = 0"], a: 2,
  s: "PA² = 4 PB²: x² + y² = 4[(x − 3)² + y²] = 4x² − 24x + 36 + 4y². So 3x² + 3y² − 24x + 36 = 0, i.e. x² + y² − 8x + 12 = 0 (a circle with centre (4, 0) and radius 2)." },

{ q: "The locus of the midpoints of the chords of the parabola y² = 4x that pass through its vertex is",
  o: ["y² = 8x", "y² = 2x", "y² = x", "x² = 2y"], a: 1,
  s: "A chord from the vertex (0, 0) to (t², 2t) has midpoint (x, y) = (t²/2, t). Then y² = t² = 2x." },

{ q: "The number of points common to the circle x² + y² = 25 and the ellipse x²/25 + y²/9 = 1 is",
  o: ["2", "0", "4", "1"], a: 0,
  s: "From the ellipse, y² = 9(1 − x²/25). Substituting into the circle: x² + 9 − 9x²/25 = 25, so 16x²/25 = 16 and x² = 25. Then x = ±5 and y = 0. The circle and ellipse touch at (±5, 0): 2 common points." },

{ q: "The eccentricity of the conic 5x² + 9y² = 45 is",
  o: ["4/9", "√5/3", "2/3", "3/5"], a: 2,
  s: "Dividing by 45: x²/9 + y²/5 = 1, so a² = 9, b² = 5 and e = √(1 − 5/9) = 2/3." },

{ q: "The locus of the midpoints of the focal chords of the parabola y² = 4x is",
  o: ["y² = 2(x + 1)", "y² = 4(x − 1)", "y² = 2(x − 1)", "y² = x − 1"], a: 2,
  s: "Let (x₁, y₁) be the midpoint. The chord is T = S₁: y y₁ − 2(x + x₁) = y₁² − 4x₁. It passes through the focus (1, 0): −2(1 + x₁) = y₁² − 4x₁, so y₁² = 2x₁ − 2. The locus is y² = 2(x − 1)." },

]
},



{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: POINTS, DISTANCE, SECTION FORMULA, DIRECTION COSINES AND RATIOS ",
    questions: [

/* ======================= SECTION A: POINTS, DISTANCE, SECTION FORMULA, DIRECTION COSINES AND RATIOS (16) ======================= */

{ q: "The distance between the points (1, 2, 3) and (4, 6, 15) is",
  o: ["12", "13", "√145", "15"], a: 1,
  s: "Distance = √[(4 − 1)² + (6 − 2)² + (15 − 3)²] = √(9 + 16 + 144) = √169 = 13." },

{ q: "The point which divides the line segment joining (2, −1, 3) and (−4, 5, −3) internally in the ratio 1 : 2 is",
  o: ["(−2, 3, −1)", "(0, 1, 1)", "(−1, 2, 0)", "(0, 2, 1)"], a: 1,
  s: "Internal section formula with m : n = 1 : 2: x = (1(−4) + 2(2))/3 = 0, y = (1(5) + 2(−1))/3 = 1, z = (1(−3) + 2(3))/3 = 1. The point is (0, 1, 1)." },

{ q: "The point which divides the line segment joining (1, 2, 3) and (4, 5, 6) externally in the ratio 2 : 1 is",
  o: ["(7, 8, 9)", "(3, 4, 5)", "(2, 3, 4)", "(6, 7, 8)"], a: 0,
  s: "External section formula with m : n = 2 : 1: x = (2 × 4 − 1 × 1)/(2 − 1) = 7, y = (2 × 5 − 2)/1 = 8, z = (2 × 6 − 3)/1 = 9. The point is (7, 8, 9)." },

{ q: "The centroid of the triangle with vertices (1, 2, 3), (3, −2, 5) and (5, 6, 1) is",
  o: ["(3, 2, 3)", "(9, 6, 9)", "(3, 3, 2)", "(2, 3, 3)"], a: 0,
  s: "The centroid is the average of the vertices: x = (1 + 3 + 5)/3 = 3, y = (2 − 2 + 6)/3 = 2, z = (3 + 5 + 1)/3 = 3." },

{ q: "One set of direction cosines of the line joining (2, 3, 4) and (4, 5, 3) is",
  o: ["(2, 2, −1)", "(2/9, 2/9, −1/9)", "(1/3, 1/3, −1/6)", "(2/3, 2/3, −1/3)"], a: 3,
  s: "The direction ratios are (4 − 2, 5 − 3, 3 − 4) = (2, 2, −1). The length is √(4 + 4 + 1) = 3, so the direction cosines are (2/3, 2/3, −1/3)." },

{ q: "The direction cosines of the line joining the points (1, 2, 3) and (4, 6, 8) are",
  o: ["(3/(5√2), 4/(5√2), 1/√2)", "(3/50, 4/50, 5/50)", "(3/5, 4/5, 1)", "(3/√50, 4/√50, 5/50)"], a: 0,
  s: "The direction ratios are (3, 4, 5) and √(9 + 16 + 25) = √50 = 5√2. So the direction cosines are (3/(5√2), 4/(5√2), 5/(5√2)) = (3/(5√2), 4/(5√2), 1/√2)." },

{ q: "If (1/2, 1/√2, n) are the direction cosines of a line, then n equals",
  o: ["±1/4", "1/2 only", "±1/2", "±√3/2"], a: 2,
  s: "The sum of the squares of the direction cosines is 1: 1/4 + 1/2 + n² = 1, so n² = 1/4 and n = ±1/2." },

{ q: "A line makes angles 45° and 60° with the positive x-axis and y-axis. The angle it makes with the z-axis can be",
  o: ["60° or 120°", "45° or 135°", "30° or 150°", "90°"], a: 0,
  s: "cos²α + cos²β + cos²γ = 1: 1/2 + 1/4 + cos²γ = 1, so cos²γ = 1/4 and cos γ = ±1/2. So γ = 60° or 120°." },

{ q: "The angle between two lines with direction ratios (1, 2, 2) and (2, 3, 6) is",
  o: ["cos⁻¹(10/21)", "cos⁻¹(20/21)", "cos⁻¹(19/21)", "sin⁻¹(20/21)"], a: 1,
  s: "cos θ = |a₁a₂ + b₁b₂ + c₁c₂|/(√(a₁² + b₁² + c₁²) √(a₂² + b₂² + c₂²)) = |2 + 6 + 12|/(3 × 7) = 20/21. So θ = cos⁻¹(20/21)." },

{ q: "The lines with direction ratios (1, 2, −2) and (2, k, 3) are perpendicular. Then k equals",
  o: ["1", "3", "4", "2"], a: 3,
  s: "Perpendicular lines satisfy a₁a₂ + b₁b₂ + c₁c₂ = 0: 2 + 2k − 6 = 0, so k = 2." },

{ q: "The angle between two lines with direction ratios (1, 1, 0) and (0, 1, 1) is",
  o: ["30°", "60°", "45°", "90°"], a: 1,
  s: "cos θ = |0 + 1 + 0|/(√2 · √2) = 1/2, so θ = 60°." },

{ q: "The locus of the point which is equidistant from (1, 2, 3) and (3, 2, −1) is the plane",
  o: ["x + 2z = 0", "x − 2z = 0", "x − 2z = 2", "2x − z = 0"], a: 1,
  s: "(x − 1)² + (y − 2)² + (z − 3)² = (x − 3)² + (y − 2)² + (z + 1)². Expanding: −2x − 6z + 10 = −6x + 2z + 10, so 4x − 8z = 0, i.e. x − 2z = 0." },

{ q: "The xy-plane divides the line segment joining (1, 2, 3) and (4, 5, −6) in the ratio",
  o: ["2 : 1 internally", "1 : 2 externally", "3 : 1 internally", "1 : 2 internally"], a: 3,
  s: "A point on the xy-plane has z = 0. If the ratio is m : n, then z = (−6m + 3n)/(m + n) = 0, so m/n = 1/2. The ratio is positive, so the division is internal, in the ratio 1 : 2." },

{ q: "The distance of the point (1, 2, 3) from the y-axis is",
  o: ["√13", "√5", "√10", "2"], a: 2,
  s: "The foot of the perpendicular from (x, y, z) to the y-axis is (0, y, 0), so the distance is √(x² + z²) = √(1 + 9) = √10." },

{ q: "The projections of a line segment on the coordinate axes are 3, 4 and 5. The length of the segment is",
  o: ["12", "√47", "5", "5√2"], a: 3,
  s: "The projections are the components of the displacement along the axes, so the length is √(3² + 4² + 5²) = √50 = 5√2." },

{ q: "The points (1, 2, 3), (2, 3, 5) and (3, 4, k) are collinear. Then k equals",
  o: ["6", "8", "7", "9"], a: 2,
  s: "The direction ratios of the first segment are (1, 1, 2). The second segment from (2, 3, 5) to (3, 4, k) has direction ratios (1, 1, k − 5). For collinearity these are proportional, so k − 5 = 2 and k = 7." },

]
},


{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: "  SECTION B: STRAIGHT LINE IN SPACE ",
    questions: [


/* ======================= SECTION B: STRAIGHT LINE IN SPACE (11) ======================= */

{ q: "The equation of the line passing through (1, 2, 3) and (3, 5, 9) is",
  o: ["(x − 1)/3 = (y − 2)/5 = (z − 3)/9", "(x − 1)/2 = (y − 2)/3 = (z − 3)/9", "(x − 1)/2 = (y − 2)/3 = (z − 3)/6", "(x − 3)/1 = (y − 5)/2 = (z − 9)/3"], a: 2,
  s: "The direction ratios are (3 − 1, 5 − 2, 9 − 3) = (2, 3, 6). The line through (1, 2, 3) is (x − 1)/2 = (y − 2)/3 = (z − 3)/6." },

{ q: "The direction ratios of the line x + y + z = 1, 2x − y + 3z = 4 are",
  o: ["(1, 1, 1)", "(4, 1, −3)", "(2, −1, 3)", "(4, −1, −3)"], a: 3,
  s: "The line lies in both planes, so its direction is perpendicular to both normals (1, 1, 1) and (2, −1, 3). The cross product is (1·3 − 1·(−1), 1·2 − 1·3, 1·(−1) − 1·2) = (4, −1, −3)." },

{ q: "The direction ratios of a line perpendicular to both of the lines with direction ratios (1, −1, 1) and (2, 1, −1) are",
  o: ["(1, 0, 1)", "(0, 1, −1)", "(0, 1, 1)", "(1, 1, 0)"], a: 2,
  s: "The cross product (1, −1, 1) × (2, 1, −1) = ((−1)(−1) − 1·1, 1·2 − 1·(−1), 1·1 − (−1)·2) = (0, 3, 3), which has direction ratios (0, 1, 1)." },

{ q: "The foot of the perpendicular from (1, 2, 3) to the line x = y = z is",
  o: ["(1, 2, 3)", "(3, 3, 3)", "(2, 2, 2)", "(0, 0, 0)"], a: 2,
  s: "A point on the line is (t, t, t). The vector from (1, 2, 3) to it is (t − 1, t − 2, t − 3), which must be perpendicular to (1, 1, 1): 3t − 6 = 0, so t = 2. The foot is (2, 2, 2)." },

{ q: "The image of the point (1, 2, 3) in the line x = y = z is",
  o: ["(2, 2, 2)", "(3, 2, 1)", "(3, 3, 3)", "(1, 2, 3)"], a: 1,
  s: "The foot of the perpendicular is (2, 2, 2). The image is 2 × foot − point = (4 − 1, 4 − 2, 4 − 3) = (3, 2, 1)." },

{ q: "The distance of the point (2, 3, 4) from the line (x − 1)/2 = (y − 2)/3 = (z − 3)/6 is",
  o: ["√26/7", "√26", "26/7", "√3"], a: 0,
  s: "Take A = (1, 2, 3) on the line with direction d = (2, 3, 6), |d| = 7. AP = (1, 1, 1). AP × d = (1·6 − 1·3, 1·2 − 1·6, 1·3 − 1·2) = (3, −4, 1), with magnitude √26. Distance = |AP × d|/|d| = √26/7." },

{ q: "The distance between the parallel lines (x − 1)/2 = (y − 2)/3 = (z − 3)/6 and (x − 2)/2 = (y − 4)/3 = (z − 5)/6 is",
  o: ["√41", "√41/7", "41/7", "√7"], a: 1,
  s: "The points (1, 2, 3) and (2, 4, 5) give the vector (1, 2, 2). Its cross product with d = (2, 3, 6) is (2·6 − 2·3, 2·2 − 1·6, 1·3 − 2·2) = (6, −2, −1), with magnitude √41. Distance = √41/|d| = √41/7." },

{ q: "The line (x − 1)/2 = (y − 2)/3 = (z − 3)/6 meets the xy-plane at the point",
  o: ["(0, 0, 1/2)", "(1/2, 0, 0)", "(−1, −1, 0)", "(0, 1/2, 0)"], a: 3,
  s: "Points on the line are (1 + 2t, 2 + 3t, 3 + 6t). On the xy-plane z = 0, so t = −1/2. The point is (1 − 1, 2 − 3/2, 0) = (0, 1/2, 0)." },

{ q: "The lines (x − 1)/1 = (y − 2)/2 = (z − 3)/3 and (x − 3)/1 = (y − 3)/(−1) = (z − 8)/2 intersect at the point",
  o: ["(2, 4, 6)", "(1, 2, 3)", "(3, 3, 8)", "(0, 0, 0)"], a: 0,
  s: "The first line is (1 + t, 2 + 2t, 3 + 3t). The second is (3 + s, 3 − s, 8 + 2s). Equating: 1 + t = 3 + s, 2 + 2t = 3 − s. Adding: 3 + 3t = 6 + 0, so t = 1 and s = −1. The third coordinates agree: 3 + 3 = 6 = 8 − 2. The point is (2, 4, 6)." },

{ q: "The line through (1, 2, 3) parallel to both of the planes x + y + z = 1 and x − y + z = 0 has the equation",
  o: ["(x − 1)/1 = (y − 2)/1 = (z − 3)/1", "(x − 1)/1 = (y − 2)/0 = (z − 3)/(−1)", "(x − 1)/1 = (y − 2)/0 = (z − 3)/1", "(x − 1)/2 = (y − 2)/1 = (z − 3)/(−2)"], a: 1,
  s: "The line is parallel to both planes, so its direction is perpendicular to both normals: (1, 1, 1) × (1, −1, 1) = (1·1 − 1·(−1), 1·1 − 1·1, 1·(−1) − 1·1) = (2, 0, −2), i.e. (1, 0, −1). The line is (x − 1)/1 = (y − 2)/0 = (z − 3)/(−1)." },

{ q: "The line through (1, 2, 3) perpendicular to the plane x + 2y + 3z = 7 is",
  o: ["(x − 1)/1 = (y − 2)/2 = (z − 3)/3", "(x − 1)/3 = (y − 2)/2 = (z − 3)/1", "(x − 1)/1 = (y − 2)/1 = (z − 3)/1", "(x − 1)/2 = (y − 2)/3 = (z − 3)/1"], a: 0,
  s: "A line perpendicular to a plane has direction ratios equal to the normal's components (1, 2, 3). So the line is (x − 1)/1 = (y − 2)/2 = (z − 3)/3." }, 

]
},


{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: PLANE ",
    questions: [


/* ======================= SECTION C: PLANE (18) ======================= */

{ q: "The equation of the plane through (1, 2, 3) with normal direction ratios (2, 3, 1) is",
  o: ["2x + 3y + z = 6", "2x + 3y + z = 0", "2x + 3y + z = 11", "x + 2y + 3z = 11"], a: 2,
  s: "2(x − 1) + 3(y − 2) + 1(z − 3) = 0 gives 2x + 3y + z = 2 + 6 + 3 = 11." },

{ q: "The equation of the plane passing through (1, 0, 0), (0, 2, 0) and (0, 0, 3) is",
  o: ["x + 2y + 3z = 6", "6x + 3y + 2z = 6", "6x + 3y + 2z = 1", "2x + 3y + 6z = 6"], a: 1,
  s: "The intercepts are 1, 2, 3, so x/1 + y/2 + z/3 = 1. Multiply by 6: 6x + 3y + 2z = 6." },

{ q: "The distance of the point (1, 2, 3) from the plane 2x + 3y + 6z − 21 = 0 is",
  o: ["5", "3", "1/7", "5/7"], a: 3,
  s: "Distance = |2(1) + 3(2) + 6(3) − 21|/√(4 + 9 + 36) = |2 + 6 + 18 − 21|/7 = 5/7." },

{ q: "The distance between the parallel planes 2x − 2y + z + 3 = 0 and 4x − 4y + 2z + 5 = 0 is",
  o: ["1/3", "2/3", "1/6", "1/2"], a: 2,
  s: "Write the second plane as 2x − 2y + z + 5/2 = 0. Distance = |3 − 5/2|/√(4 + 4 + 1) = (1/2)/3 = 1/6." },

{ q: "The distance between the parallel planes x + 2y + 2z = 3 and x + 2y + 2z = 12 is",
  o: ["9", "1", "4", "3"], a: 3,
  s: "Distance = |12 − 3|/√(1 + 4 + 4) = 9/3 = 3." },

{ q: "The angle between the planes 2x − y + z = 6 and x + y + 2z = 7 is",
  o: ["30°", "45°", "90°", "60°"], a: 3,
  s: "The angle between planes is the angle between their normals. cos θ = |2·1 + (−1)·1 + 1·2|/(√6 · √6) = 3/6 = 1/2, so θ = 60°." },

{ q: "The equation of the plane through the intersection of x + y + z = 6 and 2x + 3y + 4z + 5 = 0 and passing through (1, 1, 1) is",
  o: ["20x + 23y + 26z + 69 = 0", "3x + 4y + 5z − 12 = 0", "20x + 23y + 26z − 69 = 0", "x + y + z = 3"], a: 2,
  s: "The family is (x + y + z − 6) + λ(2x + 3y + 4z + 5) = 0. At (1, 1, 1): −3 + 14λ = 0, so λ = 3/14. Multiply by 14: 14(x + y + z − 6) + 3(2x + 3y + 4z + 5) = 0, which gives 20x + 23y + 26z − 69 = 0." },

{ q: "The equation of the plane through (1, 2, 3) and parallel to the plane 2x − 3y + z = 5 is",
  o: ["2x − 3y + z = −1", "2x − 3y + z = 5", "2x − 3y + z = 1", "2x − 3y + z = 0"], a: 0,
  s: "A parallel plane has the form 2x − 3y + z = k. Through (1, 2, 3): k = 2 − 6 + 3 = −1." },

{ q: "The equation of the plane through the origin, (1, 1, 1) and (2, 0, 3) is",
  o: ["3x − y − 2z = 0", "3x + y − 2z = 0", "x − 3y + 2z = 0", "3x − y + 2z = 0"], a: 0,
  s: "The normal is (1, 1, 1) × (2, 0, 3) = (1·3 − 1·0, 1·2 − 1·3, 1·0 − 1·2) = (3, −1, −2). The plane through the origin is 3x − y − 2z = 0. (Check (1, 1, 1): 3 − 1 − 2 = 0.)" },

{ q: "The sum of the intercepts made by the plane 2x − 3y + 6z = 12 on the three coordinate axes is",
  o: ["12", "4", "8", "2"], a: 1,
  s: "Dividing by 12: x/6 + y/(−4) + z/2 = 1. The intercepts are 6, −4, 2, with sum 4." },

{ q: "The foot of the perpendicular from (1, 2, 3) to the plane x + y + z = 3 is",
  o: ["(0, 1, 2)", "(−1, 0, 1)", "(1, 1, 1)", "(2, 3, 4)"], a: 0,
  s: "The value of x + y + z − 3 at the point is 3. The foot is (1, 2, 3) − (3/3)(1, 1, 1) = (0, 1, 2)." },

{ q: "The image of the point (1, 2, 3) in the plane x + y + z = 3 is",
  o: ["(−1, 0, 1)", "(0, 1, 2)", "(−1, −2, −3)", "(3, 4, 5)"], a: 0,
  s: "The foot of the perpendicular is (0, 1, 2). The image is 2 × foot − point = (0 − 1, 2 − 2, 4 − 3) = (−1, 0, 1)." },

{ q: "The equation of the plane containing the x-axis and the point (1, 2, 3) is",
  o: ["2y − 3z = 0", "3y + 2z = 0", "3y − 2z = 0", "y + z = 5"], a: 2,
  s: "A plane containing the x-axis has the form by + cz = 0. Through (1, 2, 3): 2b + 3c = 0, so (b, c) = (3, −2). The plane is 3y − 2z = 0." },

{ q: "The equation of the plane containing the line (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and the origin is",
  o: ["x − 2y + z = 0", "x + 2y − z = 0", "2x − y + z = 0", "x − 2y + z = 2"], a: 0,
  s: "The plane contains (1, 2, 3), the origin and the direction (2, 3, 4). Its normal is (1, 2, 3) × (2, 3, 4) = (2·4 − 3·3, 3·2 − 1·4, 1·3 − 2·2) = (−1, 2, −1). The plane is x − 2y + z = 0." },

{ q: "The equation of the plane at a distance 3 from the origin with the normal having direction ratios (2, −1, 2) (on the positive side) is",
  o: ["2x − y + 2z = 9", "2x − y + 2z = 3", "2x − y + 2z = 27", "2x − y + 2z = 1"], a: 0,
  s: "The plane is 2x − y + 2z = k with distance |k|/√(4 + 1 + 4) = |k|/3 = 3, so k = 9." },

{ q: "The equation of the plane through (1, 2, 3) and perpendicular to the planes x + y + z = 1 and 2x − y + z = 0 is",
  o: ["2x + y − 3z − 5 = 0", "2x + y − 3z + 5 = 0", "x + y + z = 6", "2x − y + 3z = 9"], a: 1,
  s: "The normal of the required plane is perpendicular to both given normals: (1, 1, 1) × (2, −1, 1) = (1·1 − 1·(−1), 1·2 − 1·1, 1·(−1) − 1·2) = (2, 1, −3). Through (1, 2, 3): 2 + 2 − 9 = −5, so the plane is 2x + y − 3z = −5, i.e. 2x + y − 3z + 5 = 0." },

{ q: "The distance of the origin from the plane 3x − 4y + 12z = 26 is",
  o: ["2", "26", "13", "26/5"], a: 0,
  s: "Distance = |−26|/√(9 + 16 + 144) = 26/13 = 2." },

{ q: "The equation of the plane through (1, 1, 1) perpendicular to the line x/1 = y/2 = z/3 is",
  o: ["x + 2y + 3z = 3", "3x + 2y + z = 6", "x + y + z = 6", "x + 2y + 3z = 6"], a: 3,
  s: "The normal of the plane is the direction (1, 2, 3) of the line. Through (1, 1, 1): x + 2y + 3z = 1 + 2 + 3 = 6." },

]
},



{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: LINE AND PLANE, COPLANARITY ",
    questions: [


/* ======================= SECTION D: LINE AND PLANE, COPLANARITY (8) ======================= */

{ q: "The line (x − 1)/2 = (y − 2)/1 = (z − 3)/2 meets the plane x + y + z = 11 at the point",
  o: ["(1, 2, 3)", "(5, 4, 7)", "(3, 3, 4)", "(3, 3, 5)"], a: 3,
  s: "Points on the line are (1 + 2t, 2 + t, 3 + 2t). Substituting into the plane: 6 + 5t = 11, so t = 1. The point is (3, 3, 5)." },

{ q: "The angle θ between the line (x − 1)/1 = y/2 = (z + 2)/2 and the plane 2x + 2y + z = 5 is",
  o: ["cos⁻¹(8/9)", "sin⁻¹(8/9)", "sin⁻¹(4/9)", "sin⁻¹(2/3)"], a: 1,
  s: "The line direction is d = (1, 2, 2) and the plane normal is n = (2, 2, 1). sin θ = |d · n|/(|d||n|) = |2 + 4 + 2|/(3 × 3) = 8/9. So θ = sin⁻¹(8/9)." },

{ q: "The line (x − 1)/2 = (y − 2)/3 = (z − 3)/k is parallel to the plane x + y − z = 0. Then k equals",
  o: ["1", "−5", "5", "2"], a: 2,
  s: "A line is parallel to a plane when its direction is perpendicular to the normal: 2·1 + 3·1 + k·(−1) = 0, so k = 5." },

{ q: "The distance of the point (1, −5, 9) from the plane x − y + z = 5 measured along the line x = y = z is",
  o: ["10", "10√3", "5√3", "20√3"], a: 1,
  s: "Points along the direction (1, 1, 1) from (1, −5, 9) are (1 + t, −5 + t, 9 + t). On the plane: (1 + t) − (−5 + t) + (9 + t) = 5, so 15 + t = 5 and t = −10. The distance is |t|√3 = 10√3." },

{ q: "The lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 2)/3 = (y − 3)/4 = (z − 4)/5 are",
  o: ["skew", "intersecting", "parallel", "coincident"], a: 1,
  s: "The direction ratios (2, 3, 4) and (3, 4, 5) are not proportional, so the lines are not parallel. The determinant of (2 − 1, 3 − 2, 4 − 3) = (1, 1, 1), (2, 3, 4), (3, 4, 5) is 1(15 − 16) − 1(10 − 12) + 1(8 − 9) = 0, so the lines are coplanar. Coplanar non-parallel lines intersect (at (−1, −1, −1))." },

{ q: "The lines (x − 1)/1 = (y − 2)/2 = (z − 3)/3 and (x − 3)/1 = (y − k)/1 = (z − 5)/1 are coplanar. Then k equals",
  o: ["4", "2", "3", "5"], a: 0,
  s: "Coplanarity needs the determinant of [(3 − 1, k − 2, 5 − 3), (1, 2, 3), (1, 1, 1)] to vanish. |2 k−2 2; 1 2 3; 1 1 1| = 2(2 − 3) − (k − 2)(1 − 3) + 2(1 − 2) = −2 + 2(k − 2) − 2 = 2k − 8. Setting this to 0 gives k = 4." },

{ q: "The projection of the segment joining (1, 2, 3) and (4, 6, 3) on a line with direction cosines (1/3, 2/3, 2/3) is",
  o: ["11/3", "11", "11/9", "4"], a: 0,
  s: "The segment vector is (3, 4, 0). Projection = (3)(1/3) + (4)(2/3) + 0 = 1 + 8/3 = 11/3." },

{ q: "The distance of the point of intersection of the line (x − 2)/3 = (y + 1)/4 = (z − 2)/12 and the plane x − y + z = 5 from the point (−1, −5, −10) is",
  o: ["12", "14", "10", "13"], a: 3,
  s: "Points on the line are (3t + 2, 4t − 1, 12t + 2). On the plane: (3t + 2) − (4t − 1) + (12t + 2) = 11t + 5 = 5, so t = 0. The point of intersection is (2, −1, 2). Its distance from (−1, −5, −10) is √(9 + 16 + 144) = 13." },

]
},



{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: SKEW LINES AND SHORTEST DISTANCE ",
    questions: [


/* ======================= SECTION E: SKEW LINES AND SHORTEST DISTANCE (5) ======================= */

{ q: "The shortest distance between the lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 2)/3 = (y − 4)/4 = (z − 5)/5 is",
  o: ["√6", "√6/6", "1/6", "2/3"], a: 1,
  s: "Take the points (1, 2, 3) and (2, 4, 5), so the vector joining them is (1, 2, 2). d₁ × d₂ = (2, 3, 4) × (3, 4, 5) = (3·5 − 4·4, 4·3 − 2·5, 2·4 − 3·3) = (−1, 2, −1), with magnitude √6. SD = |(1, 2, 2) · (−1, 2, −1)|/√6 = |−1 + 4 − 2|/√6 = 1/√6 = √6/6." },

{ q: "The lines (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and (x − 2)/3 = (y − 3)/4 = (z − 5)/5 are",
  o: ["intersecting", "parallel", "skew", "coincident"], a: 2,
  s: "The direction ratios (2, 3, 4) and (3, 4, 5) are not proportional, so the lines are not parallel. The determinant of the vector between the points (1, 1, 2) and the directions is |1 1 2; 2 3 4; 3 4 5| = 1(15 − 16) − 1(10 − 12) + 2(8 − 9) = −1 + 2 − 2 = −1 ≠ 0. So the lines are not coplanar, i.e. they are skew." },

{ q: "The shortest distance between the z-axis and the line x + y + 2z − 3 = 0, 2x + 3y + 4z − 4 = 0 is",
  o: ["1", "4", "√2", "2"], a: 3,
  s: "The direction of the line is (1, 1, 2) × (2, 3, 4) = (−2, 0, 1). Put z = 0: x + y = 3 and 2x + 3y = 4 give y = −2, x = 5, so (5, −2, 0) is on the line. The z-axis has direction (0, 0, 1) and passes through the origin. The common perpendicular direction is (0, 0, 1) × (−2, 0, 1) = (0, −2, 0), magnitude 2. SD = |(5, −2, 0) · (0, −2, 0)|/2 = 4/2 = 2." },

{ q: "The shortest distance between the x-axis and the line through (0, 3, 4) with direction ratios (0, 1, 1) is",
  o: ["1", "1/√2", "3", "√2"], a: 1,
  s: "The x-axis has direction (1, 0, 0) and passes through the origin. The cross product (1, 0, 0) × (0, 1, 1) = (0, −1, 1), with magnitude √2. SD = |(0, 3, 4) · (0, −1, 1)|/√2 = |−3 + 4|/√2 = 1/√2." },

{ q: "The shortest distance between the line x = y = z and the line through (2, 2, 0) with direction ratios (1, 0, 1) is",
  o: ["1/√2", "2", "2√2", "√2"], a: 3,
  s: "d₁ = (1, 1, 1), d₂ = (1, 0, 1), d₁ × d₂ = (1·1 − 1·0, 1·1 − 1·1, 1·0 − 1·1) = (1, 0, −1), magnitude √2. The vector from the origin to (2, 2, 0) is (2, 2, 0). SD = |(2, 2, 0) · (1, 0, −1)|/√2 = 2/√2 = √2." },


]
},


{
title: "UNIT 11 : THREE DIMENSIONAL GEOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: MIXED PROBLEMS ",
    questions: [


/* ======================= SECTION F: MIXED PROBLEMS (6) ======================= */

{ q: "The volume of the tetrahedron with vertices (0, 0, 0), (1, 0, 0), (0, 2, 0) and (0, 0, 3) is",
  o: ["3", "6", "1", "2"], a: 2,
  s: "The edges from the origin are along the axes with lengths 1, 2, 3. Volume = (1/6) × 1 × 2 × 3 = 1." },

{ q: "The angle between two diagonals of a cube is",
  o: ["cos⁻¹(1/2)", "cos⁻¹(1/√3)", "cos⁻¹(1/3)", "cos⁻¹(2/3)"], a: 2,
  s: "Take the cube with vertices at (0, 0, 0) and (1, 1, 1). Two diagonals have directions (1, 1, 1) and (1, 1, −1). cos θ = |1 + 1 − 1|/(√3 · √3) = 1/3. So the angle is cos⁻¹(1/3)." },

{ q: "The direction cosines of the normal to the plane 2x − 3y + 6z = 5 are",
  o: ["(2, −3, 6)", "(2/√13, −3/√13, 6/√13)", "(2/7, −3/7, 6/7)", "(2/49, −3/49, 6/49)"], a: 2,
  s: "The normal has direction ratios (2, −3, 6) with length √(4 + 9 + 36) = 7. The direction cosines are (2/7, −3/7, 6/7) (or their negatives)." },

{ q: "The foot of the perpendicular from the origin to the plane 2x + 3y + 6z = 49 is",
  o: ["(14, 21, 42)", "(1, 1, 1)", "(4, 6, 12)", "(2, 3, 6)"], a: 3,
  s: "The foot is k(2, 3, 6) for some k, and it lies on the plane: k(4 + 9 + 36) = 49, so k = 1. The foot is (2, 3, 6)." },

{ q: "A plane meets the coordinate axes at A, B, C and the centroid of triangle ABC is (1, 2, 3). The equation of the plane is",
  o: ["x + 2y + 3z = 1", "x/1 + y/2 + z/3 = 1", "x/9 + y/6 + z/3 = 1", "x/3 + y/6 + z/9 = 1"], a: 3,
  s: "If the intercepts are a, b, c, then A = (a, 0, 0), B = (0, b, 0), C = (0, 0, c) and the centroid is (a/3, b/3, c/3) = (1, 2, 3). So a = 3, b = 6, c = 9, and the plane is x/3 + y/6 + z/9 = 1." },

{ q: "A point moves so that the sum of its distances from (4, 0, 0) and (−4, 0, 0) is always 10. The locus is",
  o: ["x²/25 + y²/16 + z²/16 = 1", "x²/9 + y²/25 + z²/25 = 1", "x²/25 + y²/9 + z²/9 = 1", "x²/100 + y²/84 + z²/84 = 1"], a: 2,
  s: "This is a surface of revolution of an ellipse with foci (±4, 0, 0) and 2a = 10. So a = 5, c = 4, b² = a² − c² = 9. The locus is x²/25 + (y² + z²)/9 = 1." },

]
},


{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: VECTORS, MAGNITUDE, POSITION VECTORS, SECTION FORMULA ",
    questions: [

/* ======================= SECTION A: VECTORS, MAGNITUDE, POSITION VECTORS, SECTION FORMULA (12) ======================= */

{ q: "The magnitude of the vector a = 2i − 3j + 6k is",
  o: ["5", "√43", "11", "7"], a: 3,
  s: "|a| = √(2² + (−3)² + 6²) = √(4 + 9 + 36) = √49 = 7." },

{ q: "A unit vector parallel to 3i − 4j + 12k is",
  o: ["(3i − 4j + 12k)/5", "(3i − 4j + 12k)/13", "(3i − 4j + 12k)/169", "(3i + 4j − 12k)/13"], a: 1,
  s: "|3i − 4j + 12k| = √(9 + 16 + 144) = 13. A unit vector is the vector divided by its magnitude: (3i − 4j + 12k)/13." },

{ q: "A vector of magnitude 6 in the direction of i + 2j + 2k is",
  o: ["i + 2j + 2k", "2i + 4j + 4k", "6i + 12j + 12k", "2i + 2j + 2k"], a: 1,
  s: "|i + 2j + 2k| = 3. The unit vector is (i + 2j + 2k)/3, and multiplying by 6 gives 2(i + 2j + 2k) = 2i + 4j + 4k." },

{ q: "The position vector of the point dividing the join of A(1, 2, 3) and B(4, 5, 6) internally in the ratio 2 : 1 is",
  o: ["2i + 3j + 4k", "5i + 6j + 7k", "3i + 3j + 3k", "3i + 4j + 5k"], a: 3,
  s: "The point is (2b + 1a)/(2 + 1) = [2(4i + 5j + 6k) + (i + 2j + 3k)]/3 = (9i + 12j + 15k)/3 = 3i + 4j + 5k." },

{ q: "The length of the vector AB, where A = (1, −2, 3) and B = (3, 0, −1), is",
  o: ["√24 + 2", "2√6", "√6", "24"], a: 1,
  s: "AB = (3 − 1)i + (0 + 2)j + (−1 − 3)k = 2i + 2j − 4k. |AB| = √(4 + 4 + 16) = √24 = 2√6." },

{ q: "The points with position vectors i + 2j + 3k, 3i + 4j + 7k and −3i − 2j − 5k are",
  o: ["vertices of a right-angled triangle", "vertices of an equilateral triangle", "collinear", "vertices of an isosceles triangle"], a: 2,
  s: "Let A = (1, 2, 3), B = (3, 4, 7), C = (−3, −2, −5). AB = (2, 2, 4) and AC = (−4, −4, −8) = −2 AB. The vectors are parallel and share the point A, so the points are collinear." },

{ q: "The vectors a = 2i − j + k and b = λi + 3j + μk are parallel. Then λ + μ equals",
  o: ["9", "−3", "−9", "3"], a: 2,
  s: "Parallel vectors satisfy b = t a. Comparing j-components: 3 = −t, so t = −3. Then λ = 2t = −6 and μ = t = −3. So λ + μ = −9." },

{ q: "If |a| = 2, |b| = 3 and the angle between a and b is 60°, then |a + b| equals",
  o: ["√13", "5", "√19", "√7"], a: 2,
  s: "|a + b|² = |a|² + |b|² + 2|a||b| cos 60° = 4 + 9 + 2 × 2 × 3 × 1/2 = 19. So |a + b| = √19." },

{ q: "ABCD is a parallelogram with A = (1, 2, 3), B = (2, 3, 5) and C = (4, 5, 7). The position vector of D is",
  o: ["5i + 6j + 9k", "i + 2j + 3k", "3i + 4j + 6k", "3i + 4j + 5k"], a: 3,
  s: "In a parallelogram the diagonals bisect each other, so A + C = B + D. D = A + C − B = (1 + 4 − 2, 2 + 5 − 3, 3 + 7 − 5) = (3, 4, 5)." },

{ q: "If a = i + 2j − k and b = 2i − j + 3k, then |2a − b| equals",
  o: ["5", "√50 + 1", "5√2", "7"], a: 2,
  s: "2a − b = (2 − 2)i + (4 + 1)j + (−2 − 3)k = 5j − 5k. |2a − b| = √(25 + 25) = 5√2." },

{ q: "The angle that the vector i + j + k makes with the x-axis is",
  o: ["cos⁻¹(1/3)", "cos⁻¹(1/√3)", "45°", "60°"], a: 1,
  s: "cos α = (a · i)/|a| = 1/√3. So α = cos⁻¹(1/√3)." },

{ q: "A vector of magnitude 6 which is equally inclined to the three coordinate axes (with positive components) is",
  o: ["2(i + j + k)", "6(i + j + k)", "√3(i + j + k)", "2√3(i + j + k)"], a: 3,
  s: "A vector equally inclined to the axes with positive components is t(i + j + k) with magnitude t√3 = 6, so t = 6/√3 = 2√3. The vector is 2√3(i + j + k)." },

]
},



{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: SCALAR (DOT) PRODUCT  ",
    questions: [

/* ======================= SECTION B: SCALAR (DOT) PRODUCT (12) ======================= */

{ q: "If a = 2i + 3j − k and b = i − 2j + 4k, then a · b equals",
  o: ["−8", "8", "0", "−6"], a: 0,
  s: "a · b = 2(1) + 3(−2) + (−1)(4) = 2 − 6 − 4 = −8." },

{ q: "The angle between the vectors i + j and j + k is",
  o: ["60°", "30°", "45°", "90°"], a: 0,
  s: "cos θ = (i + j) · (j + k)/(√2 · √2) = 1/2. So θ = 60°." },

{ q: "The angle between the vectors i − 2j + 3k and 3i − 2j + k is",
  o: ["cos⁻¹(1/7)", "cos⁻¹(5/7)", "cos⁻¹(3/7)", "cos⁻¹(10/7)"], a: 1,
  s: "a · b = 3 + 4 + 3 = 10, |a|² = 1 + 4 + 9 = 14 and |b|² = 14. cos θ = 10/14 = 5/7." },

{ q: "The projection of a = 2i + 3j − k on b = i + 2j + 2k is",
  o: ["6", "2/3", "2", "6/√14"], a: 2,
  s: "Projection = (a · b)/|b| = (2 + 6 − 2)/3 = 6/3 = 2." },

{ q: "The vectors 2i + λj + k and i − 2j + 3k are perpendicular. Then λ equals",
  o: ["−5/2", "2", "5/2", "1/2"], a: 2,
  s: "Perpendicular vectors have zero dot product: 2 − 2λ + 3 = 0, so λ = 5/2." },

{ q: "If a, b, c are unit vectors with a + b + c = 0, then a · b + b · c + c · a equals",
  o: ["−3/2", "3/2", "−3", "0"], a: 0,
  s: "0 = |a + b + c|² = |a|² + |b|² + |c|² + 2(a · b + b · c + c · a) = 3 + 2S. So S = −3/2." },

{ q: "If |a + b| = |a − b| for two non-zero vectors a and b, then the angle between them is",
  o: ["0°", "90°", "60°", "180°"], a: 1,
  s: "|a + b|² − |a − b|² = 4 a · b = 0, so a · b = 0 and the vectors are perpendicular." },

{ q: "A force F = 2i + 3j + 4k moves a particle from (1, 1, 1) to (3, 3, 3). The work done is",
  o: ["9", "24", "18", "12"], a: 2,
  s: "The displacement is (2, 2, 2). Work = F · d = 2(2) + 3(2) + 4(2) = 18." },

{ q: "The adjacent sides of a parallelogram are a = 3i + 4j and b = 4i − 3j. The angle between its diagonals is",
  o: ["60°", "90°", "45°", "0°"], a: 1,
  s: "The diagonals are a + b = 7i + j and a − b = −i + 7j. Their dot product is −7 + 7 = 0, so they are perpendicular. (|a| = |b| = 5, so the parallelogram is a rhombus.)" },

{ q: "If |a| = 5 and |b| = 3, then (a + b) · (a − b) equals",
  o: ["34", "16", "8", "−16"], a: 1,
  s: "(a + b) · (a − b) = |a|² − |b|² = 25 − 9 = 16." },

{ q: "The vector a = 3i + 4j makes an angle with the x-axis equal to",
  o: ["cos⁻¹(4/5)", "cos⁻¹(3/4)", "45°", "cos⁻¹(3/5)"], a: 3,
  s: "cos α = a · i/|a| = 3/5, so α = cos⁻¹(3/5)." },

{ q: "The unit vector along the internal bisector of the angle between 3i + 4j and 5i − 12j is",
  o: ["(8i − j)/√65", "(8i + j)/√65", "(i − 8j)/√65", "(8i − j)/65"], a: 0,
  s: "The bisector direction is the sum of the unit vectors: (3i + 4j)/5 + (5i − 12j)/13 = (64i − 8j)/65 ∝ (8i − j). Its magnitude is √65, so the unit vector is (8i − j)/√65." },

]
},



{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: VECTOR (CROSS) PRODUCT ",
    questions: [

/* ======================= SECTION C: VECTOR (CROSS) PRODUCT (13) ======================= */

{ q: "If a = i + 2j + 3k and b = 2i − j + k, then a × b equals",
  o: ["5i − 5j + 5k", "−5i + 5j + 5k", "i + j − k", "5i + 5j − 5k"], a: 3,
  s: "a × b = (2·1 − 3·(−1))i − (1·1 − 3·2)j + (1·(−1) − 2·2)k = 5i + 5j − 5k." },

{ q: "The area of the parallelogram with adjacent sides a = i + 2j + 3k and b = 2i − j + k is",
  o: ["15", "√75 + 1", "5√3", "5"], a: 2,
  s: "Area = |a × b| = |5i + 5j − 5k| = 5√3." },

{ q: "The area of the triangle with vertices A(1, 1, 1), B(1, 2, 3) and C(2, 3, 1) is",
  o: ["√21", "21/2", "√42", "√21/2"], a: 3,
  s: "AB = (0, 1, 2) and AC = (1, 2, 0). AB × AC = (1·0 − 2·2, 2·1 − 0·0, 0·2 − 1·1) = (−4, 2, −1), with magnitude √21. Area = (1/2)√21." },

{ q: "A unit vector perpendicular to both i + j + k and i − j + 2k is",
  o: ["(3i − j − 2k)/14", "(i + j + k)/√3", "(3i − j − 2k)/√14", "(3i + j + 2k)/√14"], a: 2,
  s: "The cross product (i + j + k) × (i − j + 2k) = (1·2 − 1·(−1))i − (1·2 − 1·1)j + (1·(−1) − 1·1)k = 3i − j − 2k, with magnitude √14. A unit vector is (3i − j − 2k)/√14 (the negative is also valid)." },

{ q: "If |a| = 2, |b| = 3 and a · b = 4, then |a × b| equals",
  o: ["2√5", "√20 + 1", "4", "6"], a: 0,
  s: "|a × b|² = |a|²|b|² − (a · b)² = 36 − 16 = 20. So |a × b| = 2√5." },

{ q: "If |a| = 3, |b| = 5 and a · b = 12, then |a × b| equals",
  o: ["3", "9", "15", "√3"], a: 1,
  s: "|a × b|² = |a|²|b|² − (a · b)² = 225 − 144 = 81. So |a × b| = 9." },

{ q: "The diagonals of a parallelogram are 3i + j − 2k and i − 3j + 4k. Its area is",
  o: ["10√3", "√300", "15", "5√3"], a: 3,
  s: "Area = (1/2)|d₁ × d₂|. d₁ × d₂ = (1·4 − (−2)(−3), (−2)(1) − 3·4, 3(−3) − 1·1) = (−2, −14, −10), with magnitude √300 = 10√3. Area = 5√3." },

{ q: "The moment (torque) of the force F = 2i − j + 3k about the origin, acting at the point with position vector r = i + j + k, is",
  o: ["4i − j − 3k", "−4i + j + 3k", "4i + j + 3k", "3i − j − 4k"], a: 0,
  s: "Torque = r × F = (1·3 − 1·(−1))i − (1·3 − 1·2)j + (1·(−1) − 1·2)k = 4i − j − 3k." },

{ q: "If |a × b| = a · b for two non-zero vectors a and b, then the angle between them is",
  o: ["30°", "60°", "90°", "45°"], a: 3,
  s: "|a||b| sin θ = |a||b| cos θ gives tan θ = 1, so θ = 45°." },

{ q: "The area of the triangle with vertices (1, 0, 0), (0, 1, 0) and (0, 0, 1) is",
  o: ["1/2", "√3/2", "√3", "3/2"], a: 1,
  s: "AB = (−1, 1, 0) and AC = (−1, 0, 1). AB × AC = (1, 1, 1), with magnitude √3. Area = √3/2." },

{ q: "A vector perpendicular to the plane through the points (1, 0, 0), (0, 1, 0) and (0, 0, 1) is",
  o: ["i + j + k", "i − j + k", "i + j − k", "2i + j + k"], a: 0,
  s: "AB = (−1, 1, 0) and AC = (−1, 0, 1). AB × AC = (1·1 − 0·0, 0·(−1) − (−1)·1, (−1)·0 − 1·(−1)) = (1, 1, 1). So i + j + k is perpendicular to the plane." },

{ q: "If a × b = c × d and a × c = b × d, then",
  o: ["a − d is parallel to b − c", "a − d is perpendicular to b − c", "a + d is parallel to b + c", "a − b is parallel to c − d"], a: 0,
  s: "(a − d) × (b − c) = a × b − a × c − d × b + d × c = a × b − a × c + b × d − c × d. Using a × b = c × d and a × c = b × d this equals c × d − b × d + b × d − c × d = 0. So a − d is parallel to b − c." },

{ q: "If a × b = b × c ≠ 0, where a, b, c are vectors, then",
  o: ["a + c is parallel to b", "a + c is perpendicular to b", "a − c is parallel to b", "a = c"], a: 0,
  s: "a × b = b × c gives a × b + c × b = 0, i.e. (a + c) × b = 0. So a + c is parallel to b." }, 


]
},



{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: SCALAR TRIPLE PRODUCT, COPLANARITY  ",
    questions: [

/* ======================= SECTION D: SCALAR TRIPLE PRODUCT, COPLANARITY (9) ======================= */

{ q: "If a = 2i − j + k, b = i + 2j − k and c = i + j + 3k, then the scalar triple product [a b c] equals",
  o: ["17", "15", "−17", "7"], a: 0,
  s: "[a b c] is the determinant |2 −1 1; 1 2 −1; 1 1 3| = 2(6 + 1) + 1(3 + 1) + 1(1 − 2) = 14 + 4 − 1 = 17." },

{ q: "The volume of the parallelepiped with edges i + j, j + k and k + i is",
  o: ["1", "3", "2", "1/2"], a: 2,
  s: "Volume = |det [1 1 0; 0 1 1; 1 0 1]| = |1(1) − 1(0 − 1) + 0| = 2." },

{ q: "The volume of the tetrahedron whose edges from a vertex are i + j, j + k and k + i is",
  o: ["2", "1/6", "2/3", "1/3"], a: 3,
  s: "The volume of the parallelepiped is 2 (the triple product). A tetrahedron has 1/6 of that volume: 2/6 = 1/3." },

{ q: "The vectors a = 2i − j + k, b = i + 2j − 3k and c = 3i + λj + 5k are coplanar. Then λ equals",
  o: ["4", "−2", "−4", "2"], a: 2,
  s: "Coplanarity means [a b c] = 0: |2 −1 1; 1 2 −3; 3 λ 5| = 2(10 + 3λ) + 1(5 + 9) + 1(λ − 6) = 20 + 6λ + 14 + λ − 6 = 7λ + 28. Setting this to 0 gives λ = −4." },

{ q: "The four points A(1, 2, 3), B(2, 4, 4), C(3, 5, 6) and D(0, 1, k) are coplanar. Then k equals",
  o: ["2", "1", "0", "3"], a: 1,
  s: "AB = (1, 2, 1), AC = (2, 3, 3) and AD = (−1, −1, k − 3). Coplanarity needs [AB AC AD] = 0: |1 2 1; 2 3 3; −1 −1 k−3| = 1(3(k − 3) + 3) − 2(2(k − 3) + 3) + 1(−2 + 3) = (3k − 6) − (4k − 6) + 1 = 1 − k. So k = 1." },

{ q: "If [a b c] = 5, then [a + b, b + c, c + a] equals",
  o: ["10", "5", "0", "15"], a: 0,
  s: "[a + b, b + c, c + a] = 2[a b c], by expanding the determinant of the coefficient matrix [1 1 0; 0 1 1; 1 0 1], whose value is 2. So the result is 10." },

{ q: "If [a b c] = 3, then [a × b, b × c, c × a] equals",
  o: ["9", "3", "27", "6"], a: 0,
  s: "[a × b, b × c, c × a] = [a b c]². So the value is 3² = 9." },

{ q: "The volume of the parallelepiped with edges 2i − 3j + 4k, i + 2j − k and 3i − j + 2k is",
  o: ["−7", "14", "7", "21"], a: 2,
  s: "The scalar triple product is |2 −3 4; 1 2 −1; 3 −1 2| = 2(4 − 1) + 3(2 + 3) + 4(−1 − 6) = 6 + 15 − 28 = −7. The volume is the absolute value, 7." },

{ q: "Let a, b, c be three non-coplanar vectors. The vectors a − 2b + 3c, −2a + 3b − 4c and a − 3b + 5c are",
  o: ["non-coplanar", "parallel to each other", "mutually perpendicular", "coplanar"], a: 3,
  s: "The vectors are linear combinations of a, b, c with coefficient rows (1, −2, 3), (−2, 3, −4), (1, −3, 5). The determinant is 1(15 − 12) + 2(−10 + 4) + 3(6 − 3) = 3 − 12 + 9 = 0. For non-coplanar a, b, c, a zero determinant means the three combinations are coplanar." },



]
},



{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: VECTOR TRIPLE PRODUCT AND IDENTITIES ",
    questions: [

/* ======================= SECTION E: VECTOR TRIPLE PRODUCT AND IDENTITIES (6) ======================= */

{ q: "If a = i + j, b = j + k and c = i + k, then a × (b × c) equals",
  o: ["−i + j", "i − j", "i + j", "−i − j"], a: 0,
  s: "Use a × (b × c) = (a · c)b − (a · b)c. a · c = 1 and a · b = 1, so the result is b − c = (j + k) − (i + k) = −i + j." },

{ q: "For a = i + j, b = j + k and c = i + k, (a × b) × c equals",
  o: ["i − k", "−i + k", "i + k", "−i − k"], a: 1,
  s: "Use (a × b) × c = (a · c)b − (b · c)a. a · c = 1 and b · c = 1, so the result is b − a = (j + k) − (i + j) = −i + k." },

{ q: "The value of i × (j × k) + j × (k × i) + k × (i × j) is",
  o: ["i + j + k", "3", "−(i + j + k)", "0"], a: 3,
  s: "j × k = i, so i × i = 0. Similarly k × i = j gives j × j = 0, and i × j = k gives k × k = 0. The sum is 0. (This is the Jacobi identity.)" },

{ q: "For a = i and b = j, the vector (a − b) × (a + b) equals",
  o: ["−2k", "0", "2k", "2i"], a: 2,
  s: "(a − b) × (a + b) = a × b + a × a − b × a − b × b = 2(a × b) = 2(i × j) = 2k." },

{ q: "If a, b, c are mutually perpendicular unit vectors, then |a + b + c| equals",
  o: ["3", "1", "√3", "√2"], a: 2,
  s: "|a + b + c|² = |a|² + |b|² + |c|² + 2(a · b + b · c + c · a) = 3 + 0 = 3. So |a + b + c| = √3." },

{ q: "For any three vectors, a × (b × c) + b × (c × a) + c × (a × b) equals",
  o: ["a + b + c", "the zero vector", "[a b c]", "a × b × c"], a: 1,
  s: "Expanding each term by a × (b × c) = (a · c)b − (a · b)c, the six terms cancel in pairs: (a · c)b − (a · b)c + (b · a)c − (b · c)a + (c · b)a − (c · a)b = 0." },  

]
},



{
title: "UNIT 12 : VECTOR ALGEBRA ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: MIXED JEE-STYLE PROBLEMS ",
    questions: [

/* ======================= SECTION F: MIXED JEE-STYLE PROBLEMS (7) ======================= */

{ q: "Let a = 2i + j − 2k and b = i + j. If c is a vector with a · c = |c|, |c − a| = 2√2 and the angle between a × b and c is 30°, then |(a × b) × c| equals",
  o: ["2/3", "3", "1/2", "3/2"], a: 3,
  s: "|a| = 3. From |c − a|² = |c|² − 2a · c + |a|² = |c|² − 2|c| + 9 = 8, we get (|c| − 1)² = 0, so |c| = 1. Also a × b = (2, −2, 1), with magnitude 3. |(a × b) × c| = |a × b||c| sin 30° = 3 × 1 × 1/2 = 3/2." },

{ q: "If a = i + j and b = i − j, and 5i + j = αa + βb, then αβ equals",
  o: ["5", "3", "6", "2"], a: 2,
  s: "α + β = 5 (i-component) and α − β = 1 (j-component). Adding: α = 3, and β = 2. So αβ = 6." },

{ q: "A unit vector makes angles π/3 and π/4 with the x-axis and y-axis. The (acute) angle it makes with the z-axis is",
  o: ["π/6", "π/3", "π/4", "π/2"], a: 1,
  s: "cos²(π/3) + cos²(π/4) + cos²γ = 1: 1/4 + 1/2 + cos²γ = 1, so cos γ = 1/2 and γ = π/3." },

{ q: "If a, b, c are vectors with |a| = 1, |b| = 2, |c| = 3 and a + b + c = 0, then a · b + b · c + c · a equals",
  o: ["7", "−14", "0", "−7"], a: 3,
  s: "0 = |a + b + c|² = 1 + 4 + 9 + 2S, so S = −14/2 = −7." },

{ q: "If the vectors a, b, c are such that a · b = a · c, a ≠ 0 and a × b = a × c, then",
  o: ["b is perpendicular to c", "b = c", "b = −c", "b is parallel to a"], a: 1,
  s: "a × (b − c) = 0 means b − c is parallel to a, and a · (b − c) = 0 means b − c is perpendicular to a. A vector that is both parallel and perpendicular to a non-zero vector is the zero vector. So b = c." },

{ q: "Two vectors a and b have |a| = 1, |b| = 1 and the angle between them is 90°. Then |a × b| equals",
  o: ["1", "0", "√2", "1/2"], a: 0,
  s: "|a × b| = |a||b| sin 90° = 1." },

{ q: "If a and b are two unit vectors and θ is the angle between them, then |a + b| is",
  o: ["2 cos(θ/2)", "2 sin(θ/2)", "cos θ", "1 + cos θ"], a: 0,
  s: "|a + b|² = 1 + 1 + 2 cos θ = 2(1 + cos θ) = 4 cos²(θ/2). So |a + b| = 2 cos(θ/2) (for 0 ≤ θ ≤ π)." }, 


]
},



{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: STATISTICS (MEASURES OF DISPERSION) ",
    questions: [

/* ======================= SECTION A: STATISTICS (MEASURES OF DISPERSION) (17) ======================= */

{ q: "The variance of the first 10 natural numbers 1, 2, ..., 10 is",
  o: ["33/4", "33/2", "11/2", "99/4"], a: 0,
  s: "For the first n natural numbers, variance = (n² − 1)/12. With n = 10: 99/12 = 33/4." },

{ q: "The mean deviation about the mean of the data 2, 4, 6, 8, 10 is",
  o: ["3", "12", "12/5", "24/5"], a: 2,
  s: "Mean = 30/5 = 6. The absolute deviations are 4, 2, 0, 2, 4, with sum 12. Mean deviation = 12/5." },

{ q: "The mean deviation about the median of the data 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21 is",
  o: ["29/5", "6", "58/11", "29/6"], a: 2,
  s: "Arranged in order: 3, 3, 4, 5, 7, 9, 10, 12, 18, 19, 21. The median (6th value) is 9. The absolute deviations are 6, 6, 5, 4, 2, 0, 1, 3, 9, 10, 12, with sum 58. Mean deviation = 58/11." },

{ q: "The standard deviation of the data 2, 4, 6, 8, 10 is",
  o: ["8", "4", "2", "2√2"], a: 3,
  s: "Mean = 6. The squared deviations are 16, 4, 0, 4, 16, with sum 40. Variance = 40/5 = 8, so SD = √8 = 2√2." },

{ q: "The variance of the data 10, 20, 30, 40, 50 is",
  o: ["100", "400", "20", "200"], a: 3,
  s: "Mean = 30. Squared deviations: 400, 100, 0, 100, 400, with sum 1000. Variance = 1000/5 = 200." },

{ q: "The variance of the first 10 even natural numbers 2, 4, ..., 20 is",
  o: ["33/4", "66", "132", "33"], a: 3,
  s: "Each number is twice the corresponding natural number, so the variance is 4 times that of 1, ..., 10, i.e. 4 × 33/4 = 33." },

{ q: "If the variance of the observations x₁, x₂, ..., xₙ is 9, then the variance of 2xᵢ + 5 is",
  o: ["18", "36", "23", "81"], a: 1,
  s: "Adding a constant does not change the variance, and multiplying by 2 multiplies the variance by 2² = 4. So the variance is 4 × 9 = 36." },

{ q: "The standard deviation of x₁, ..., xₙ is 4. The standard deviation of 3xᵢ + 2 is",
  o: ["14", "12", "36", "4"], a: 1,
  s: "SD scales by |3| = 3 and is unaffected by the shift of 2. So the SD is 3 × 4 = 12." },

{ q: "The mean of 10 observations is 10 and their variance is 4. The sum of the squares of the observations is",
  o: ["1040", "1000", "1004", "104"], a: 0,
  s: "Variance = (Σxᵢ²)/n − (mean)². So Σxᵢ²/10 = 4 + 100 = 104, giving Σxᵢ² = 1040." },

{ q: "Group A has 10 observations with mean 20 and variance 4. Group B has 15 observations with mean 30 and variance 9. The variance of the combined 25 observations is",
  o: ["31", "26", "13", "40"], a: 0,
  s: "Combined mean = (10 × 20 + 15 × 30)/25 = 26. Combined variance = [10(4 + (20 − 26)²) + 15(9 + (30 − 26)²)]/25 = [10 × 40 + 15 × 25]/25 = 775/25 = 31." },

{ q: "The mean of 100 observations is 50. It is later found that an observation 80 was wrongly read as 30. The correct mean is",
  o: ["50", "49.5", "50.5", "51"], a: 2,
  s: "The sum was 5000. The corrected sum is 5000 − 30 + 80 = 5050. The correct mean is 5050/100 = 50.5." },

{ q: "The mean and variance of 7 observations are 8 and 16. If five of the observations are 2, 4, 10, 12, 14, then the product of the remaining two observations is",
  o: ["48", "24", "36", "64"], a: 0,
  s: "The total of the 7 observations is 56, and the five known add to 42, so the remaining two (x, y) have x + y = 14. Variance gives Σx²/7 − 64 = 16, so Σx² = 560. The known squares sum to 4 + 16 + 100 + 144 + 196 = 460, so x² + y² = 100. Then xy = [(x + y)² − (x² + y²)]/2 = (196 − 100)/2 = 48. (The observations are 6 and 8.)" },

{ q: "The mean and variance of 5 observations are 4 and 5.2. If three of the observations are 1, 2 and 6, the other two observations are",
  o: ["3 and 8", "4 and 7", "5 and 6", "2 and 9"], a: 1,
  s: "The total is 20, so the other two (x, y) satisfy x + y = 20 − 9 = 11. Variance: Σx²/5 − 16 = 5.2, so Σx² = 106. The known squares sum to 1 + 4 + 36 = 41, so x² + y² = 65. Then xy = (121 − 65)/2 = 28. So x, y = 4, 7." },

{ q: "The classes 0–10, 10–20, 20–30, 30–40 have frequencies 2, 3, 4, 1 respectively. The variance of the grouped data is",
  o: ["84", "445", "19", "64"], a: 0,
  s: "The class marks are 5, 15, 25, 35. N = 10. Mean = (10 + 45 + 100 + 35)/10 = 19. Σfx²/N = (2·25 + 3·225 + 4·625 + 1·1225)/10 = 4450/10 = 445. Variance = 445 − 19² = 445 − 361 = 84." },

{ q: "Series A has mean 40 and standard deviation 8. Series B has mean 60 and standard deviation 9. Which series is more consistent?",
  o: ["A, since its standard deviation is smaller", "A, since its mean is smaller", "Both are equally consistent", "B, since its coefficient of variation (15%) is smaller than that of A (20%)"], a: 3,
  s: "Coefficient of variation = (SD/mean) × 100. For A: 8/40 × 100 = 20%. For B: 9/60 × 100 = 15%. The series with the smaller coefficient of variation is more consistent, so B." },

{ q: "For a moderately skewed distribution, the mean is 10 and the median is 9. Using the empirical relation, the mode is",
  o: ["8", "11", "7", "9"], a: 2,
  s: "Mode = 3 × Median − 2 × Mean = 27 − 20 = 7." },

{ q: "The variance of the two numbers 4 and 12 is",
  o: ["64", "8", "32", "16"], a: 3,
  s: "For two numbers a, b the variance is ((a − b)/2)². Here ((4 − 12)/2)² = 16." },

]
},



{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: CLASSICAL PROBABILITY ",
    questions: [

/* ======================= SECTION B: CLASSICAL PROBABILITY (13) ======================= */

{ q: "Two fair dice are thrown. The probability that the sum of the numbers is 8 is",
  o: ["1/6", "1/9", "7/36", "5/36"], a: 3,
  s: "The favourable outcomes are (2,6), (3,5), (4,4), (5,3), (6,2): 5 out of 36. Probability = 5/36." },

{ q: "Two fair dice are thrown. The probability that the sum is a multiple of 4 is",
  o: ["1/3", "5/18", "1/4", "7/36"], a: 2,
  s: "Sum 4: 3 ways. Sum 8: 5 ways. Sum 12: 1 way. Total = 9 out of 36, so the probability is 1/4." },

{ q: "Three fair coins are tossed. The probability of getting at least two heads is",
  o: ["1/2", "3/8", "1/4", "5/8"], a: 0,
  s: "Outcomes with 2 heads: 3. With 3 heads: 1. Total 4 out of 8, so the probability is 1/2." },

{ q: "One card is drawn from a well-shuffled pack of 52 cards. The probability that it is a king or a heart is",
  o: ["17/52", "4/13", "1/4", "5/13"], a: 1,
  s: "P(king) = 4/52, P(heart) = 13/52, P(king of hearts) = 1/52. P(king or heart) = (4 + 13 − 1)/52 = 16/52 = 4/13." },

{ q: "A bag has 5 red, 4 blue and 3 green balls. Three balls are drawn at random. The probability that all three have different colours is",
  o: ["1/11", "5/22", "3/11", "2/11"], a: 2,
  s: "Favourable selections: 5 × 4 × 3 = 60. Total: C(12, 3) = 220. Probability = 60/220 = 3/11." },

{ q: "Two cards are drawn at random (without replacement) from a pack of 52 cards. The probability that both are aces is",
  o: ["1/221", "1/169", "1/13", "2/221"], a: 0,
  s: "Probability = C(4, 2)/C(52, 2) = 6/1326 = 1/221." },

{ q: "Three persons are each born on some day of the week, independently and equally likely. The probability that all three were born on different days is",
  o: ["6/7", "30/49", "20/49", "15/49"], a: 1,
  s: "Total outcomes: 7³ = 343. Favourable: 7 × 6 × 5 = 210. Probability = 210/343 = 30/49." },

{ q: "A three-digit number is chosen at random. The probability that it is divisible by 7 is",
  o: ["1/7", "32/225", "1/9", "128/999"], a: 1,
  s: "There are 900 three-digit numbers. The multiples of 7 from 105 to 994 number (994 − 105)/7 + 1 = 128. Probability = 128/900 = 32/225." },

{ q: "Five persons sit in a row at random. The probability that two particular persons sit next to each other is",
  o: ["2/5", "1/5", "1/2", "3/5"], a: 0,
  s: "Treat the two as a block: 4! arrangements, times 2 internal orders, giving 48. Total arrangements: 5! = 120. Probability = 48/120 = 2/5." },

{ q: "Two fair dice are thrown. The probability that the product of the two numbers is even is",
  o: ["1/4", "1/2", "3/4", "2/3"], a: 2,
  s: "The product is odd only if both numbers are odd: (1/2)(1/2) = 1/4. So P(even) = 1 − 1/4 = 3/4." },

{ q: "The numbers 1, 2, 3, 4 are arranged at random in a row. The probability that no number is in its natural position is",
  o: ["1/3", "9/16", "3/8", "1/4"], a: 2,
  s: "The number of derangements of 4 objects is 9, out of 4! = 24 arrangements. Probability = 9/24 = 3/8." },

{ q: "A number is chosen at random from 1, 2, ..., 100. The probability that it is a multiple of 3 or 5 is",
  o: ["53/100", "47/100", "1/2", "33/100"], a: 1,
  s: "Multiples of 3: 33. Multiples of 5: 20. Multiples of 15: 6. Count = 33 + 20 − 6 = 47. Probability = 47/100." },

{ q: "Three fair dice are thrown. The probability that the sum of the numbers is 10 is",
  o: ["1/6", "1/8", "5/36", "1/12"], a: 1,
  s: "The number of ways to get sum 10 with three dice is 27. Total outcomes: 216. Probability = 27/216 = 1/8." },


]
},


{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: ADDITION, MULTIPLICATION, CONDITIONAL PROBABILITY AND INDEPENDENCE ",
    questions: [

/* ======================= SECTION C: ADDITION, MULTIPLICATION, CONDITIONAL PROBABILITY AND INDEPENDENCE (12) ======================= */

{ q: "If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, then P(A | B) equals",
  o: ["1/2", "2/5", "1/4", "3/5"], a: 0,
  s: "P(A | B) = P(A ∩ B)/P(B) = 0.2/0.4 = 1/2." },

{ q: "If A and B are independent events with P(A) = 1/2 and P(B) = 1/3, then P(A ∪ B) equals",
  o: ["2/3", "5/6", "1/6", "1/3"], a: 0,
  s: "P(A ∪ B) = P(A) + P(B) − P(A)P(B) = 1/2 + 1/3 − 1/6 = 2/3." },

{ q: "If P(A) = 0.5, P(B) = 0.6 and P(A ∪ B) = 0.8, then P(A′ | B) equals",
  o: ["1/3", "2/3", "3/5", "1/2"], a: 3,
  s: "P(A ∩ B) = 0.5 + 0.6 − 0.8 = 0.3. P(A′ ∩ B) = P(B) − P(A ∩ B) = 0.3. So P(A′ | B) = 0.3/0.6 = 1/2." },

{ q: "Two fair dice are thrown and the sum is 8. The probability that at least one of the dice shows 2 is",
  o: ["2/5", "1/3", "1/6", "1/2"], a: 0,
  s: "The outcomes with sum 8 are (2,6), (3,5), (4,4), (5,3), (6,2): 5 outcomes. Those with a 2: (2,6) and (6,2). So the probability is 2/5." },

{ q: "Two cards are drawn one after another without replacement from a pack of 52 cards. The probability that the second is an ace, given that the first is an ace, is",
  o: ["1/13", "3/52", "4/51", "1/17"], a: 3,
  s: "After one ace is removed, 51 cards remain with 3 aces. The probability is 3/51 = 1/17." },

{ q: "An urn contains 4 red and 6 blue balls. Two balls are drawn without replacement. The probability that both are red is",
  o: ["4/25", "1/5", "2/5", "2/15"], a: 3,
  s: "Probability = C(4, 2)/C(10, 2) = 6/45 = 2/15." },

{ q: "A and B are independent events with P(A) = 0.3 and P(A ∪ B) = 0.5. Then P(B) equals",
  o: ["1/5", "2/7", "2/5", "3/7"], a: 1,
  s: "P(A ∪ B) = P(A) + P(B) − P(A)P(B): 0.5 = 0.3 + P(B)(1 − 0.3), so P(B) = 0.2/0.7 = 2/7." },

{ q: "Three fair coins are tossed and at least one head appears. The probability that exactly two heads appear is",
  o: ["3/7", "3/8", "1/2", "1/4"], a: 0,
  s: "The outcomes with at least one head: 7. Those with exactly two heads: 3. Probability = 3/7." },

{ q: "A family has two children and at least one of them is a boy. The probability that both are boys is",
  o: ["1/3", "1/2", "1/4", "2/3"], a: 0,
  s: "The equally likely outcomes with at least one boy are BB, BG, GB. Of these, 1 has both boys. Probability = 1/3." },

{ q: "Two marksmen A and B hit a target with probabilities 3/4 and 2/3 independently. The probability that exactly one of them hits the target is",
  o: ["1/2", "1/6", "7/12", "5/12"], a: 3,
  s: "P(exactly one hits) = (3/4)(1/3) + (1/4)(2/3) = 3/12 + 2/12 = 5/12." },

{ q: "A fair die is thrown 4 times. The probability of getting at least one six is",
  o: ["1/6", "671/1296", "625/1296", "5/6"], a: 1,
  s: "P(no six in 4 throws) = (5/6)⁴ = 625/1296. So P(at least one six) = 1 − 625/1296 = 671/1296." },

{ q: "For two events A and B, P(A) = 1/2, P(B) = 1/3 and P(A ∩ B) = 1/6. The events are",
  o: ["mutually exclusive", "independent", "complementary", "none of these"], a: 1,
  s: "P(A)P(B) = 1/2 × 1/3 = 1/6 = P(A ∩ B), so the events are independent. They are not mutually exclusive since P(A ∩ B) ≠ 0." }, 

]
},



{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: TOTAL PROBABILITY AND BAYES' THEOREM ",
    questions: [

/* ======================= SECTION D: TOTAL PROBABILITY AND BAYES' THEOREM (7) ======================= */

{ q: "Bag I contains 3 red and 2 black balls, and Bag II contains 2 red and 4 black balls. A bag is chosen at random and a ball is drawn. The probability that the ball is red is",
  o: ["1/2", "3/10", "8/15", "7/15"], a: 3,
  s: "P(red) = (1/2)(3/5) + (1/2)(2/6) = 3/10 + 1/6 = 14/30 = 7/15." },

{ q: "In the same experiment (Bag I: 3 red, 2 black; Bag II: 2 red, 4 black; a bag chosen at random and a ball drawn), the ball is found to be red. The probability that it came from Bag I is",
  o: ["3/5", "5/14", "9/14", "1/2"], a: 2,
  s: "By Bayes' theorem: P(Bag I | red) = (1/2 × 3/5)/(7/15) = (3/10)/(7/15) = 9/14." },

{ q: "Three machines produce 50%, 30% and 20% of the items of a factory, with 1%, 2% and 3% defective items respectively. The probability that a randomly selected item is defective is",
  o: ["0.02", "0.015", "0.017", "0.025"], a: 2,
  s: "P(defective) = 0.5 × 0.01 + 0.3 × 0.02 + 0.2 × 0.03 = 0.005 + 0.006 + 0.006 = 0.017." },

{ q: "In the same factory (machines produce 50%, 30%, 20% of the items with 1%, 2%, 3% defective), a randomly selected item is found to be defective. The probability that it was produced by the third machine is",
  o: ["2/5", "3/17", "1/3", "6/17"], a: 3,
  s: "P(M₃ | defective) = (0.2 × 0.03)/0.017 = 0.006/0.017 = 6/17." },

{ q: "In a population, 1% of people have a disease. A test detects the disease in 90% of those who have it, and gives a false positive for 10% of those who do not have it. A person tests positive. The probability that the person has the disease is",
  o: ["9/10", "1/10", "1/11", "1/12"], a: 3,
  s: "P(disease and positive) = 0.01 × 0.9 = 0.009. P(no disease and positive) = 0.99 × 0.1 = 0.099. P(disease | positive) = 0.009/(0.009 + 0.099) = 0.009/0.108 = 1/12." },

{ q: "A box has two coins, one fair and one with heads on both sides. A coin is chosen at random and tossed twice, and both tosses give heads. The probability that the chosen coin is the two-headed coin is",
  o: ["1/2", "5/8", "4/5", "3/5"], a: 2,
  s: "P(HH) = (1/2)(1/4) + (1/2)(1) = 5/8. P(two-headed | HH) = (1/2 × 1)/(5/8) = 4/5." },

{ q: "A die is thrown. If the number is 1 or 2, a ball is drawn from Urn A (3 red, 2 white); otherwise a ball is drawn from Urn B (2 red, 4 white). The probability that the ball drawn is red is",
  o: ["1/2", "1/3", "19/45", "7/15"], a: 2,
  s: "P(red) = (2/6)(3/5) + (4/6)(2/6) = (1/3)(3/5) + (2/3)(1/3) = 1/5 + 2/9 = 19/45." },

]
},



{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: RANDOM VARIABLES, MEAN AND VARIANCE ",
    questions: [

/* ======================= SECTION E: RANDOM VARIABLES, MEAN AND VARIANCE (6) ======================= */

{ q: "A fair coin is tossed twice and X is the number of heads. The variance of X is",
  o: ["1", "1/4", "3/4", "1/2"], a: 3,
  s: "P(X = 0, 1, 2) = 1/4, 1/2, 1/4. E(X) = 1. E(X²) = 0 + 1/2 + 4/4 = 3/2. Var(X) = 3/2 − 1 = 1/2." },

{ q: "Two fair dice are thrown and X is the sum of the numbers. Then E(X) and Var(X) are respectively",
  o: ["7 and 35/12", "7/2 and 35/12", "7 and 6", "7 and 35/6"], a: 3,
  s: "X = X₁ + X₂ for independent dice. E(Xᵢ) = 7/2 and Var(Xᵢ) = 35/12. So E(X) = 7 and Var(X) = 2 × 35/12 = 35/6." },

{ q: "The variance of the number obtained when a fair die is thrown once is",
  o: ["35/6", "35/12", "7/2", "91/6"], a: 1,
  s: "E(X) = 7/2 and E(X²) = 91/6. Var(X) = 91/6 − 49/4 = (182 − 147)/12 = 35/12." },

{ q: "A random variable X has P(X = x) = kx for x = 1, 2, 3, 4. Then E(X) equals",
  o: ["5/2", "2", "3", "10/3"], a: 2,
  s: "Σ kx = 10k = 1, so k = 1/10. E(X) = Σ x · kx = k(1 + 4 + 9 + 16) = 30/10 = 3." },

{ q: "A box contains 10 pens, of which 3 are defective. Two pens are drawn at random without replacement and X is the number of defective pens. The variance of X is",
  o: ["28/75", "3/5", "14/75", "7/15"], a: 0,
  s: "P(X = 0) = C(7,2)/C(10,2) = 21/45, P(X = 1) = 3 × 7/45 = 21/45, P(X = 2) = 3/45. E(X) = (21 + 6)/45 = 3/5. E(X²) = (21 + 12)/45 = 11/15. Var(X) = 11/15 − 9/25 = (55 − 27)/75 = 28/75." },

{ q: "A random variable X takes values 0, 1, 2, 3 with probabilities k, 2k, 3k, 4k. Then P(X ≥ 2) equals",
  o: ["7/10", "3/10", "1/2", "9/10"], a: 0,
  s: "k + 2k + 3k + 4k = 1 gives k = 1/10. P(X ≥ 2) = 3k + 4k = 7/10." },


]
},



{
title: "UNIT 13 : STATISTICS AND PROBABILITY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: BERNOULLI TRIALS AND BINOMIAL DISTRIBUTION ",
    questions: [

/* ======================= SECTION F: BERNOULLI TRIALS AND BINOMIAL DISTRIBUTION (10) ======================= */

{ q: "A fair coin is tossed 5 times. The probability of getting exactly 3 heads is",
  o: ["3/8", "5/16", "1/2", "5/32"], a: 1,
  s: "P = C(5, 3)(1/2)⁵ = 10/32 = 5/16." },

{ q: "A fair coin is tossed 10 times. The probability of getting at least 8 heads is",
  o: ["1/128", "7/128", "11/128", "5/64"], a: 1,
  s: "P = [C(10, 8) + C(10, 9) + C(10, 10)]/2¹⁰ = (45 + 10 + 1)/1024 = 56/1024 = 7/128." },

{ q: "A binomial distribution has mean 4 and variance 2. Then n equals",
  o: ["4", "8", "6", "16"], a: 1,
  s: "np = 4 and npq = 2, so q = 1/2 and p = 1/2. Then n = 4/(1/2) = 8." },

{ q: "A binomial distribution has mean 20 and standard deviation 4. Then n equals",
  o: ["100", "80", "50", "25"], a: 0,
  s: "np = 20 and npq = 16, so q = 16/20 = 4/5 and p = 1/5. Then n = 20/(1/5) = 100." },

{ q: "The probability of success in each trial is 1/3. The probability of at least one success in 4 independent trials is",
  o: ["16/81", "1/81", "65/81", "4/9"], a: 2,
  s: "P(no success) = (2/3)⁴ = 16/81. So P(at least one success) = 1 − 16/81 = 65/81." },

{ q: "An archer hits a target with probability 1/4 on each shot. In 5 independent shots, the probability of at least 3 hits is",
  o: ["53/512", "1/4", "45/512", "27/512"], a: 0,
  s: "P(3) = C(5,3)(1/4)³(3/4)² = 90/1024. P(4) = C(5,4)(1/4)⁴(3/4) = 15/1024. P(5) = (1/4)⁵ = 1/1024. Sum = 106/1024 = 53/512." },

{ q: "The least number of times a fair coin must be tossed so that the probability of at least one head is at least 0.99 is",
  o: ["5", "6", "7", "8"], a: 2,
  s: "P(at least one head) = 1 − (1/2)ⁿ ≥ 0.99 means 2ⁿ ≥ 100. Since 2⁶ = 64 < 100 and 2⁷ = 128 ≥ 100, the least n is 7." },

{ q: "A fair die is thrown 6 times. The probability of getting exactly two sixes is",
  o: ["625/15552", "3125/15552", "1/36", "5/36"], a: 1,
  s: "P = C(6, 2)(1/6)²(5/6)⁴ = 15 × 625/46656 = 9375/46656 = 3125/15552." },

{ q: "Which of the following can be the mean and variance, respectively, of a binomial distribution?",
  o: ["4 and 5", "5 and 5", "3 and 4", "4 and 3"], a: 3,
  s: "For a binomial distribution the variance npq = mean × q is less than the mean (since q < 1), unless p = 0. So only (mean, variance) = (4, 3) is possible." },

{ q: "The probability of success in each trial is 0.2. The probability of at most one success in 5 independent trials is",
  o: ["1024/3125", "1/5", "2304/3125", "256/625"], a: 2,
  s: "P(0) = (4/5)⁵ = 1024/3125. P(1) = 5 × (1/5)(4/5)⁴ = 1280/3125. Sum = 2304/3125." },


]
},


{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION A: RATIOS, IDENTITIES, COMPOUND AND MULTIPLE ANGLES ",
    questions: [


/* ======================= SECTION A: RATIOS, IDENTITIES, COMPOUND AND MULTIPLE ANGLES (18) ======================= */

{ q: "The value of sin 75° is",
  o: ["(√6 − √2)/4", "(√3 + 1)/2", "(√2 + 1)/4", "(√6 + √2)/4"], a: 3,
  s: "sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4." },

{ q: "The value of cos 36° − cos 72° is",
  o: ["1/4", "√5/4", "(√5 − 1)/4", "1/2"], a: 3,
  s: "cos 36° = (√5 + 1)/4 and cos 72° = (√5 − 1)/4. Their difference is 2/4 = 1/2." },

{ q: "The value of sin 10° sin 30° sin 50° sin 70° is",
  o: ["1/8", "1/32", "1/16", "√3/16"], a: 2,
  s: "sin 30° = 1/2. Also sin 10° sin 50° sin 70° = cos 80° cos 40° cos 20° = 1/8 (using sin 10° = cos 80°, sin 50° = cos 40°, sin 70° = cos 20°, and cos A cos 2A cos 4A with A = 20° gives sin 8A/(8 sin A) = sin 160°/(8 sin 20°) = 1/8). So the product is (1/2)(1/8) = 1/16." },

{ q: "The value of cos 20° cos 40° cos 60° cos 80° is",
  o: ["1/8", "1/16", "1/32", "1/4"], a: 1,
  s: "cos 60° = 1/2 and cos 20° cos 40° cos 80° = sin 160°/(8 sin 20°) = 1/8. So the product is 1/16." },

{ q: "The value of cos 20° cos 40° cos 80° is",
  o: ["1/16", "1/8", "1/4", "√3/8"], a: 1,
  s: "Multiply and divide by sin 20°: cos 20° cos 40° cos 80° = (sin 20° cos 20° cos 40° cos 80°)/sin 20° = (sin 160°)/(8 sin 20°) = sin 20°/(8 sin 20°) = 1/8." },

{ q: "The value of sin 18° sin 54° is",
  o: ["1/8", "1/4", "1/2", "√5/8"], a: 1,
  s: "sin 18° = (√5 − 1)/4 and sin 54° = cos 36° = (√5 + 1)/4. The product is (5 − 1)/16 = 1/4." },

{ q: "The value of tan 20° + tan 40° + √3 tan 20° tan 40° is",
  o: ["1", "3", "√3/3", "√3"], a: 3,
  s: "tan 60° = (tan 20° + tan 40°)/(1 − tan 20° tan 40°) = √3. So tan 20° + tan 40° = √3 − √3 tan 20° tan 40°. Hence the expression equals √3." },

{ q: "The value of cos²48° − sin²12° is",
  o: ["(√5 − 1)/8", "(√5 + 1)/8", "(√5 + 1)/4", "1/4"], a: 1,
  s: "cos²A − sin²B = cos(A + B) cos(A − B). With A = 48°, B = 12°: cos 60° cos 36° = (1/2)(√5 + 1)/4 = (√5 + 1)/8." },

{ q: "The value of tan 75° + cot 75° is",
  o: ["2", "2√3", "3", "4"], a: 3,
  s: "tan θ + cot θ = 1/(sin θ cos θ) = 2/sin 2θ. For θ = 75°: 2/sin 150° = 2/(1/2) = 4." },

{ q: "The value of tan 9° − tan 27° − tan 63° + tan 81° is",
  o: ["4", "2", "8", "1"], a: 0,
  s: "tan 81° = cot 9° and tan 63° = cot 27°. So the expression is (tan 9° + cot 9°) − (tan 27° + cot 27°) = 2/sin 18° − 2/sin 54° = 2(sin 54° − sin 18°)/(sin 18° sin 54°) = 2(1/2)/(1/4) = 4. (Here sin 54° − sin 18° = 2 cos 36° sin 18° = 1/2.)" },

{ q: "The value of cos(π/7) + cos(3π/7) + cos(5π/7) is",
  o: ["1", "1/2", "0", "−1/2"], a: 1,
  s: "Multiply by 2 sin(π/7): 2 sin(π/7) cos(π/7) = sin(2π/7), 2 sin(π/7) cos(3π/7) = sin(4π/7) − sin(2π/7), 2 sin(π/7) cos(5π/7) = sin(6π/7) − sin(4π/7). The sum is sin(6π/7) = sin(π/7). So the original sum is sin(π/7)/(2 sin(π/7)) = 1/2." },

{ q: "The value of sin 18° is",
  o: ["(√5 + 1)/4", "(√5 − 1)/4", "(√5 − 1)/2", "√5/4"], a: 1,
  s: "Let θ = 18°, so 2θ + 3θ = 90°, giving sin 2θ = cos 3θ. Then 2 sin θ cos θ = 4cos³θ − 3 cos θ, so 2 sin θ = 4(1 − sin²θ) − 3 = 1 − 4 sin²θ. Hence 4 sin²θ + 2 sin θ − 1 = 0 and sin θ = (−2 + √20)/8 = (√5 − 1)/4." },

{ q: "If sin θ + cos θ = 1/5, then sin 2θ equals",
  o: ["24/25", "−24/25", "−12/25", "−1/25"], a: 1,
  s: "Squaring: 1 + sin 2θ = 1/25, so sin 2θ = −24/25." },

{ q: "If tan A = 1/2 and tan B = 1/3 with A and B acute, then A + B equals",
  o: ["π/4", "π/3", "π/6", "π/2"], a: 0,
  s: "tan(A + B) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1. Since A + B is acute, A + B = π/4." },

{ q: "If tan θ = 1/2, then cos 2θ equals",
  o: ["3/5", "4/5", "1/5", "−3/5"], a: 0,
  s: "cos 2θ = (1 − tan²θ)/(1 + tan²θ) = (1 − 1/4)/(1 + 1/4) = (3/4)/(5/4) = 3/5." },

{ q: "If cos A = 3/5 and A is acute, then sin(A/2) equals",
  o: ["2/√5", "4/5", "1/√5", "1/5"], a: 2,
  s: "sin²(A/2) = (1 − cos A)/2 = (1 − 3/5)/2 = 1/5. Since A/2 is acute, sin(A/2) = 1/√5." },

{ q: "If A + B + C = π, tan A = 1 and tan B = 2, then tan C equals",
  o: ["−3", "3", "1/3", "−1/3"], a: 1,
  s: "tan C = −tan(A + B) = −(1 + 2)/(1 − 1·2) = −3/(−1) = 3." },

{ q: "If A + B + C = π, then (sin 2A + sin 2B + sin 2C)/(sin A sin B sin C) equals",
  o: ["2", "1", "4", "8"], a: 2,
  s: "sin 2A + sin 2B + sin 2C = 2 sin(A + B) cos(A − B) + 2 sin C cos C = 2 sin C [cos(A − B) − cos(A + B)] = 4 sin A sin B sin C. So the ratio is 4." },

]
},



{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION B: TRIGONOMETRIC EQUATIONS ",
    questions: [


/* ======================= SECTION B: TRIGONOMETRIC EQUATIONS (11) ======================= */

{ q: "The general solution of sin θ = 1/2 is",
  o: ["θ = 2nπ ± π/6", "θ = nπ + (−1)ⁿ π/6", "θ = nπ ± π/6", "θ = 2nπ + π/3"], a: 1,
  s: "sin θ = sin α has the general solution θ = nπ + (−1)ⁿ α. With α = π/6: θ = nπ + (−1)ⁿ π/6." },

{ q: "The number of solutions of 2 sin²x + sin x − 1 = 0 in [0, 2π] is",
  o: ["2", "4", "3", "1"], a: 2,
  s: "Factor: (2 sin x − 1)(sin x + 1) = 0. sin x = 1/2 gives x = π/6, 5π/6. sin x = −1 gives x = 3π/2. Total: 3 solutions." },

{ q: "The number of solutions of cos x + cos 2x + cos 3x = 0 in [0, 2π] is",
  o: ["4", "5", "7", "6"], a: 3,
  s: "cos x + cos 3x = 2 cos 2x cos x, so the equation is cos 2x (2 cos x + 1) = 0. cos 2x = 0 gives x = π/4, 3π/4, 5π/4, 7π/4. cos x = −1/2 gives x = 2π/3, 4π/3. None coincide, so there are 6 solutions." },

{ q: "The number of solutions of tan x + sec x = 2 cos x in [0, 2π] is",
  o: ["1", "2", "3", "4"], a: 1,
  s: "Multiply by cos x (cos x ≠ 0): sin x + 1 = 2 cos²x = 2 − 2 sin²x, so 2 sin²x + sin x − 1 = 0, i.e. sin x = 1/2 or sin x = −1. sin x = −1 gives x = 3π/2, where cos x = 0 (rejected). sin x = 1/2 gives x = π/6, 5π/6. So there are 2 solutions." },

{ q: "The number of solutions of sin x + cos x = 1 in [0, 2π] is",
  o: ["3", "2", "1", "4"], a: 0,
  s: "sin x + cos x = √2 sin(x + π/4) = 1, so sin(x + π/4) = 1/√2. Then x + π/4 = π/4 or 3π/4 (plus 2nπ), giving x = 0, π/2 (and 2π). In [0, 2π] the solutions are 0, π/2, 2π: 3 solutions." },

{ q: "The sum of all solutions of tan²x = 1 in the interval (0, 2π) is",
  o: ["2π", "4π", "3π", "8π"], a: 1,
  s: "tan x = ±1 gives x = π/4, 3π/4, 5π/4, 7π/4. Their sum is (1 + 3 + 5 + 7)π/4 = 4π." },

{ q: "The number of solutions of 2 cos²θ + 3 sin θ = 0 in [0, 2π] is",
  o: ["2", "1", "3", "4"], a: 0,
  s: "2(1 − sin²θ) + 3 sin θ = 0 gives 2 sin²θ − 3 sin θ − 2 = 0, so (2 sin θ + 1)(sin θ − 2) = 0. sin θ = 2 is impossible, so sin θ = −1/2, giving θ = 7π/6 and 11π/6: 2 solutions." },

{ q: "The number of solutions of sin 3x = sin x in [0, π] is",
  o: ["2", "3", "5", "4"], a: 3,
  s: "sin 3x − sin x = 2 cos 2x sin x = 0. sin x = 0 gives x = 0, π. cos 2x = 0 gives x = π/4, 3π/4. Total: 4 solutions." },

{ q: "The general solution of cos θ + √3 sin θ = 2 is",
  o: ["θ = 2nπ + π/3", "θ = 2nπ + π/6", "θ = nπ + π/3", "θ = 2nπ − π/3"], a: 0,
  s: "cos θ + √3 sin θ = 2 cos(θ − π/3) = 2, so cos(θ − π/3) = 1. Then θ − π/3 = 2nπ and θ = 2nπ + π/3." },

{ q: "The sum of all solutions of 2 sin²θ = 3 cos θ in [0, 2π] is",
  o: ["π", "2π", "4π/3", "π/3"], a: 1,
  s: "2(1 − cos²θ) = 3 cos θ gives 2 cos²θ + 3 cos θ − 2 = 0, so (2 cos θ − 1)(cos θ + 2) = 0. Since cos θ ≠ −2, cos θ = 1/2, giving θ = π/3, 5π/3. The sum is 2π." },

{ q: "The number of real solutions of sin x = x/10 is",
  o: ["5", "7", "9", "6"], a: 1,
  s: "Plot y = sin x and the line y = x/10. For x > 0 the line crosses the sine curve where x/10 ≤ 1, i.e. 0 < x ≤ 10; the humps of sin x on [0, 10] (from 0 to 3π ≈ 9.42, and the start of the next hump up to 10) give 3 positive intersections. By symmetry there are 3 negative intersections, plus x = 0. Total: 7." },

]
},



{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION C: INVERSE TRIGONOMETRIC FUNCTIONS ",
    questions: [


/* ======================= SECTION C: INVERSE TRIGONOMETRIC FUNCTIONS (15) ======================= */

{ q: "The value of sin⁻¹(sin(5π/6)) is",
  o: ["π/6", "5π/6", "−π/6", "π/3"], a: 0,
  s: "The principal value of sin⁻¹ lies in [−π/2, π/2]. sin(5π/6) = 1/2, so sin⁻¹(1/2) = π/6." },

{ q: "The value of cos⁻¹(cos(7π/6)) is",
  o: ["7π/6", "π/6", "−5π/6", "5π/6"], a: 3,
  s: "The principal value of cos⁻¹ lies in [0, π]. cos(7π/6) = −√3/2, and cos⁻¹(−√3/2) = 5π/6." },

{ q: "The value of sin⁻¹(sin 10), with 10 in radians, is",
  o: ["10 − 3π", "10 − 2π", "10", "3π − 10"], a: 3,
  s: "sin⁻¹ returns an angle in [−π/2, π/2]. Since sin(3π − t) = sin t, we have sin(3π − 10) = sin 10. And 3π − 10 ≈ −0.575 lies in [−π/2, π/2]. So sin⁻¹(sin 10) = 3π − 10." },

{ q: "The value of sin⁻¹(3/5) + sin⁻¹(4/5) is",
  o: ["π/4", "π", "π/2", "π/3"], a: 2,
  s: "sin⁻¹(4/5) = cos⁻¹(3/5), and sin⁻¹ x + cos⁻¹ x = π/2. So the sum is π/2." },

{ q: "The value of tan⁻¹(1/2) + tan⁻¹(1/3) is",
  o: ["π/4", "π/3", "π/6", "π/2"], a: 0,
  s: "tan⁻¹ a + tan⁻¹ b = tan⁻¹[(a + b)/(1 − ab)] when ab < 1. Here (1/2 + 1/3)/(1 − 1/6) = 1, so the sum is tan⁻¹ 1 = π/4." },

{ q: "The value of tan⁻¹ 2 + tan⁻¹ 3 is",
  o: ["π/4", "π/2", "3π/4", "−π/4"], a: 2,
  s: "Since ab = 6 > 1 and a, b > 0, tan⁻¹ a + tan⁻¹ b = π + tan⁻¹[(a + b)/(1 − ab)] = π + tan⁻¹(5/(−5)) = π − π/4 = 3π/4." },

{ q: "2 tan⁻¹(1/2) equals",
  o: ["tan⁻¹ 1", "tan⁻¹(3/4)", "tan⁻¹(4/3)", "tan⁻¹(2/3)"], a: 2,
  s: "2 tan⁻¹ x = tan⁻¹[2x/(1 − x²)] for |x| < 1. With x = 1/2: 1/(1 − 1/4) = 4/3, so the value is tan⁻¹(4/3)." },

{ q: "The value of cos(2 sin⁻¹(1/3)) is",
  o: ["1/9", "−7/9", "2/3", "7/9"], a: 3,
  s: "cos 2θ = 1 − 2 sin²θ with sin θ = 1/3: 1 − 2/9 = 7/9." },

{ q: "The value of sec²(tan⁻¹ 2) + cosec²(cot⁻¹ 3) is",
  o: ["13", "5", "10", "15"], a: 3,
  s: "sec²(tan⁻¹ 2) = 1 + 2² = 5. cosec²(cot⁻¹ 3) = 1 + 3² = 10. The sum is 15." },

{ q: "The value of sin(2 tan⁻¹(1/3)) + cos(tan⁻¹ 2√2) is",
  o: ["1", "3/5", "14/15", "7/15"], a: 2,
  s: "sin(2 tan⁻¹ x) = 2x/(1 + x²) = (2/3)/(10/9) = 3/5. cos(tan⁻¹ 2√2) = 1/√(1 + 8) = 1/3. The sum is 3/5 + 1/3 = 14/15." },

{ q: "The solution of tan⁻¹(x + 1) + tan⁻¹(x − 1) = tan⁻¹(8/31) is",
  o: ["x = 1/4 or −8", "x = 4", "x = 1/4", "x = −8"], a: 2,
  s: "tan⁻¹(x + 1) + tan⁻¹(x − 1) = tan⁻¹[2x/(2 − x²)] when the product (x² − 1) < 1. Setting 2x/(2 − x²) = 8/31 gives 4x² + 31x − 8 = 0, so x = 1/4 or x = −8. For x = −8 both terms are negative and the sum is not tan⁻¹(8/31) (a positive value), so it is rejected. Only x = 1/4 satisfies the equation." },

{ q: "The value of tan⁻¹(1/3) + tan⁻¹(1/5) + tan⁻¹(1/7) + tan⁻¹(1/8) is",
  o: ["π/2", "π/3", "π/4", "π/6"], a: 2,
  s: "tan⁻¹(1/3) + tan⁻¹(1/5) = tan⁻¹[(8/15)/(14/15)] = tan⁻¹(4/7). tan⁻¹(1/7) + tan⁻¹(1/8) = tan⁻¹[(15/56)/(55/56)] = tan⁻¹(3/11). Then tan⁻¹(4/7) + tan⁻¹(3/11) = tan⁻¹[(44 + 21)/(77 − 12)] = tan⁻¹(65/65) = π/4." },

{ q: "If cot⁻¹(√(cos α)) − tan⁻¹(√(cos α)) = x, then",
  o: ["sin x = tan²(α/2)", "sin x = cot²(α/2)", "sin x = tan(α/2)", "sin x = sin²(α/2)"], a: 0,
  s: "Let t = √(cos α). cot⁻¹ t = π/2 − tan⁻¹ t, so x = π/2 − 2 tan⁻¹ t. Then sin x = cos(2 tan⁻¹ t) = (1 − t²)/(1 + t²) = (1 − cos α)/(1 + cos α) = tan²(α/2)." },

{ q: "The range of the function f(x) = sin⁻¹ x + tan⁻¹ x on its domain [−1, 1] is",
  o: ["[−3π/4, 3π/4]", "[−π/2, π/2]", "[−π, π]", "[−π/4, π/4]"], a: 0,
  s: "Both sin⁻¹ x and tan⁻¹ x are increasing on [−1, 1], so f is increasing. f(1) = π/2 + π/4 = 3π/4 and f(−1) = −3π/4. The range is [−3π/4, 3π/4]." },

{ q: "The domain of the function f(x) = sin⁻¹(2x − 1) is",
  o: ["[0, 1]", "[−1, 1]", "[−1, 0]", "[0, 2]"], a: 0,
  s: "We need −1 ≤ 2x − 1 ≤ 1, i.e. 0 ≤ 2x ≤ 2, so 0 ≤ x ≤ 1." },

]
},



{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION D: HEIGHTS AND DISTANCES ",
    questions: [


/* ======================= SECTION D: HEIGHTS AND DISTANCES (8) ======================= */

{ q: "From a point on level ground the angle of elevation of the top of a tower is 30°. On moving 20 m towards the tower the angle of elevation becomes 45°. The height of the tower is",
  o: ["10(√3 − 1) m", "10(√3 + 1) m", "20(√3 + 1) m", "10√3 m"], a: 1,
  s: "Let the height be h and the closer point be at distance h from the base (45°). The farther point is at h + 20, with tan 30° = h/(h + 20) = 1/√3, so √3 h = h + 20 and h = 20/(√3 − 1) = 10(√3 + 1) m." },

{ q: "The angle of elevation of the top of a 50 m tower from a point on the ground is 60°. The distance of the point from the foot of the tower is",
  o: ["50√3 m", "50/√3 m", "25 m", "100/√3 m"], a: 1,
  s: "tan 60° = 50/d, so d = 50/√3 = 50√3/3 m." },

{ q: "A 10 m long ladder leans against a vertical wall and makes an angle of 60° with the ground. The height it reaches on the wall is",
  o: ["5 m", "5√3 m", "10√3 m", "5√3/2 m"], a: 1,
  s: "Height = 10 sin 60° = 10 × √3/2 = 5√3 m." },

{ q: "The angles of elevation of the top of a tower from two points at distances 9 m and 4 m from its foot, on the same straight line through the foot, are complementary. The height of the tower is",
  o: ["5 m", "13/2 m", "6 m", "36 m"], a: 2,
  s: "Let the angles be θ and 90° − θ. tan θ = h/9 and tan(90° − θ) = h/4, so (h/9)(h/4) = 1 and h² = 36, giving h = 6 m." },

{ q: "From the top of a cliff 100 m high, the angle of depression of a boat on the sea is 30°. The distance of the boat from the foot of the cliff is",
  o: ["100/√3 m", "200 m", "50√3 m", "100√3 m"], a: 3,
  s: "The angle of depression equals the angle of elevation from the boat: tan 30° = 100/d, so d = 100/tan 30° = 100√3 m." },

{ q: "From the top of a lighthouse 75 m high, the angles of depression of two ships on opposite sides of it are 30° and 45°. The distance between the ships is",
  o: ["75(√3 − 1) m", "75√3 m", "75(√3 + 1) m", "150 m"], a: 2,
  s: "The distances from the foot are 75/tan 30° = 75√3 and 75/tan 45° = 75. On opposite sides, the distance between the ships is 75√3 + 75 = 75(√3 + 1) m." },

{ q: "The shadow of a pole of height h on level ground has length h/√3. The angle of elevation of the sun is",
  o: ["60°", "30°", "45°", "90°"], a: 0,
  s: "tan θ = h/(h/√3) = √3, so θ = 60°." },

{ q: "From a point on level ground the angle of elevation of the top of a tower is 30°. On walking 40 m towards the tower, the angle of elevation becomes 60°. The height of the tower is",
  o: ["20 m", "40√3 m", "10√3 m", "20√3 m"], a: 3,
  s: "Let the closer point be at distance y from the base. tan 60° = h/y gives y = h/√3. tan 30° = h/(y + 40) gives y + 40 = √3 h. So h/√3 + 40 = √3 h, so 40 = h(√3 − 1/√3) = 2h/√3, giving h = 20√3 m." },


]
},



{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION E: MAXIMA, MINIMA, RANGE AND PERIOD  ",
    questions: [


/* ======================= SECTION E: MAXIMA, MINIMA, RANGE AND PERIOD (7) ======================= */

{ q: "The maximum value of 5 cos θ + 3 cos(θ + π/3) + 3 is",
  o: ["8", "11", "10", "7"], a: 2,
  s: "3 cos(θ + π/3) = (3/2) cos θ − (3√3/2) sin θ. So the expression is (13/2) cos θ − (3√3/2) sin θ + 3. The amplitude is √(169/4 + 27/4) = √49 = 7. The maximum value is 7 + 3 = 10." },

{ q: "The range of the function f(x) = sin²x + cos⁴x is",
  o: ["[0, 1]", "[1/2, 1]", "[3/4, 1]", "[3/4, 3/2]"], a: 2,
  s: "f = sin²x + cos⁴x = 1 − cos²x + cos⁴x = 1 − cos²x(1 − cos²x) = 1 − sin²x cos²x = 1 − (sin²2x)/4. Since 0 ≤ sin²2x ≤ 1, f ranges over [3/4, 1]." },

{ q: "The minimum value of sec²θ + cosec²θ is",
  o: ["2", "1", "8", "4"], a: 3,
  s: "sec²θ + cosec²θ = 1/(sin²θ cos²θ) = 4/sin²2θ ≥ 4, with equality when sin²2θ = 1." },

{ q: "The minimum value of 27^(cos 2x) · 81^(sin 2x) is",
  o: ["1/243", "1/81", "1/729", "1/27"], a: 0,
  s: "The expression is 3^(3 cos 2x + 4 sin 2x). The exponent ranges over [−5, 5] (amplitude √(9 + 16) = 5). The minimum value is 3⁻⁵ = 1/243." },

{ q: "In a triangle ABC, the maximum value of cos A cos B cos C is",
  o: ["1/8", "1/4", "1/2", "3/8"], a: 0,
  s: "The product is maximised when the triangle is equilateral (A = B = C = 60°): (1/2)³ = 1/8." },

{ q: "The period of the function f(x) = sin 3x + cos 2x is",
  o: ["2π", "π", "π/3", "π/6"], a: 0,
  s: "The period of sin 3x is 2π/3 and of cos 2x is π. The LCM of 2π/3 and π = 3π/3 is 2π (since 2π = 3 × 2π/3 = 2 × π)." },

{ q: "The period of f(x) = |sin x| + |cos x| is",
  o: ["π", "2π", "π/2", "π/4"], a: 2,
  s: "|sin x| and |cos x| each have period π. Also f(x + π/2) = |cos x| + |sin x| = f(x), so π/2 is a period. It is the smallest, so the period is π/2." },

]
},



{
title: "UNIT 14 : TRIGONOMETRY ", levels: [ "JEE Main"], minutes: 0,
    desc: " SECTION F: MIXED PROBLEMS ",
    questions: [


/* ======================= SECTION F: MIXED PROBLEMS (4) ======================= */

{ q: "The solutions of sin⁻¹ x + sin⁻¹(1 − x) = cos⁻¹ x are",
  o: ["x = 0 and x = 1/2", "x = 0 only", "x = 1/2 only", "x = 0 and x = 1"], a: 0,
  s: "All three functions are defined for 0 ≤ x ≤ 1. Taking sine of both sides: x√(1 − (1 − x)²) + (1 − x)√(1 − x²) = √(1 − x²). Checking: x = 0 gives 0 + π/2 = π/2 = cos⁻¹ 0, which holds. x = 1/2 gives π/6 + π/6 = π/3 = cos⁻¹(1/2), which holds. x = 1 gives π/2 + 0 = π/2 but cos⁻¹ 1 = 0, which fails. Examining the function sin⁻¹ x + sin⁻¹(1 − x) − cos⁻¹ x on [0, 1] shows it vanishes only at x = 0 and x = 1/2. So the solutions are x = 0 and x = 1/2." },

{ q: "The solution of tan⁻¹ x + 2 cot⁻¹ x = 2π/3 is",
  o: ["x = 1/√3", "x = 1", "x = √3/2", "x = √3"], a: 3,
  s: "For x > 0, cot⁻¹ x = π/2 − tan⁻¹ x. So tan⁻¹ x + 2(π/2 − tan⁻¹ x) = π − tan⁻¹ x = 2π/3, giving tan⁻¹ x = π/3 and x = √3." },

{ q: "If cos⁻¹ x − cos⁻¹(y/2) = α, then 4x² − 4xy cos α + y² equals",
  o: ["4 cos²α", "4", "sin²α", "4 sin²α"], a: 3,
  s: "cos⁻¹ x = α + cos⁻¹(y/2). Taking cosine: x = (y/2) cos α − √(1 − y²/4) sin α. So (x − (y/2) cos α)² = (1 − y²/4) sin²α, which gives x² − xy cos α + y²/4 = sin²α. Multiplying by 4: 4x² − 4xy cos α + y² = 4 sin²α." },

{ q: "The value of tan(cos⁻¹(4/5) + tan⁻¹(2/3)) is",
  o: ["6/17", "7/6", "17/6", "11/6"], a: 2,
  s: "tan(cos⁻¹(4/5)) = 3/4. Then tan(A + B) = (3/4 + 2/3)/(1 − (3/4)(2/3)) = (17/12)/(1/2) = 17/6." },

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
