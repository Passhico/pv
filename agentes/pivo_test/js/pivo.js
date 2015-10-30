/**
 * Created by salvamoya on 17/06/15.
 */

jQuery(document).ready(function($) {

    $("#modals").load("inc/modal_cont.html");

    $("#reg_form").submit(function(e){

        e.preventDefault();
        var cod = document.getElementById('cod');
        cod.value = '';
        var cod2 = document.getElementById('cod2');
        cod2.value = '';
        var cod3 = document.getElementById('cod3');
        cod3.value = '';

        var vaciar1 = document.getElementById('notas');
        vaciar1.value='';
        var vaciar2 = document.getElementById('notas2');
        vaciar2.value='';
        var vaciar3 = document.getElementById('nif');
        vaciar3.value='';
        var vaciar4 = document.getElementById('nif2');
        vaciar4.value='';
        var vaciar5 = document.getElementById('nif3');
        vaciar5.value='';
        var vaciar6 = document.getElementById('pedido');
        vaciar6.value='';

        var array = ['familia1', 'familia2', 'familia3', 'familia4', 'familia5', 'familia6',
            'familia7', 'familia8', 'familia9', 'familia10', 'familia11', 'familia12', 'familia13', 'familia14'];

        var array2 = ['motivo1', 'motivo2', 'motivo3', 'motivo4', 'motivo5', 'motivo6',
            'motivo7', 'motivo8', 'motivo9', 'motivo10', 'motivo11', 'motivo12',
            'motivo13', 'motivo14', 'motivo15', 'motivo16', 'motivo17', 'motivo18',
            'motivo19', 'motivo20', 'motivo21'];

        for(var item in array){

            var boton = document.getElementById(array[item]);
            boton.setAttribute('class', 'btn btn-warning');
        }
        for(var item in array2){

            var boton2 = document.getElementById(array2[item]);
            boton2.setAttribute('class', 'btn btn-warning');
        }

        $.ajax({

            url: $(this).attr("action"),
            type: $(this).attr("method"),
            data: $(this).serialize(),

            error: function(){

                alert('error');
            },

            success: function(data) {

                var array = JSON.parse(data);

                    if (array == 'sin llamada activa' || array == 'sin llamadas hoy') {

                        var calldata_cont = document.getElementById('call_data1');
                        calldata_cont.innerHTML='';
                        calldata_cont.setAttribute('class','alert alert-warning');
                        calldata_cont.setAttribute('role','alert');
                        var calldata = document.createElement('h3');
                        var espacio = document.createElement('br');
                        calldata.innerHTML = array;
                        calldata_cont.appendChild(calldata);
                        calldata_cont.appendChild(espacio);

                        } else {

                        var content = document.getElementById('call_data1');
                        content.innerHTML = '';
                        content.setAttribute('class', 'alert alert-warning');
                        content.setAttribute('role', 'alert');
                        var tabla = document.createElement('table');
                        tabla.setAttribute('class','table table-condensed table-stripped');
                        var tabla_head = document.createElement('thead');
                        var tabla_body = document.createElement('tbody');
                        var tr_body = document.createElement('tr');
                        var tr_head = document.createElement('tr');

                        for (var item in array) {

                            var th_head = document.createElement('th');
                            th_head.innerHTML = item;
                            tr_head.appendChild(th_head);

                            var th_body = document.createElement('td');
                            th_body.innerHTML = array[item];

                                if(item == 'id'){

                                    var id_origen = array[item];
                                }

                                if(item == 'telefono'){

                                    var telefono = array[item];
                                }

                                if(item == 'email'){

                                    var email = array[item];
                                }

                                if(item == 'motivo'){

                                    var xx ='ayu';

                                    if(array[item] == 'seg'){

                                        xx = 'seguimiento';
                                    }

                                    if(array[item] == 'dev'){

                                        xx = 'devolucion';
                                    }

                                    if(array[item] == 'oto'){

                                        xx = 'otros';
                                    }

                                    if(array[item] == 'ayu'){

                                        xx = 'ayuda compras';
                                    }

                                    if(array[item] == 'gar'){

                                        xx = 'garantias';
                                    }

                                    if(array[item] == 'callback'){

                                        xx = 'callback';
                                    }

                                    if(xx){

                                        document.getElementById('mtv').innerHTML = xx;
                                        document.getElementById('mtv2').innerHTML = xx;
                                    }

                                }

                            tr_body.appendChild(th_body);
                        }

                        if (xx){

                            var actions = document.createElement('th');
                            actions.innerHTML = 'banear';
                            tr_head.appendChild(actions);

                            var botones_cont = document.createElement('div');
                            botones_cont.setAttribute('class','btn-group btn-group-xs');

                            var ban1 = document.createElement('button');
                            ban1.setAttribute('class','btn btn-danger');
                            ban1.setAttribute('title','Banea por número de teléfono');
                            ban1.id = 'telban';
                            var ban1span = document.createElement('span');
                            ban1span.setAttribute('class', 'glyphicon glyphicon-phone');
                            ban1.setAttribute('onclick', 'banear_numero()');
                            ban1.appendChild(ban1span);

                            var ban2 = document.createElement('button');
                            ban2.setAttribute('class','btn btn-danger');
                            ban2.setAttribute('title','Banea por IP');
                            ban2.id = 'ipban';
                            ban2.innerHTML = 'IP';

                            var botones = document.createElement('td');
                            botones_cont.appendChild(ban1);
                            botones_cont.appendChild(ban2);
                            botones.appendChild(botones_cont);
                            tr_body.appendChild(botones);
                        }

                    tabla_body.appendChild(tr_body);
                    tabla_head.appendChild(tr_head);
                    tabla.appendChild(tabla_head);
                    tabla.appendChild(tabla_body);
                    content.appendChild(tabla);
                }

                document.getElementById('telefono').value = telefono;
                document.getElementById('telefono2').value = telefono;
                document.getElementById('email').value = email;
                document.getElementById('email2').value = email;
                document.getElementById('id_origen').value = id_origen;
                document.getElementById('id_origen2').value = id_origen;
            }
        });
        agent_status();
    });
});

function bus_cli(){

    var tel = document.getElementById('telefono').value;
    var mail = document.getElementById('email').value;
    var nif = document.getElementById('nif').value;

    var cod = document.getElementById('cod');
    cod.value = 'buscando...';
    var cod2 = document.getElementById('cod2');
    cod2.value = 'buscando...';
    var cod3 = document.getElementById('cod3');
    cod3.value = 'buscando...';

        if (!nif) {
            nif = document.getElementById('nif2').value;
            if (!nif) {
                nif = document.getElementById('nif3').value;
            }
        }

    $.ajax({

        url: ('bin/kramer.php'),
        type: ('POST'),
        data: ('tel='+tel+'&mail='+mail+'&nif='+nif),

        error: function(){

            alert('error');
        },

        success: function(data) {

            var msg = JSON.parse(data);

                if (msg == 'error'){

                    alert('error: no se han definido correctamente los parámetros para la consulta');
                    cod.value = '';
                    cod2.value = '';
                    cod3.value = '';

                } else {

                        for (var item in msg) {

                            if(msg[item] == null){
                                alert('No identificado, pedir NIF!!');
                            }

                            cod.value = msg[item];
                            cod2.value = msg[item];
                            cod3.value = msg[item];
                        }
                    }
                }
    });
}

function to_admin(){

    var cod = document.getElementById('cod').value;

    if (cod ==''){
        cod = document.getElementById('cod3').value;
    }

        if (cod != '' && cod != 'no id' && cod !='Código Cliente'){

            var dir = 'http://admin.pccomponentes.com/quovadis/clientes.php?codigoxgest='+cod;
            window.open(dir);

            //setIframeSrc('web_cont', dir);
        } else {

            alert('no existe el cliente');
        }
}

function agent_status(){

    var user = document.getElementById('user').value;
    var changer = document.getElementById('status_changer');
    var changer2 = document.getElementById('status_changer2');

    $.ajax({

        url: ('bin/kramer.php'),
        type: ('POST'),
        data: ('user='+user+'&estado=estado'),

        error: function(){

            alert('error');
        },

        success: function(data) {

            var chicken = JSON.parse(data);

            if (chicken !='') {

                if (chicken == 'activo') {

                    changer.setAttribute('class', 'btn btn-warning');
                    changer2.setAttribute('class', 'glyphicon glyphicon-pause');
                }
                if (chicken == 'pausa') {

                    changer.setAttribute('class', 'btn btn-success');
                    changer2.setAttribute('class', 'glyphicon glyphicon-play');
                }
            } else {

                alert('Atención. No estás registrado en la cola');
                changer.setAttribute('class', 'btn btn-warning');
                changer.setAttribute('title', 'no estás registrado en la cola');
                changer2.setAttribute('class', 'glyphicon glyphicon-alert');
            }
        }
    });
}

function status_changer(){

    var user = document.getElementById('user').value;

    $.ajax({

        url: ('bin/kramer.php'),
        type: ('POST'),
        data: ('user='+user+'&estado=changer'),

        error: function(){

            alert('error');
        },

        success: function() {

            agent_status();
        }
    });
}

function setIframeSrc(id, url) {
    document.getElementById(id).src = url;
}