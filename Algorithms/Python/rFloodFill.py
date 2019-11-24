# TODO: understand this recursion and finish it as well

def rFloodFill(canvas2D,startXY,newColor):
    # given a new color number, fill out all adjacent numbers that are the same as the number to be changed
    x = startXY[1]
    y = startXY[0]
    original = canvas2D[y][x]
    # left = start [y][x-1]
    if canvas2D[y][x-1] == original:
        canvas2D[y][x-1] = newColor
        startXY
        rFloodFill(canvas2D,)
    # right = start [y][x+1]
    if canvas2D[y][x+1] == original:
        canvas2D[y][x+1] = newColor
    # up = start[y-1][x]
    if canvas2D[y-1][x] == original:
        canvas2D[y-1][x] = newColor
    # down = start[y+1][x]
    if canvas2D[y+1][x] == original:
        canvas2D[y+1][x] = newColor
    if startXY != original

    pass



canvas = [ [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
        ]

start = [2,2]

newColor = 5