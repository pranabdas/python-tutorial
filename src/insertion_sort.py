# here we start sorting part of the array, then compare and insert next element
# so that the part with next element is sorted

def insertion_sort(arr):
    if len(arr) < 2:
        return

    for i in range(1, len(arr)):
        j = i
        while j > 0 and arr[j] < arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1
        print("Step", i, "=>", arr)


if __name__ == "__main__":
    arr = [5, 8, 2, 7, 6, 5]
    print("Un-order input:", arr)
    insertion_sort(arr)
    print("Sorted output :", arr)
