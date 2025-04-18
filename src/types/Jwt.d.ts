export interface JwtResponse {
	id: string;
    token: string;
    refreshToken: string;
    expires: string;
    expiresRefreshToken: string;
}