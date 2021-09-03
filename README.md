# Guild - QA Engineer Project

### This is a single line node program which accepts arguments
* CalculateFood is a runnable function that will take the number of each size of the dog.

## Runnable function explanation
* CalculateFood function takes four arguments which are small dogs count, medium dogs count, large dogs count and left over food from last month and will return food for remaining dogs to be ordered.
* The first three arguments are small dogs count, medium dogs count and large dogs count. The fourth argument take the food in lbs
* This runnable function will verify the following cases
  * Test case to verify small dogs count is less than zero
  * Test case to verify medium dogs count is less than zero
  * Test case to verify large dogs count is less than zero 
  * Test case to validate dogs count more than 30 (smallDogsCount + mediumDogsCount + largeDogsCount)
  * Test case to validate small dogs count in float values
  * Test case to validate medium dogs count in float values
  * Test case to validate large dogs count in float values
  * Test case to validate dogs count in float values
  * Test case to validate food less than 0 lbs
  * Test case to validate if dogs count is equal to 0
  * Test case to validate valid food left
  * Test case to validate food to be ordered when Small dogs count is 0
  * Test case to validate food to be ordered when Medium dogs count is 0
  * Test case to validate food to be ordered when Large dogs count is 0
  * Test case to validate food to be ordered when left over food is a float value

## How this calculation is derived

### Hypothetical scenario
  * Given small dogs count, medium dogs count, large dogs count and left over food is 5, 3, 7, 17
    * Each dog has a certain lbs of food, which is small dogs food is 10 lbs, medium dogs food is 20 lbs and large dogs food is 30 lbs
    * Let's now calculate the food which is (smallDogsCount * 10) + (mediumDogsCount * 20) + (largeDogsCount * 30) = 320 lbs
    * Remaining food from last month is 17 lbs, deduct 17 lbs of food from 320 lbs which is 303 lbs
    * As mentioned, food need to be at least 20% more than the minimum needed to feed all dogs, so 20 percent of 303 which is 60.6 lbs
    * Let us now obtain the correct value of food in lbs to order for next mont which is 303 lbs + 60.6 lbs = 363.6 lbs is the food to be order for next month
    
## Steps to run the function and calculate
* Clone the project
* From your terminal follow the below command
  (Example to run the script)
  * node calculate_food.js 5 3 7 17, this will return the food for remaining dogs for next month as calculatedFoodForNextMont 363.6