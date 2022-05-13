/*
Бобу нужен быстрый способ вычислить объем кубоида с тремя значениями:
длина, ширина и высота кубоида. Напишите функцию, которая поможет Бобу с этим вычислением
 */
function getVolumeOfCuboid(length, width, height) {
        var volume_of_cuboid = length * width * height;
        return volume_of_cuboid;
    }

console.log(getVolumeOfCuboid(2,4,5));