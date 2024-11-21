import { Pica, PicaModelis } from './models/Pica';

const rootElement = document.querySelector('.root')!;

function createPizzaTemplate(pica: PicaModelis): string {
    return `
        <div class="pizza">
            <h2>${pica.pavadinimas}</h2>
            <p class="toppings">${pica.priedai.join(', ')}</p>
            <p>${pica.aprasymas}</p>
            <span>${pica.kaina} €</span>
            </div>
    `;
}

function renderTemplate(templates: string[], parent: Element): void {
    const templateElement = document.createElement('template');
    for (const template of templates) {
        templateElement.innerHTML += template;
    }
    parent.append(templateElement.content);
}


document.addEventListener('DOMContentLoaded', async () => {
    const picos  = await Pica.loadAll();
    console.log(picos);

    const picosSablonai = picos.map(createPizzaTemplate);
    renderTemplate(picosSablonai, rootElement);
});
