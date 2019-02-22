type union_array = (number | string) []

export const valid : union_array [] = [
    ["astring",99],
    [99 ,"astring"],
    [0 ,""],
    [0 , 0],
    ["", ""],
    ["", 0, "", 0],
    []
]

export const invalid : any [] = [
    ["astring",Number(10)],
    [{a:"b"} ,"astring"] 
]
