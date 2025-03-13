package com.klu.service;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTManager {
    public SecretKey key = Keys.hmacShaKeyFor("aqfedasfhjlfadslfiejndhfndieneidkdoeh".getBytes());

    public String generateToken(String username) {
        Map<String, String> claims = new HashMap<>();
        claims.put("username", encryptData(username));
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 86400000))
                .signWith(key)
                .compact();
    }

    public Map<String, String> validateToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            Date expiration = claims.getExpiration();
            if (expiration == null || expiration.before(new Date())) {
                Map<String, String> response = new HashMap<>();
                response.put("code", "404");
                response.put("message", "Invalid token");
                return response;
            }
            Map<String, String> response = new HashMap<>();
            response.put("code", "200");
            response.put("message", decryptData(claims.get("username", String.class)));
            return response;
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("code", "404");
            response.put("message", "Invalid token");
            return response;

        }
    }

    public String encryptData(String data) {
        try {
            MessageDigest MD5 = MessageDigest.getInstance("SHA-256");
            byte[] keyBytes = MD5.digest("RANDOMKEY".getBytes());
            SecretKeySpec key1 = new SecretKeySpec(keyBytes, 0, 16, "AES");
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.ENCRYPT_MODE, key1);
            byte[] encryptData = cipher.doFinal(data.getBytes());
            return Base64.getEncoder().encodeToString(encryptData);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public String decryptData(String data) {
        try {
            MessageDigest MD5 = MessageDigest.getInstance("SHA-256");
            byte[] keyBytes = MD5.digest("RANDOMKEY".getBytes());
            SecretKeySpec key1 = new SecretKeySpec(keyBytes, 0, 16, "AES");

            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, key1);

            byte[] encryptData = cipher.doFinal(Base64.getDecoder().decode(data));
            return new String(encryptData);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

}
