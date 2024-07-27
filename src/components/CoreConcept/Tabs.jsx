export const Tabs = ({ children, buttons, ButtonsContainer = 'menu' }) => {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
};