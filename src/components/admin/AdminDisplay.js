import React from 'react';

export const AdminDisplay = ({submit}) => {
    return (
        <div>
            <h1>BlisS</h1>
            <form onSubmit={submit}>
                <input type="submit" />
            </form>
        </div>
    )
}