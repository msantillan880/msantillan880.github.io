document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

const  content = `
<ul class="row">
        <li class="col s12">
            <div class="row">
                <div class="col s12 l1 product-icon">
                    <i class="material-icons circle">shopping_cart</i>
                </div>
                <div class="input-field col s12 l3">
                    <select class="browser-default">
                        <option value="" disabled selected>Elegir un producto</option>
                        <option value="Pan">Pan (kgr)</option>
                        <option value="Harina">Harina (Paquete)</option>
                        <option value="Leche">Leche (unidad)</option>
                    </select>
                </div>
                <div class="input-field col s12 l3">
                    <input type="text" placeholder="Nota" id="nota" class="validate" required>
                    <label for="nota">Nota</label>
                </div>
                <div class="input-field col s12 l3">
                    <input type="number" placeholder="Cantidad" id="cantidad" class="validate" required>
                    <label for="cantidad">Cantidad</label>
                </div>
                <!--offset-7 completa con vacio los 7 q faltan para 12-->
                <div class="col s5 offset-7 l2">
                    <div class="col s6">
                        <a class="btn-floating btn-large waves-effect waves-light red"> <i
                                class="material-icons">remove</i> </a>
                    </div>
                    <div class="col s6">
                        <a class="btn-floating btn-large waves-effect waves-light red"> <i
                                class="material-icons">add</i> </a>
                    </div>
                </div>
            </div>
        </li>
</ul>
`



  });

