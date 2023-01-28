print("""GPA calculator:
This program calculates GPA from letter grades.
Please enter your letter grades one by one.
Type 'done' when finished entering all the grades.""")

# map letter grades to numeric points
points = {"A+": 4.0, "A": 3.9, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
          "C+": 2.3, "C": 2.0, "C-": 1.7, "D+": 1.3, "D": 1.0, "D-": 0.7,
          "F": 0.0}

number_course = 0
total = 0
done = False

while not done:
    grade = input("Enter letter grade ({0}): ".format(number_course + 1))
    if grade.lower() == "done":
        done = True
    elif grade not in points:
        print("Unknown grade '{0}' will be ignored.".format(grade))
    else:
        number_course += 1
        total += points[grade]

if number_course > 0:
    print("GPA = {0:.2}".format(total / number_course))
