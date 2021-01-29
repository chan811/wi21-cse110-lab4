### Question 1: the value of i will be printed out which is prices.length - 1 this is because var has function scope not block scope so i exists outside the for loop
### Question 2: the value of discountedPrice will be printed out which is prices[prices.length - 1]*(1 - discount) this is because var has function scope not block scope so it exists outside the for loop
### Question 3: the value of finalPrice will be printed out which is Math.round(prices[prices.length - 1]*(1 - discount)*100) / 100 this is because var has function scope not block scope so finalPrice exists outside the for loop
### Question 4: if we call discountedPrices([100, 200, 300], .5) then the for loop will make 3 loops because the size of [100, 200, 300] is 3
- first loop: i = 0 so discountedPrice = prices[0]*(1 - discount) = 100 * .5 = 50 then finalPrice = 50 * 100 / 100 = 50 so discounted = [50]
- second loop: i = 1 so discountedPrice = prices[1]*(1 - discount) = 200 * .5 = 100 then finalPrice = 100 * 100 / 100 = 100 so discounted = [50 100]
- third loop: i = 2 so discountedPrice = prices[2]*(1 - discount) = 300 * .5 = 150 then finalPrice = 150 * 100 / 100 = 150 so discounted = [50 100 150]
- return: so then discounted = [50 100 150] is returned
### Question 5: this will result in an error because i is not defined outside the for loop because it has block scope since we used let
### Question 6: this will result in an error because discountedPrice is not defined outside the for loop because it has block scope since we used let
### Question 7: the value of finalPrice will be printed out which is Math.round(prices[prices.length - 1]*(1 - discount)*100) / 100 this is because let has block scope and finalPrice was initialized outside the for loop
### Question 8: if we call discountedPrices([100, 200, 300], .5) then the for loop will make 3 loops because the size of [100, 200, 300] is 3
- first loop: i = 0 so discountedPrice = prices[0]*(1 - discount) = 100 * .5 = 50 then finalPrice = 50 * 100 / 100 = 50 so discounted = [50]
- second loop: i = 1 so discountedPrice = prices[1]*(1 - discount) = 200 * .5 = 100 then finalPrice = 100 * 100 / 100 = 100 so discounted = [50 100]
- third loop: i = 2 so discountedPrice = prices[2]*(1 - discount) = 300 * .5 = 150 then finalPrice = 150 * 100 / 100 = 150 so discounted = [50 100 150]
- return: so then discounted = [50 100 150] is returned
### Question 9:this will result in an error because i is not defined outside the for loop because it has block scope since we used let
### Question 10: this will result in an error because discountedPrice is not defined outside the for loop because it has block scope since we used const
### Question 11: the value of finalPrice will be printed which is 0 because that was the value it was initalized with since it is a const it maintains its original value and since it was initalized outside the for loop it is still defined since const has block scope
### Question 12: if we call discountedPrices([100, 200, 300], .5) then the for loop will make 3 loops because the size of [100, 200, 300] is 3
- first loop: i = 0 so discountedPrice = prices[0]*(1 - discount) = 100 * .5 = 50 but since finalPrice is const it maintains its origial value 0 so when it is pushed into discounted, discounted becomes [0]
- second loop: i = 1 so discountedPrice = prices[1]*(1 - discount) = 200 * .5 = 100 but since finalPrice is const it maintains its origial value 0 so when it is pushed into discounted, discounted becomes [0, 0]
- third loop: i = 2 so discountedPrice = prices[2]*(1 - discount) = 300 * .5 = 150 but since finalPrice is const it maintains its origial value 0 so when it is pushed into discounted, discounted becomes [0, 0, 0]
- return: so then discounted = [0, 0, 0] is returned
### Question 13:
  - A. student.name
  - B. student['Grad Year']
  - C. student.greeting()
  - D. student['Favorite  Teacher'].name
  - E. student.courseLoad[0]
### Question 14:
  - A. '32' the + operation means to concatenate or add since it is next to the string then it means to concatenate the two terms so 2 becomes a string type '2'
  - B. 1 the - operation means to the subtract so the string is converted to a number which gives 3 - 2 = 1
  - C. 3 the + operation means to add since no string is present, so null is converted to a number so null becomes 0 which gives 3 + 0 = 3
  - D. '3null' the + operation means to concatenate or add since it is next to the string then it means to concatenate the two terms so null becomes a string type 'null'
  - E. 4 the + operation means to add since no string is present, so true is converted to a number so true becomes 1 which gives 1 + 3 = 4
  - F. 0 the + operation means to add since no string is present, so null and false is converted to a number so null becomes 0 and false becomes 0 which gives 0 + 0 = 0
  - G. '3undefined' the + operation means to concatenate or add since it is next to the string then it means to concatenate the two terms so undefined becomes a string type 'undefined'
  - H. NaN the - operation means to the subtract so the string and undefined is converted to a number which gives 3 - NaN = NaN although NaN is a numeric type is means not a number so subtracting not a number from a number will give not a number
### Question 15:
  - A. true since there is a numeric type '3' is converted to 3 which results in 3 > 2 which is true
  - B. false since both '2' and '12' are strings it compares the first character '2' and '1' since '2' > '1' the result is false
  - C. true since there is a numeric type '2' is converted to 2 which results in 2 == 2 which is true
  - D. false since === is being used it is comparing the type and the value since string type is not the same as numeric type it is false
  - E. false true is converted to a number since there is a numeric type which results in 1 == 2 which is false
  - F. true Boolean(2) results in true because it has value this results in true === true since they are both type boolean and the same value the result is true
### Question 16: == compares the values but === compares the value and the type so == tests for equality but === tests for strict equality
### Question 17: "How are you?" will be printed because 2 == true is false since true will be converted to a numeric type so true becomes 1 and 2 == 1 is false. Moving past the if block to the else if(2) this results in true because 2 has value, this can be seen by performing Boolean(2) thus "How are you?" is printed and you never enter the else block

### Question 19: calling the function modifyArray([1,2,3], doSomething) then the for loop will make 3 loops because the size of [100, 200, 300] is 3
- first loop: i = 0, doSomething(array[0], function(x) { return x*2; }) is called to push the result into newArr
  - inside doSomething it returns function(array[0] + 2) inside function it returns  (array[0] + 2) * 2 = (1 + 2) * 2 = 6 so 6 is returned by function which is then returned by doSomething which is then pushed into newArr so newArr = [6]
- second loop: i = 1, doSomething(array[1], function(x) { return x*2; }) is called to push the result into newArr
  - inside doSomething it returns function(array[1] + 2) inside function it returns  (array[1] + 2) * 2 = (2 + 2) * 2 = 8 so 6 is returned by function which is then returned by doSomething which is then pushed into newArr so newArr = [6, 8]
- third loop: i = 2, doSomething(array[2], function(x) { return x*2; }) is called to push the result into newArr
  - inside doSomething it returns function(array[2] + 2) inside function it returns  (array[2] + 2) * 2 = (3 + 2) * 2 = 10 so 6 is returned by function which is then returned by doSomething which is then pushed into newArr so newArr = [6, 8, 10]
- return: so then newArr = [6, 8, 10] is returned
### Question 21: The output of this code is 
```
  1
  4
  3
  2
```
- this is because 1 is printed first then a timer is set for 3 and 2 and then 4 is printed next, then the timer for 3 is set off so 3 is printed and lastly the timer for 2 is done so 2 is printed





