import { verify } from "jsonwebtoken";


//PRECISA FAZER LOGIN
export const verificarToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        verify( token, process.env.JWT_SECRET, (error, user) => {
            if (error) res.status(403).json("TOKEN NÃO É VÁLIDO!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("VOCÊ NÃO ESTÁ AUTENTICADO!");
    }
};


//PRECISA TER AUTORIZAÇÃO
export const verificarTokenEAutorizacao = (req, res, next) => {
    verificarToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("NÃO TENS PERMISSÃO PARA FAZER ISSO!")
        }
    });
};


//PRECISA SER ADMIN
export const verificarTokenEAdmin = (req, res, next) => {
    verificarToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("NÃO TENS PERMISSÃO PARA FAZER ISSO!");
        }
    });
};

