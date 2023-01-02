# recursively divide the array in two, sort each and merge them, much faster
# than selection and insertion sort, takes `n log(n)` time

def merge_sort(A, a = 0, b = None):
    if b is None:
        b = len(A)
    if 1 < b - a:
        c = (a + b + 1) // 2
        merge_sort(A, a, c)
        merge_sort(A, c, b)
        L, R = A[a:c], A[c:b]
        i, j = 0, 0
        while a < b:
            if (j >= len(R)) or (i < len(L) and L[i] < R[j]):
                A[a] = L[i]
                i += 1
            else:
                A[a] = R[j]
                j += 1
            a=a+1


if __name__ == "__main__":
    arr = [5, 8, 2, 7, 6, 5]
    print("Un-order input:", arr)
    merge_sort(arr)
    print("Sorted output :", arr)
