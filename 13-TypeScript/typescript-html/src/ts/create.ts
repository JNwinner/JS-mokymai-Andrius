import { PicaModelis, Pica } from './models/Pica';

const form = document.querySelector('.create') as HTMLFormElement;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const naujaPica: PicaModelis = {
        pavadinimas: data.get('pavadinimas') as string,
        aprasymas: data.get('aprasymas') as string,
        priedai: data.getAll('priedai') as string[],
        kaina: parseInt(data.get('kaina') as string)
    };

    const res = await Pica.save(naujaPica);
    if(!res.ok) { console.log('Nepavyko issaugoti sios picos')}
    if(res.ok) { window.location.href = 'index.html'}
});
