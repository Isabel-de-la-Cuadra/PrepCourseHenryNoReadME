for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

while (suma < 3) {
    suma = suma + 1;
    console.log(suma);
};

i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3)
        continue;
    n += i;
    console.log(n);
}