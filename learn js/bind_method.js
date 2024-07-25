console.log("aaa")
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = () => {
    const cars = ["Honda", "Yamaha"];
    const root = $('#root');
    const submitBtn = $('#submit');
    const input = $('#input');
    return {
        get(car) {
            return cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map(function (car, index) {
                return `
                        <ul>
                            <li>${car} <span class="delete" data-index="${index}"> &times</span></li>
                            
                        </ul>
                     `
            })
            root.innerHTML = html.join('');

        },
        heanleDelete(e) {
            const deleteBtnd = e.target.closest('.delete')
            //console.log(deleteBtnd)
            if (deleteBtnd) {
                const index = deleteBtnd.dataset.index
                //console.log(index)
                console.log(this)
                this.delete(index)
                this.render()
            }
        },
        init() {
            submitBtn.onclick = () => {
                let car = input.value;
                this.get(car);
                this.render();
                input.value = null;
                input.focus();
            }
            root.onclick = this.heanleDelete.bind(this)
            //root.onclick = this.heanleDelete.bind(app)
            this.render();

        }
    }
}
app().init();