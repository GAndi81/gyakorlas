var movie = [1, true, 'Kincs ami van', Array, 1986];
movie[3] = ['map', 'jam', 'boat', 'gun']
movie[3][1] = 'Piedone';
movie[3][movie[3].length - 1] = 'Anulu';
var title = movie[2].replace('van', 'nincs');
var classic = movie[1] == true && movie[movie.lenght - 1] < 1990;