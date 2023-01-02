# Say we are given the following array to sort: 5 8 2 3 7 9
# Step 1: find the biggest element in first (n - 1) element and swap it with the
# last element if it is bigger than the last element else do nothing
# Step 2: find biggest element in first (n - 2) element, and swap it with
# (n-1)th element if it is bigger

def selection_sort(arr):
    # note that `arr` will be mutated and modified in-place, if you wat to
    # preserve, make deep copy by `arr_copy = arr.copy()` before modifying and
    # return modified array
    n = len(arr)
    for i in range(n - 1):
        biggest = max(arr[:(n - 1 - i)])
        id = arr.index(biggest)
        if biggest > arr[n - 1 - i]:
            arr[n - 1 - i], arr[id] = arr[id], arr[n - 1 - i]
        print("Step", i + 1, "=>", arr)


if __name__ == "__main__":
    arr = [5, 8, 2, 7, 6, 5]
    print("Un-order input:", arr)
    selection_sort(arr)
    print("Sorted output :", arr)
