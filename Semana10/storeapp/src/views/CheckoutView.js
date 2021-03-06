import React,{useContext, useState, useEffect} from 'react'
import {CarritoContext} from '../context/carritoContext'
import {useForm} from 'react-hook-form'
import {MapContainer, TileLayer, Marker, Popup, MapConsumer} from 'react-leaflet'
import L from 'leaflet' // se refiere a toda la libreria de leaflet
import {getVentas, registrarVenta} from '../services/ventasService'

export default function CheckoutView() {
    

    const [coords, setCoords] = useState([-16.42, -71.51])
    const [ventas, setVentas] = useState([])

    const {carrito} = useContext(CarritoContext)
    let carritoTmp = [...carrito]
    let totalCarrito = 0
    if(carrito.length > 1){
        totalCarrito = carritoTmp.reduce(
            (total, prod) => total.precio * total.cantidad + prod.precio * prod.cantidad
          )
    }else if(carrito.length === 1){
        totalCarrito = carrito[0].precio * carrito[0].cantidad
    }    
    // Trayendo las herramientas de hook form
    // register para registrar mis input
    // handleSubmit = es una fucnion qque maneja el onSubmit del form
    // errors, verifico las validaciones de register y segun eso muestra un error
    let {register, handleSubmit, errors} = useForm()

    let escucharSubmit = (data) => {
        // console.log(data)
        registrarVenta(data).then((nuevaVenta) => {
            console.log(nuevaVenta)
        })
        // esta funcion se encarga de manejar el submit
    }

    let obtenerVentas = () => {
        getVentas().then((misVentas) => {
            setVentas(misVentas)
        })
    }

    useEffect(() => {
        obtenerVentas()
    },[])

    
    return (
        <div>
            <h1 className="display-6">Finalizar Compra</h1>
            <div className="alert alert-success">
                Tu carrito actual tiene un valor actual de: S/. {totalCarrito}
            </div>
            <form onSubmit={handleSubmit(escucharSubmit)}>
                <div>
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" name="nombre" className="form-control" ref={register({required: true})} />
                    {errors.nombre && errors.nombre.type === "required" &&(
                        <small className="text-danger">El nombre es obligatorio</small>
                    )}
                </div>
                <div>
                    <label className="form-label">Direcci??n</label>
                    <input type="text" name="direccion" className="form-control" ref={register({required: true, minLength:8, maxLength:20})} />
                    {errors.direccion && errors.direccion.type === "required" &&(
                        <small className="text-danger">La direcci??n es obligatoria</small>
                    )}
                    {errors.direccion && errors.direccion.type === "minLength" &&(
                        <small className="text-danger">La longitud m??nima es 8</small>
                    )}
                    {errors.direccion && errors.direccion.type === "maxLength" &&(
                        <small className="text-danger">La longitud m??xima es 20</small>
                    )}
                </div>

                <button type="text" className="btn btn-success btn-lg mt-3">
                    Realizar Compra
                </button>

            </form>
            <MapContainer
                center={[-16.42, -71.51]}
                zoom={50}
                style={{height:'500px'}}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapConsumer>
                    {
                        (map) => {
                            map.on("click", (e) => {
                                const {lat, lng} = e.latlng
                                setCoords([lat, lng])
                                // L.marker([lat, lng]).addTo(map)
                            })
                            return null
                        }
                    }
                </MapConsumer>
                <Marker position={coords}>
                  <Popup>
                      <p>Caf?? aqu??</p>
                  </Popup>      
                </Marker>
            </MapContainer>
        </div>
    )
}
