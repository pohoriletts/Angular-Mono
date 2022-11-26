export interface ISignUpModel {
    email: string,
    password: string,
};

export interface ISignInModel {
    email: string,
    password: string
};

export interface ISigInResponse {
    email: string;
    token: string;
}