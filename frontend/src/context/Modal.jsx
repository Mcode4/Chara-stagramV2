import {
    useRef,
    useState,
    useContext,
    createContext,
    useEffect,
    useCallback
} from "react";
import ReactDOM from "react-dom";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [modalContent, setModalContent] = useState(null);
    const [onModalClose, setOnModalClose] = useState(null);

    const closeModal = useCallback(() => {
        setModalContent(null)
        document.body.classList.remove('no-scroll')

        if (typeof onModalClose === "function") {
            setOnModalClose(null)
            onModalClode()
        }
    }, [onModalClose]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);

    const openModal = (content) => {
        setModalContent(content);
        document.body.classList.add('no-scroll');
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);

    const contextValue = {
        modalRef,
        modalContent,
        setModalContent: openModal,
        setOnModalClose,
        closeModal
    };

    return (
        <>
            <ModalContext.Provider value={contextValue}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    )
}

export function Modal() {
    const { modalRef, modalContent, closeModal } = useContext(modalContext);

    if(!modalRef || !modalRef.current || !modalContent) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={closeModal} />
            <div id="modal-content">
                <button className="closeButton" onClick={closeModal}>
                    x
                </button>
                {modalContent}
            </div>
        </div>,
        modalRef.current
    )
}