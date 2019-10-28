// Init list of district names and population - Cho danh sách các quận của một thành phố cùng diện tích cũng 
// như dân số của các quận này như bảng
// Tạo 2 list:
// List đầu tiên, theo thứ tự từ trên xuống dưới, bao gồm tên của các quận trong bảng
// List thứ hai, theo thứ tự từ trên xuống dưới, bao gồm dân số của các quận trong 
let nameDistrict = ['ST', 'BĐ', 'BTL', 'CG', 'DĐ', 'HBT']
console.log(nameDistrict);
let population = [150.300, 247.100, 333.300, 266.800, 420.900, 318.000]
let acreage = [117.43, 9.224, 14.35, 12.04, 9.96, 10.09]
console.log(acreage);
console.log(population);
let max = population[0]
let min = population[0]
let indexmax = 0
let indexmin = 0
for(let i = 0; i < population.length; i++)
{
    if(max < population[i])
    {
        max = population[i]
        indexmax = i
    }
}
for( let j = 0; j < population.length; j++)
{
    if(min > population[j])
    {
        min = population[j]
        indexmin = j
    }
}
console.log(max);
console.log(min);
console.log(indexmax);
console.log(indexmin);
console.log('quan co dan so dong nhat', nameDistrict[indexmax]);
console.log('quan co dan so it nhat', nameDistrict[indexmin]);
let density = [ ]
for(let i = 0; i < population.length; i++)
{
 density.push(population[i]/acreage[i])
}
console.log(density);
let numPopulation = 0
for(let i = 0; i < density.length; i++)
{
    numPopulation = density[i] + numPopulation
}
console.log(numPopulation);
console.log('mat do dan cu trung binh :', numPopulation/nameDistrict.length);




