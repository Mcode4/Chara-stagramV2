import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ModalProvider, Modal } from "../context/Modal";

export default function Layout() {
    // const dispatch = useDispatch();
    // const [isLoaded, setIsLoaded] = useState(false);
    // useEffect(() => {
    //     dispatch('To be finished')
    // })

    return (
        <>
            <ModalProvider>
                <Outlet />
                <Modal />
            </ModalProvider>
        </>
    )
}